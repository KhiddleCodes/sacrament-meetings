import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="border-b bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Ovom Ward
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Sacrament Meeting Planner
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Plan, review, and share sacrament meeting programs in one simple
              place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/meetings"
                className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
              >
                View All Meetings
              </Link>

              <Link
                href="/meetings/current"
                className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                View Current Meeting
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src="/sacrament-meeting.svg"
              alt="Sacrament meeting planning illustration"
              width={800}
              height={500}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">Plan Meetings</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Keep hymns, prayers, speakers, musical numbers, and business
              organized.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Review Programs
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Quickly review current and previous meeting programs.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">Print Programs</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              View complete meeting details in a clean format ready for
              printing.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
