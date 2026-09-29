import type { SacramentMeeting } from "../lib/types";

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
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
    <article className="overflow-hidden rounded-[28px] border border-[#d9d2c0] bg-white/90 shadow-[0_30px_80px_-40px_rgba(16,39,58,0.5)]">
      <header className="border-b border-[#18384a] bg-[#10273a] px-6 py-8 text-white sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#d9d7dc]">
          {meeting.meetingType} meeting
        </p>

        <h1 className="mt-2 text-3xl font-bold">Sacrament Meeting</h1>

        <p className="mt-2 text-[#d9d7dc]">{formattedDate}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <p className="text-xs uppercase tracking-[0.18em] text-[#d4dbe3]">
              Presiding
            </p>
            <p className="mt-2 font-medium">{meeting.presiding}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <p className="text-xs uppercase tracking-[0.18em] text-[#d4dbe3]">
              Conducting
            </p>
            <p className="mt-2 font-medium">{meeting.conducting}</p>
          </div>
        </div>
      </header>

      <div className="space-y-8 px-6 py-8 sm:px-8">
        <section>
          <h2 className="text-xl font-bold text-[#10273a]">Announcements</h2>

          {meeting.announcements && meeting.announcements.length > 0 ? (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[#52657b]">
              {meeting.announcements.map((announcement, index) => (
                <li key={`${announcement}-${index}`}>{announcement}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-[#53657a]">No announcements.</p>
          )}
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold text-[#10273a]">Opening Hymn</h2>
            <p className="mt-2 text-[#52657b]">
              Hymn {meeting.openingHymn.number}: {meeting.openingHymn.title}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#10273a]">Opening Prayer</h2>
            <p className="mt-2 text-[#52657b]">{meeting.openingPrayer}</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#10273a]">Ward Business</h2>

          {meeting.wardBusiness.length > 0 ? (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[#52657b]">
              {meeting.wardBusiness.map((item, index) => (
                <li key={`${item.description}-${index}`}>{item.description}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-[#53657a]">No ward business.</p>
          )}

          <p className="mt-4 text-sm font-medium text-[#53657a]">
            Stake Business:{" "}
            <span className="font-bold text-[#10273a]">
              {meeting.stakeBusiness ? "Yes" : "No"}
            </span>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#10273a]">Sacrament Hymn</h2>

          <p className="mt-3 text-[#52657b]">
            Hymn {meeting.sacramentHymn.number}: {meeting.sacramentHymn.title}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#10273a]">
            Speakers and Musical Numbers
          </h2>

          <div className="mt-4 space-y-4">
            {meeting.speakers.map((item, index) => (
              <div
                key={`${item.name}-${item.type}-${index}`}
                className="rounded-2xl border border-[#d7d4cc] bg-[#f7f4ef] p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5d6e7d]">
                  {item.type === "speaker" ? "Speaker" : "Musical Number"}
                </p>

                <h3 className="mt-1 font-semibold text-[#10273a]">
                  {item.name}
                </h3>

                {item.topic && (
                  <p className="mt-1 text-sm text-[#52657b]">{item.topic}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold text-[#10273a]">Closing Hymn</h2>

            <p className="mt-2 text-[#52657b]">
              Hymn {meeting.closingHymn.number}: {meeting.closingHymn.title}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#10273a]">Closing Prayer</h2>

            <p className="mt-2 text-[#52657b]">{meeting.closingPrayer}</p>
          </div>
        </section>
      </div>
    </article>
  );
}
