import { connectToDb } from "@/lib/utils";
import { User } from "@/models/users";
import { NextResponse } from "next/server";
export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    connectToDb();
    const id = params.id;
    const user = User.findOne({ _id: id });

    if (!user) {
      return { error: "User not found" };
    }

    return NextResponse.json({ user });
  } catch (error) {
    {
      error: "Something went wrong";
    }
  }
};
