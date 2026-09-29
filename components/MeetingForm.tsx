"use client";

import { useActionState } from "react";
import { createMeeting } from "../lib/actions";
import { initialState, type ActionState } from "../lib/action-state";


const meetingTypes = [
  { value: "regular", label: "Regular" },
  { value: "testimony", label: "Testimony" },
  { value: "stake", label: "Stake" },
  { value: "general", label: "General" },
] as const;

function FieldError({ id, errors }: { id: string; errors?: string[] }) {
  if (!errors || errors.length === 0) {
    return null;
  }

  return (
    <div id={id} aria-live="polite" className="mt-1 text-sm text-red-600">
      {errors.map((error, index) => (
        <p key={`${error}-${index}`}>{error}</p>
      ))}
    </div>
  );
}

export default function MeetingForm() {
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    createMeeting,
    initialState,
  );

  const errors = state?.errors ?? {};

  return (
    <form action={formAction} className="space-y-8">
      {state.message && (
        <div
          aria-live="polite"
          className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          {state.message}
        </div>
      )}

      {/* Meeting Information */}
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">
          Meeting Information
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-semibold text-slate-700"
            >
              Meeting Date
            </label>

            <input
              id="date"
              name="date"
              type="date"
              required
              aria-describedby="date-error"
              className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />

            <FieldError id="date-error" errors={errors.date} />
          </div>

          <div>
            <label
              htmlFor="meetingType"
              className="block text-sm font-semibold text-slate-700"
            >
              Meeting Type
            </label>

            <select
              id="meetingType"
              name="meetingType"
              required
              defaultValue="regular"
              aria-describedby="meetingType-error"
              className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              {meetingTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>

            <FieldError
              id="meetingType-error"
              errors={errors.meetingType}
            />
          </div>

          <div>
            <label
              htmlFor="presiding"
              className="block text-sm font-semibold text-slate-700"
            >
              Presiding
            </label>

            <input
              id="presiding"
              name="presiding"
              type="text"
              required
              placeholder="Bishop Thompson"
              aria-describedby="presiding-error"
              className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />

            <FieldError id="presiding-error" errors={errors.presiding} />
          </div>

          <div>
            <label
              htmlFor="conducting"
              className="block text-sm font-semibold text-slate-700"
            >
              Conducting
            </label>

            <input
              id="conducting"
              name="conducting"
              type="text"
              required
              placeholder="Brother Nakamura"
              aria-describedby="conducting-error"
              className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />

            <FieldError
              id="conducting-error"
              errors={errors.conducting}
            />
          </div>
        </div>
      </section>

      {/* Opening */}
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Opening</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="openingHymnNumber"
              className="block text-sm font-semibold text-slate-700"
            >
              Opening Hymn Number
            </label>

            <input
              id="openingHymnNumber"
              name="openingHymnNumber"
              type="number"
              min="1"
              required
              aria-describedby="openingHymn-error"
              className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div>
            <label
              htmlFor="openingHymnTitle"
              className="block text-sm font-semibold text-slate-700"
            >
              Opening Hymn Title
            </label>

            <input
              id="openingHymnTitle"
              name="openingHymnTitle"
              type="text"
              required
              placeholder="The Spirit of God"
              aria-describedby="openingHymn-error"
              className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />

            <FieldError
              id="openingHymn-error"
              errors={errors.openingHymn}
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="openingPrayer"
              className="block text-sm font-semibold text-slate-700"
            >
              Opening Prayer
            </label>

            <input
              id="openingPrayer"
              name="openingPrayer"
              type="text"
              required
              placeholder="Sister Park"
              aria-describedby="openingPrayer-error"
              className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />

            <FieldError
              id="openingPrayer-error"
              errors={errors.openingPrayer}
            />
          </div>
        </div>
      </section>

      {/* Announcements and Business */}
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">
          Announcements & Business
        </h2>

        <div className="mt-6 space-y-6">
          <div>
            <label
              htmlFor="announcementsText"
              className="block text-sm font-semibold text-slate-700"
            >
              Announcements
            </label>

            <textarea
              id="announcementsText"
              name="announcementsText"
              rows={4}
              placeholder={"Enter one announcement per line"}
              aria-describedby="announcements-error"
              className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />

            <p className="mt-1 text-xs text-slate-500">
              Enter each announcement on a separate line.
            </p>

            <FieldError
              id="announcements-error"
              errors={errors.announcements}
            />
          </div>

          <div>
            <label
              htmlFor="wardBusinessText"
              className="block text-sm font-semibold text-slate-700"
            >
              Ward Business
            </label>

            <textarea
              id="wardBusinessText"
              name="wardBusinessText"
              rows={4}
              placeholder={"Sustaining of new Sunday School president"}
              aria-describedby="wardBusiness-error"
              className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />

            <p className="mt-1 text-xs text-slate-500">
              Enter each item on a separate line.
            </p>

            <FieldError
              id="wardBusiness-error"
              errors={errors.wardBusiness}
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              id="stakeBusiness"
              name="stakeBusiness"
              type="checkbox"
              value="true"
              className="h-4 w-4 rounded border-slate-300"
            />

            <label
              htmlFor="stakeBusiness"
              className="text-sm font-semibold text-slate-700"
            >
              Include stake business
            </label>
          </div>
        </div>
      </section>

      {/* Sacrament */}
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Sacrament</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="sacramentHymnNumber"
              className="block text-sm font-semibold text-slate-700"
            >
              Sacrament Hymn Number
            </label>

            <input
              id="sacramentHymnNumber"
              name="sacramentHymnNumber"
              type="number"
              min="1"
              required
              aria-describedby="sacramentHymn-error"
              className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div>
            <label
              htmlFor="sacramentHymnTitle"
              className="block text-sm font-semibold text-slate-700"
            >
              Sacrament Hymn Title
            </label>

            <input
              id="sacramentHymnTitle"
              name="sacramentHymnTitle"
              type="text"
              required
              placeholder="In Remembrance of Thy Suffering"
              aria-describedby="sacramentHymn-error"
              className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />

            <FieldError
              id="sacramentHymn-error"
              errors={errors.sacramentHymn}
            />
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Speakers</h2>

        <div className="mt-6">
          <label
            htmlFor="speakersText"
            className="block text-sm font-semibold text-slate-700"
          >
            Speakers and Topics
          </label>

          <textarea
            id="speakersText"
            name="speakersText"
            rows={6}
            placeholder={
              "Sister Chen | The Sacrament\nBrother Osei | Covenant Keeping"
            }
            aria-describedby="speakers-help speakers-error"
            className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />

          <p id="speakers-help" className="mt-1 text-xs text-slate-500">
            Use the format: Speaker Name | Topic. Put each speaker on a separate
            line.
          </p>

          <FieldError id="speakers-error" errors={errors.speakers} />
        </div>
      </section>

      {/* Closing */}
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Closing</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="closingHymnNumber"
              className="block text-sm font-semibold text-slate-700"
            >
              Closing Hymn Number
            </label>

            <input
              id="closingHymnNumber"
              name="closingHymnNumber"
              type="number"
              min="1"
              required
              aria-describedby="closingHymn-error"
              className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div>
            <label
              htmlFor="closingHymnTitle"
              className="block text-sm font-semibold text-slate-700"
            >
              Closing Hymn Title
            </label>

            <input
              id="closingHymnTitle"
              name="closingHymnTitle"
              type="text"
              required
              placeholder="Because I Have Been Given Much"
              aria-describedby="closingHymn-error"
              className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />

            <FieldError
              id="closingHymn-error"
              errors={errors.closingHymn}
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="closingPrayer"
              className="block text-sm font-semibold text-slate-700"
            >
              Closing Prayer
            </label>

            <input
              id="closingPrayer"
              name="closingPrayer"
              type="text"
              required
              placeholder="Brother Lewis"
              aria-describedby="closingPrayer-error"
              className="mt-2 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />

            <FieldError
              id="closingPrayer-error"
              errors={errors.closingPrayer}
            />
          </div>
        </div>
      </section>

      {/* Submit */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? "Creating Meeting..." : "Create Meeting"}
        </button>
      </div>
    </form>
  );
}
