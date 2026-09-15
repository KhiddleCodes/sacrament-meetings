import { redirect } from "next/navigation";
import { getMeetings } from "../../../lib/meetings-db";

function getCurrentSunday() {
  const today = new Date();
  const day = today.getDay();

  const sunday = new Date(today);
  sunday.setDate(today.getDate() - day);

  return sunday.toISOString().split("T")[0];
}

export default function CurrentMeetingPage() {
  const currentSunday = getCurrentSunday();
  const meetings = getMeetings(currentSunday);

  if (meetings.length > 0) {
    redirect(`/meetings/${meetings[0].id}`);
  }

  redirect("/meetings");
}
