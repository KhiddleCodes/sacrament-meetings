import Link from "next/link";

export default function EditMeetingNotFound() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-center">
      <h1 className="text-3xl font-bold text-slate-900">
        Meeting Not Found
      </h1>

      <p className="mt-4 text-slate-600">
        The meeting you are trying to edit does not exist or is no longer
        available.
      </p>

      <Link
        href="/meetings"
        className="mt-6 inline-flex rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
      >
        Back to Meetings
      </Link>
    </main>
  );
}