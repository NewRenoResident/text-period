import { connectToDb } from "@/lib/utils";
import { User } from "@/models/users";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  // https://localhost:3000.com/api/users?random=true&count=N
  try {
    connectToDb();
    const searchParams = request.nextUrl.searchParams;
    const randomParam = searchParams.get("random");
    const count = parseInt(searchParams.get("count") || "5", 10);
    const random = randomParam === "true";
    if (!!count && random) {
      const users = await User.aggregate([{ $sample: { size: count } }]);
      return NextResponse.json({ users }, { status: 200 });
    }
  } catch {
    return NextResponse.json(
      { error: "Error getting tweets" },
      { status: 500 }
    );
  }
};
