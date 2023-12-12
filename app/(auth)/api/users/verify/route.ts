import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/User";
import { UserRegister } from "@/types";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const emailType = searchParams?.get("type");
    const token = searchParams?.get("token");
    let user;
    if (emailType === "emailValidation") {
      user = await User.findOne({
        verifyToken: token,
        verifyTokenExpiry: {
          $gt: Date.now()
        }
      });
      if (!user) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 500 }
        );
      }
      user.isVerified = true;
      user.verifyToken = undefined;
      user.verifyTokenExpiry = undefined;
      await user.save();
    } else if (emailType === "resetPassword") {
      user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordTokenExpiry: {
          $gt: Date.now()
        }
      });
      if (!user) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 500 }
        );
      }
      user.resetPasswordToken = undefined;
      user.resetPasswordTokenExpiry = undefined;
      await user.save();
      const resetPasswordUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}&verified=true`
      return NextResponse.redirect(resetPasswordUrl);
    }
    return NextResponse.json(
      { message: "Email is verified" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error", error },
      { status: 500 }
    );
  }
}
