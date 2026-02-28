import { AuthService } from "@/services";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/auth/confirm-signup:
 *   post:
 *     summary: Confirm user signup
 *     description: Confirms a user's signup using their email and confirmation token.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               token:
 *                 type: string
 *                 example: 1234567890abcdef
 *     responses:
 *       200:
 *         description: Successfully confirmed signup
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 response:
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
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, token } = body;
    const response = await AuthService.confirmSignup(email, token);
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
