import { redirect } from "next/navigation";
import { getMeetingByDate } from "@/lib/meetings-db";

function getCurrentSunday() {
  const today = new Date();
  const day = today.getDay();

  const sunday = new Date(today);
  sunday.setDate(today.getDate() - day);

  return sunday.toISOString().split("T")[0];
}

export default async function CurrentMeetingPage() {
  const currentSunday = getCurrentSunday();
  const meeting = await getMeetingByDate(currentSunday);

  if (meeting) {
    redirect(`/meetings/${meeting.id}`);
  }

  redirect("/meetings");
}
