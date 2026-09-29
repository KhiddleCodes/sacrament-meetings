import Link from "next/link";
import { notFound } from "next/navigation";
import EditMeetingForm from "../../../../components/EditMeetingForm";
import { getMeetingById } from "../../../../lib/meetings-db";
import type { SacramentMeeting } from "../../../../lib/types";

interface EditMeetingPageProps {
  params: Promise<{
    id: string;
  }>;
}

export const dynamic = "force-dynamic";

export default async function EditMeetingPage({
  params,
}: EditMeetingPageProps) {
  const { id } = await params;
  const meetingId = Number(id);

  if (!Number.isInteger(meetingId)) {
    notFound();
  }

  const meeting: SacramentMeeting | null = await getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  return (
    <section>
      <div className="mb-8">
        <Link
          href={`/meetings/${meeting.id}`}
          className="text-sm font-semibold text-slate-600 hover:text-slate-900"
        >
          ← Back to Meeting
        </Link>

        <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Meeting Planner
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">Edit Meeting</h1>

        <p className="mt-3 text-slate-600">
          Update the details for this sacrament meeting.
        </p>
      </div>

      <EditMeetingForm meeting={meeting} />
    </section>
  );
}
