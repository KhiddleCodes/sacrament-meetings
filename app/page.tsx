import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-[#d5c7ad] bg-[#f9f5ef]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7d6452]">
              Ovom Ward
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#183153] sm:text-5xl">
              Sacrament Meeting Planner
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#4d5c6d]">
              Plan, review, and share sacrament meeting programs in one simple
              place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/meetings"
                className="rounded-md bg-[#183153] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#12253d]"
              >
                View All Meetings
              </Link>

              <Link
                href="/meetings/current"
                className="rounded-md border border-[#c7a56a] bg-[#fffdf9] px-5 py-3 text-sm font-semibold text-[#183153] transition hover:bg-[#f5ebd5]"
              >
                View Current Meeting
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#d9d0c2] bg-[#eef4f8] shadow-[0_18px_40px_rgba(24,49,83,0.08)]">
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
          <article className="rounded-xl border border-[#d7ccba] bg-[#fffdf9] p-6 shadow-sm">
            <div className="mb-4 h-11 w-11 rounded-full bg-[#f1e4c5] text-[#183153]" />
            <h2 className="text-xl font-bold text-[#183153]">Plan Meetings</h2>
            <p className="mt-2 text-sm leading-6 text-[#4d5c6d]">
              Keep hymns, prayers, speakers, musical numbers, and business
              organized.
            </p>
          </article>

          <article className="rounded-xl border border-[#d7ccba] bg-[#fffdf9] p-6 shadow-sm">
            <div className="mb-4 h-11 w-11 rounded-full bg-[#e2eef6] text-[#183153]" />
            <h2 className="text-xl font-bold text-[#183153]">
              Review Programs
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#4d5c6d]">
              Quickly review current and previous meeting programs.
            </p>
          </article>

          <article className="rounded-xl border border-[#d7ccba] bg-[#fffdf9] p-6 shadow-sm">
            <div className="mb-4 h-11 w-11 rounded-full bg-[#f1e4c5] text-[#183153]" />
            <h2 className="text-xl font-bold text-[#183153]">Print Programs</h2>
            <p className="mt-2 text-sm leading-6 text-[#4d5c6d]">
              View complete meeting details in a clean format ready for
              printing.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
