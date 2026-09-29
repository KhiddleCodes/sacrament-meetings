import { sql } from "@vercel/postgres";
import type { MeetingType, SacramentMeeting } from "./types";

interface MeetingRow {
  id: number;
  date: string | Date;
  meeting_type: MeetingType;
  presiding: string;
  conducting: string;
  announcements: string[] | null;
  opening_hymn: SacramentMeeting["openingHymn"];
  opening_prayer: string;
  ward_business: SacramentMeeting["wardBusiness"] | null;
  stake_business: boolean | null;
  sacrament_hymn: SacramentMeeting["sacramentHymn"];
  speakers: SacramentMeeting["speakers"] | null;
  closing_hymn: SacramentMeeting["closingHymn"];
  closing_prayer: string;
}

function toPostgresTextArray(values: string[]): string {
  return `{${values
    .map((value) => `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`)
    .join(",")}}`;
}

function mapMeeting(row: MeetingRow): SacramentMeeting {
  const date =
    row.date instanceof Date ? row.date.toISOString().split("T")[0] : row.date;

  return {
    id: row.id,
    date,
    meetingType: row.meeting_type,
    presiding: row.presiding,
    conducting: row.conducting,
    announcements: row.announcements ?? [],
    openingHymn: row.opening_hymn,
    openingPrayer: row.opening_prayer,
    wardBusiness: row.ward_business ?? [],
    stakeBusiness: row.stake_business ?? false,
    sacramentHymn: row.sacrament_hymn,
    speakers: row.speakers ?? [],
    closingHymn: row.closing_hymn,
    closingPrayer: row.closing_prayer,
  };
}

export async function getMeetings(
  date?: string | null,
): Promise<SacramentMeeting[]> {
  const result = date
    ? await sql<MeetingRow>`
        SELECT *
        FROM meetings
        WHERE date = ${date}
        ORDER BY date DESC, id DESC
      `
    : await sql<MeetingRow>`
        SELECT *
        FROM meetings
        ORDER BY date DESC, id DESC
      `;

  return result.rows.map(mapMeeting);
}

export async function getMeetingById(
  id: number,
): Promise<SacramentMeeting | null> {
  const result = await sql<MeetingRow>`
    SELECT *
    FROM meetings
    WHERE id = ${id}
    LIMIT 1
  `;

  if (result.rows.length === 0) {
    return null;
  }

  return mapMeeting(result.rows[0]);
}

export async function createMeeting(
  meeting: Omit<SacramentMeeting, "id">,
): Promise<SacramentMeeting> {
  const result = await sql<MeetingRow>`
    INSERT INTO meetings (
      date,
      meeting_type,
      presiding,
      conducting,
      announcements,
      opening_hymn,
      opening_prayer,
      ward_business,
      stake_business,
      sacrament_hymn,
      speakers,
      closing_hymn,
      closing_prayer
    )
    VALUES (
      ${meeting.date},
      ${meeting.meetingType},
      ${meeting.presiding},
      ${meeting.conducting},
      ${toPostgresTextArray(meeting.announcements ?? [])},
      ${JSON.stringify(meeting.openingHymn)},
      ${meeting.openingPrayer},
      ${JSON.stringify(meeting.wardBusiness ?? [])},
      ${meeting.stakeBusiness ?? false},
      ${JSON.stringify(meeting.sacramentHymn)},
      ${JSON.stringify(meeting.speakers ?? [])},
      ${JSON.stringify(meeting.closingHymn)},
      ${meeting.closingPrayer}
    )
    RETURNING *
  `;

  return mapMeeting(result.rows[0]);
}

export async function updateMeeting(
  id: number,
  meeting: Omit<SacramentMeeting, "id">,
): Promise<SacramentMeeting | null> {
  const result = await sql<MeetingRow>`
    UPDATE meetings
    SET
      date = ${meeting.date},
      meeting_type = ${meeting.meetingType},
      presiding = ${meeting.presiding},
      conducting = ${meeting.conducting},
      announcements = ${toPostgresTextArray(meeting.announcements ?? [])},
      opening_hymn = ${JSON.stringify(meeting.openingHymn)},
      opening_prayer = ${meeting.openingPrayer},
      ward_business = ${JSON.stringify(meeting.wardBusiness ?? [])},
      stake_business = ${meeting.stakeBusiness ?? false},
      sacrament_hymn = ${JSON.stringify(meeting.sacramentHymn)},
      speakers = ${JSON.stringify(meeting.speakers ?? [])},
      closing_hymn = ${JSON.stringify(meeting.closingHymn)},
      closing_prayer = ${meeting.closingPrayer}
    WHERE id = ${id}
    RETURNING *
  `;

  if (result.rows.length === 0) {
    return null;
  }

  return mapMeeting(result.rows[0]);
}

export async function deleteMeeting(id: number): Promise<void> {
  await sql`
    DELETE FROM meetings
    WHERE id = ${id}
  `;
}
