// Notice from where NextResponse is imported:
import { NextResponse, NextRequest } from "next/server";

// Notice the funciton definiton:
export async function GET(req: NextRequest) {
  return NextResponse.json(
    { error: "Method not allowed" },
    {
      status: 405,
    }
  );
}

// Notice the funciton definiton:
export async function POST(req: NextRequest) {
  try {
    return NextResponse.json({
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get admins" },
      {
        status: 500,
      }
    );
  }
}
