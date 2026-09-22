import MeetingCard from "../../components/MeetingCard";
import { getMeetingsFromApi } from "../../lib/api";
import type { SacramentMeeting } from "../../lib/types";

export const dynamic = "force-dynamic";

export default async function MeetingsPage() {
  const meetings: SacramentMeeting[] = await getMeetingsFromApi();

  return (
    <section>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Meeting Programs
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">All Meetings</h1>

        <p className="mt-3 text-slate-600">
          Browse current and previous sacrament meeting programs.
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
