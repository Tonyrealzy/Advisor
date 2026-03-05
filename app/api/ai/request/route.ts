/**
 * @swagger
 * /api/ai/request:
 *   post:
 *     summary: Get AI investment recommendations
 *     description: Returns investment recommendations based on user profile and preferences
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - AI
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               age:
 *                 type: integer
 *                 minimum: 18
 *                 maximum: 100
 *                 example: 30
 *               location:
 *                 type: string
 *                 example: Lagos
 *               investmentKnowledge:
 *                 type: string
 *                 enum: [beginner, intermediate, advanced]
 *                 example: beginner
 *               investmentPurpose:
 *                 type: string
 *                 example: Retirement savings
 *               investmentHorizon:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 50
 *                 example: 10
 *               riskTolerance:
 *                 type: string
 *                 enum: [low, medium, high]
 *                 example: medium
 *               amount:
 *                 type: number
 *                 example: 10000
 *               currency:
 *                 type: string
 *                 example: USD
 *     responses:
 *       200:
 *         description: Successfully generated recommendations
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

import { aiPostRequestSchema } from "@/lib/validations";
import { requireAuth } from "@/middleware/auth";
import { JwtUserPayload } from "@/models/user";
import { AIService } from "@/services";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const auth = await requireAuth(req);
    if (!auth.success) {
      return NextResponse.json(
        { success: false, error: "Unauthorized request" },
        { status: 401 },
      );
    }

    const userId = (auth?.payload as JwtUserPayload)?.id;
    const body = await req.json();
    const validated = await aiPostRequestSchema.safeParseAsync(body);
    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validated.error.flatten(),
        },
        { status: 400 },
      );
    }

    const {
      age,
      location,
      investmentKnowledge,
      investmentPurpose,
      investmentHorizon,
      riskTolerance,
      amount,
      currency,
    } = validated.data;
    const response = await AIService.getRecommendations(
      {
        age,
        location,
        investmentKnowledge,
        investmentPurpose,
        investmentHorizon,
        riskTolerance,
        amount,
        currency,
      },
      userId,
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
