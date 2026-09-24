import Link from "next/link";
import type { SacramentMeeting } from "../lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  const formattedDate = new Date(`${meeting.date}T00:00:00`).toLocaleDateString(
    "en-NG",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <article className="rounded-xl border border-[#d7ccba] bg-[#fffdf9] p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7d6452]">
            {meeting.meetingType} meeting
          </p>

          <h2 className="mt-1 text-xl font-bold text-[#183153]">
            {formattedDate}
          </h2>

          <p className="mt-2 text-sm text-[#4d5c6d]">
            Presiding: {meeting.presiding}
          </p>

          <p className="text-sm text-[#4d5c6d]">
            Conducting: {meeting.conducting}
          </p>
        </div>

        <Link
          href={`/meetings/${meeting.id}`}
          className="inline-flex w-fit rounded-md bg-[#183153] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#12253d] focus:outline-none focus:ring-2 focus:ring-[#c7a56a] focus:ring-offset-2"
        >
          View Program
        </Link>
      </div>
    </article>
  );
}
