import { connectToDb } from "@/lib/utils";
import { User } from "@/models/users";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  connectToDb();
  const user = await User.findOne({ _id: params.id }).select("-passwordHash");
  return NextResponse.json({ user }, { status: 200 });
};
