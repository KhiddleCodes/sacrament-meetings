import MeetingCard from "@/components/MeetingCard";
import MeetingSearch from "@/components/MeetingSearch";
import Pagination from "@/components/Pagination";
import { getMeetings, getMeetingsTotalPages } from "@/lib/meetings-db";

export const dynamic = "force-dynamic";

interface MeetingsPageProps {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}

export default async function MeetingsPage({
  searchParams,
}: MeetingsPageProps) {
  const params = await searchParams;

  const query = params.query ?? "";
  const currentPage = Math.max(1, Number(params.page) || 1);

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-2xl border border-[#d9d0c2] bg-[#fffdf9] p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7d6452]">
          Meeting Programs
        </p>

        <h1 className="mt-2 text-3xl font-bold text-[#183153]">All Meetings</h1>

        <p className="mt-3 text-[#4d5c6d]">
          Browse current and previous sacrament meeting programs.
        </p>
      </div>

      <MeetingSearch />

      {meetings.length > 0 ? (
        <div className="mt-6 grid gap-6">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      ) : (
        <p className="mt-6 rounded-xl border border-[#d9d0c2] bg-[#fffdf9] p-4 text-[#4d5c6d]">
          No meetings found.
        </p>
      )}

      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </section>
  );
}
