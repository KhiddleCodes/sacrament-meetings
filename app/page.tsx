import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Plan meetings",
    description:
      "Keep hymns, prayers, speakers, musical numbers, and ward business organized in one clear record.",
  },
  {
    title: "Review programs",
    description:
      "Review current and previous services quickly while keeping the full flow of the meeting visible.",
  },
  {
    title: "Print programs",
    description:
      "Prepare a clean, print-ready summary for leaders and members whenever the schedule is finalized.",
  },
];

const featuredMeeting = {
  presiding: "Bishop Michael Okafor",
  openingPrayer: "Sister Grace Akinola",
  openingHymn: { number: 30, title: "Beautiful Savior" },
  closingHymn: { number: 101, title: "Lord, I Would Follow Thee" },
};

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-8 md:py-12">
        <div className="overflow-hidden rounded-[32px] border border-[#cfe0ee] bg-[rgba(255,255,255,0.88)] shadow-[0_35px_90px_-40px_rgba(22,55,86,0.6)] backdrop-blur-sm">
          <div className="grid items-center gap-10 px-6 py-8 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-10">
            <div>
              <span className="inline-flex rounded-full border border-[#cfe0ee] bg-[#ebf6ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2d5d82]">
                Ovom Ward
              </span>

              <h1 className="mt-5 max-w-xl text-4xl font-black tracking-tight text-[#163756] sm:text-5xl">
                Sacrament Meeting Planner
              </h1>

              <p className="mt-5 max-w-lg text-lg leading-8 text-[#4d6980]">
                Plan, review, and share sacrament meeting programs in one polished,
                easy-to-use place.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/meetings"
                  className="inline-flex items-center justify-center rounded-full bg-[#163756] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#224b71]"
                >
                  View All Meetings
                </Link>

                <Link
                  href="/meetings/current"
                  className="inline-flex items-center justify-center rounded-full border border-[#cfe0ee] bg-white px-5 py-3 text-sm font-semibold text-[#163756] transition hover:bg-[#ebf6ff]"
                >
                  View Current Meeting
                </Link>
              </div>

              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#dfeefb] bg-[#f2f9ff] px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5b7285]">
                    Presided
                  </p>
                  <p className="mt-2 text-base font-bold text-[#163756]">
                    {featuredMeeting.presiding}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#dfeefb] bg-[#f2f9ff] px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5b7285]">
                    Opening prayer
                  </p>
                  <p className="mt-2 text-base font-bold text-[#163756]">
                    {featuredMeeting.openingPrayer}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#dfeefb] bg-[#f2f9ff] px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5b7285]">
                    Hymns
                  </p>
                  <p className="mt-2 text-base font-bold text-[#163756]">
                    #{featuredMeeting.openingHymn.number} / #{featuredMeeting.closingHymn.number}
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#bfd6ee] bg-[#edf5fd] p-3 shadow-[inset_0_0_0_1px_rgba(22,55,86,0.06)]">
              <Image
                src="/sacrament-meeting.svg"
                alt="Sacrament meeting planning illustration"
                width={800}
                height={500}
                className="h-auto w-full rounded-[20px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[24px] border border-[#d5e6f6] bg-white/80 p-6 shadow-[0_18px_60px_-35px_rgba(22,55,86,0.45)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ebf6ff] text-lg text-[#3d7ea6]">
                •
              </div>
              <h2 className="mt-5 text-xl font-bold text-[#163756]">
                {feature.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#4d6980]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
