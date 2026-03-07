/**
 * @swagger
 * /api/ai/response:
 *   get:
 *     summary: Get stored AI responses
 *     description: Returns paginated AI responses previously generated for the authenticated user.
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - AI
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *         required: false
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *         required: false
 *         description: Number of items per page
 *       - in: query
 *         name: from
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Start Date
 *       - in: query
 *         name: to
 *         schema:
 *           type: string
 *           format: date-time
 *         description: End Date
 *     responses:
 *       200:
 *         description: Successfully retrieved stored responses
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 response:
 *                   type: object
 *                   nullable: true
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 errors:
 *                   type: object
 *       401:
 *         description: Unauthorized request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 error:
 *                   type: string
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 error:
 *                   type: string
 */

import { NextRequest, NextResponse } from "next/server";
import { paginationSchema } from "@/lib/validations";
import { AIService } from "@/services";
import { JwtUserPayload } from "@/models/user";
import { requireAuth } from "@/middleware/auth";

export async function GET(req: NextRequest) {
  try {
    const auth = await requireAuth(req);
    if (!auth.success) {
      return NextResponse.json(
        { success: false, error: "Unauthorized request" },
        { status: 401 },
      );
    }

    const userId = (auth?.payload as JwtUserPayload)?.id;
    const searchParams = req.nextUrl.searchParams;

    const parsed = await paginationSchema.safeParseAsync({
      page: searchParams.get("page"),
      limit: searchParams.get("limit"),
    });

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const { page, limit, from, to } = parsed.data;
    const response = await AIService.getStoredResponses(
      userId,
      { page, limit },
      from,
      to,
    );

    return NextResponse.json({
      success: true,
      response,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}
