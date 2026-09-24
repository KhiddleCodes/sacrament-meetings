import { NextResponse } from "next/server";
import { getMeetingByDate, getMeetings } from "@/lib/meetings-db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");

    if (date) {
      const meeting = await getMeetingByDate(date);

      return NextResponse.json(meeting ? [meeting] : []);
    }

    const meetings = await getMeetings();

    return NextResponse.json(meetings);
  } catch (error) {
    console.error("Failed to fetch meetings:", error);

    return NextResponse.json(
      { error: "Failed to fetch meetings" },
      { status: 500 },
    );
  }
}
