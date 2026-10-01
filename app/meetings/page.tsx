import type { Metadata } from "next";
import MeetingCard from "../../components/MeetingCard";
import { getMeetings } from "../../lib/meetings-db";
import type { SacramentMeeting } from "../../lib/types";

export const metadata: Metadata = {
  title: "Meeting Schedule",
  description:
    "Review the Ovom Ward sacrament meeting schedule and program details.",
  openGraph: {
    title: "Meeting Schedule | Sacrament Meeting Planner",
    description:
      "Review the Ovom Ward sacrament meeting schedule and program details.",
    images: ["/sacrament-meeting.svg"],
  },
};

export const dynamic = "force-dynamic";

export default async function MeetingsPage() {
  const meetings: SacramentMeeting[] = await getMeetings();

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <span className="inline-flex rounded-full border border-[#d2c4a5] bg-[#f6ecd8] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#234f55]">
          Meeting Programs
        </span>

        <h1 className="mt-4 text-3xl font-black tracking-tight text-[#10273a] sm:text-4xl">
          All Meetings
        </h1>

        <p className="mt-3 max-w-2xl text-[#53657a]">
          Browse current and previous sacrament meeting programs with a calm,
          organized view for each service.
        </p>
      </div>

      <div className="grid gap-6">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </section>
  );
}
