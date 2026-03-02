/**
 * @swagger
 * /api/auth/change-password:
 *   post:
 *     summary: Change user password
 *     description: Changes the user's password using a valid reset token.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 example: 1234567890abcdef
 *               newPassword:
 *                 type: string
 *                 example: newStrongPassword@123
 *     responses:
 *       200:
 *         description: Password changed successfully
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


import { changePasswordSchema } from "@/lib/validations";
import { PasswordService } from "@/services";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = await changePasswordSchema.safeParseAsync(body);
    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validated.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { token, newPassword } = validated.data;
    const response = await PasswordService.changePassword(token, newPassword);
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
