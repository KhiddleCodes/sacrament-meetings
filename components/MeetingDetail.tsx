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
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <header className="border-b bg-slate-900 px-6 py-8 text-white sm:px-8">
        <p className="text-sm font-medium uppercase tracking-wider text-slate-300">
          {meeting.meetingType} meeting
        </p>

        <h1 className="mt-2 text-3xl font-bold">Sacrament Meeting</h1>

        <p className="mt-2 text-slate-300">{formattedDate}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Presiding
            </p>
            <p className="font-medium">{meeting.presiding}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Conducting
            </p>
            <p className="font-medium">{meeting.conducting}</p>
          </div>
        </div>
      </header>

      <div className="space-y-8 px-6 py-8 sm:px-8">
        <section>
          <h2 className="text-xl font-bold text-slate-900">Announcements</h2>

          {meeting.announcements && meeting.announcements.length > 0 ? (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              {meeting.announcements.map((announcement, index) => (
                <li key={`${announcement}-${index}`}>{announcement}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-slate-600">No announcements.</p>
          )}
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Opening Hymn</h2>
            <p className="mt-2 text-slate-700">
              Hymn {meeting.openingHymn.number}: {meeting.openingHymn.title}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">Opening Prayer</h2>
            <p className="mt-2 text-slate-700">{meeting.openingPrayer}</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">Ward Business</h2>

          {meeting.wardBusiness.length > 0 ? (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              {meeting.wardBusiness.map((item, index) => (
                <li key={`${item.description}-${index}`}>{item.description}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-slate-600">No ward business.</p>
          )}

          <p className="mt-4 text-sm font-medium text-slate-600">
            Stake Business:{" "}
            <span className="font-bold text-slate-900">
              {meeting.stakeBusiness ? "Yes" : "No"}
            </span>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">Sacrament Hymn</h2>

          <p className="mt-3 text-slate-700">
            Hymn {meeting.sacramentHymn.number}: {meeting.sacramentHymn.title}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            Speakers and Musical Numbers
          </h2>

          <div className="mt-4 space-y-4">
            {meeting.speakers.map((item, index) => (
              <div
                key={`${item.name}-${item.type}-${index}`}
                className="rounded-lg border border-slate-200 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {item.type === "speaker" ? "Speaker" : "Musical Number"}
                </p>

                <h3 className="mt-1 font-semibold text-slate-900">
                  {item.name}
                </h3>

                {item.topic && (
                  <p className="mt-1 text-sm text-slate-600">{item.topic}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Closing Hymn</h2>

            <p className="mt-2 text-slate-700">
              Hymn {meeting.closingHymn.number}: {meeting.closingHymn.title}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">Closing Prayer</h2>

            <p className="mt-2 text-slate-700">{meeting.closingPrayer}</p>
          </div>
        </section>
      </div>
    </article>
  );
}
