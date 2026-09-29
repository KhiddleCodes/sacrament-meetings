import Link from "next/link";
import MeetingForm from "../../../components/MeetingForm";

export default function NewMeetingPage() {
  return (
    <section>
      <div className="mb-8">
        <Link
          href="/meetings"
          className="text-sm font-semibold text-slate-600 hover:text-slate-900"
        >
          ← Back to Meetings
        </Link>

        <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Meeting Planner
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Create New Meeting
        </h1>

        <p className="mt-3 text-slate-600">
          Enter the details for the upcoming sacrament meeting.
        </p>
      </div>

      <MeetingForm />
    </section>
  );
}
