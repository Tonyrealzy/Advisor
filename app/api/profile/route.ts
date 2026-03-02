/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Get user profile
 *     description: Returns the authenticated user's profile information.
 *     tags:
 *       - Profile
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 profile:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *                     # Add other profile fields as needed
 *       401:
 *         description: Unauthorized
 */

import { requireAuth } from "@/middleware/auth";
import { JwtUserPayload } from "@/models/user";
import { ProfileService } from "@/services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const auth = await requireAuth(req);
    if (!auth.success) {
      return NextResponse.json(
        { success: false, error: "Unauthorized request" },
        { status: 401 },
      );
    }

    const email = (auth?.payload as JwtUserPayload)?.email;

    const response = await ProfileService.getProfile(email);
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
