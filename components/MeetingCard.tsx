import Link from "next/link";
import DeleteMeetingButton from "./DeleteMeetingButton";
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
    <article className="rounded-[26px] border border-[#d9d2c0] bg-white/90 p-6 shadow-[0_24px_60px_-38px_rgba(16,39,58,0.55)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_30px_80px_-35px_rgba(16,39,58,0.6)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className="inline-flex rounded-full border border-[#d2c4a5] bg-[#f6ecd8] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#234f55]">
            {meeting.meetingType} meeting
          </span>

          <h2 className="mt-3 text-xl font-bold text-[#10273a] sm:text-2xl">
            {formattedDate}
          </h2>

          <div className="mt-3 space-y-1 text-sm text-[#52657b]">
            <p>Presiding: {meeting.presiding}</p>
            <p>Conducting: {meeting.conducting}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href={`/meetings/${meeting.id}`}
            className="inline-flex w-fit rounded-full bg-[#10273a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1d3f58] focus:outline-none focus:ring-2 focus:ring-[#c7a36a] focus:ring-offset-2"
          >
            View Program
          </Link>

          <Link
            href={`/meetings/${meeting.id}/edit`}
            className="inline-flex w-fit rounded-full border border-[#c9c7c3] bg-white px-4 py-2 text-sm font-semibold text-[#10273a] transition hover:bg-[#f7f5f0] focus:outline-none focus:ring-2 focus:ring-[#bfcfd8] focus:ring-offset-2"
          >
            Edit
          </Link>

          <DeleteMeetingButton meetingId={meeting.id} />
        </div>
      </div>
    </article>
  );
}
