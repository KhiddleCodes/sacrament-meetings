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
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            {meeting.meetingType} meeting
          </p>

          <h2 className="mt-1 text-xl font-bold text-slate-900">
            {formattedDate}
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Presiding: {meeting.presiding}
          </p>

          <p className="text-sm text-slate-600">
            Conducting: {meeting.conducting}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href={`/meetings/${meeting.id}`}
            className="inline-flex w-fit rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            View Program
          </Link>

          <Link
            href={`/meetings/${meeting.id}/edit`}
            className="inline-flex w-fit rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            Edit
          </Link>

          <DeleteMeetingButton meetingId={meeting.id} />
        </div>
      </div>
    </article>
  );
}
