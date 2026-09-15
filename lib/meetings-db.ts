import type { SacramentMeeting } from "./types";

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: "2026-05-03",
    meetingType: "regular",
    presiding: "Bishop Michael Smith",
    conducting: "Brother James Jones",
    announcements: [
      "Ward temple night will be held on May 10.",
      "Youth activity will be held Wednesday at 6:00 PM.",
    ],
    openingHymn: {
      number: 2,
      title: "The Spirit of God",
    },
    openingPrayer: "Sister Rebecca Williams",
    wardBusiness: [
      {
        description: "Sustaining of the new Primary presidency.",
      },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 169,
      title: "In Remembrance of Thy Suffering",
    },
    speakers: [
      {
        name: "Sister Sarah Brown",
        topic: "Faith in Jesus Christ",
        type: "speaker",
      },
      {
        name: "Youth Choir",
        topic: "I Am a Child of God",
        type: "musical-number",
      },
      {
        name: "Brother Daniel Davis",
        topic: "Following the Savior",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 31,
      title: "O God, Our Help in Ages Past",
    },
    closingPrayer: "Brother Thomas Green",
  },

  {
    id: 2,
    date: "2026-05-10",
    meetingType: "testimony",
    presiding: "Bishop Michael Smith",
    conducting: "Brother David Johnson",
    announcements: ["Stake conference will be held next Sunday."],
    openingHymn: {
      number: 85,
      title: "How Firm a Foundation",
    },
    openingPrayer: "Sister Emily Clark",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 181,
      title: "Jesus of Nazareth, Savior and King",
    },
    speakers: [
      {
        name: "Ward Members",
        topic: "Testimonies of the Gospel",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 227,
      title: "There Is Sunshine in My Soul Today",
    },
    closingPrayer: "Brother Robert White",
  },

  {
    id: 3,
    date: "2026-05-17",
    meetingType: "stake",
    presiding: "President John Anderson",
    conducting: "Brother Peter Wilson",
    announcements: ["Stake leadership training will begin at 2:00 PM."],
    openingHymn: {
      number: 3,
      title: "Now We Sing",
    },
    openingPrayer: "Sister Linda Moore",
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 169,
      title: "In Remembrance of Thy Suffering",
    },
    speakers: [
      {
        name: "President John Anderson",
        topic: "Strengthening Families",
        type: "speaker",
      },
      {
        name: "Stake Choir",
        topic: "Come, Follow Me",
        type: "musical-number",
      },
    ],
    closingHymn: {
      number: 85,
      title: "How Firm a Foundation",
    },
    closingPrayer: "Brother Mark Taylor",
  },

  {
    id: 4,
    date: "2026-05-24",
    meetingType: "regular",
    presiding: "Bishop Michael Smith",
    conducting: "Brother James Jones",
    announcements: [
      "Young Women camp registration is now open.",
      "Family history night will be held Thursday.",
    ],
    openingHymn: {
      number: 19,
      title: "We Thank Thee, O God, for a Prophet",
    },
    openingPrayer: "Brother Samuel Harris",
    wardBusiness: [
      {
        description: "Sustaining of new Sunday School teachers.",
      },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 193,
      title: "I Stand All Amazed",
    },
    speakers: [
      {
        name: "Brother David Miller",
        topic: "Service in the Gospel",
        type: "speaker",
      },
      {
        name: "Sister Grace Adams",
        topic: "Finding Peace Through Christ",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 30,
      title: "Come, Come, Ye Saints",
    },
    closingPrayer: "Sister Rachel Wilson",
  },

  {
    id: 5,
    date: "2026-05-31",
    meetingType: "general",
    presiding: "President John Anderson",
    conducting: "Brother Peter Wilson",
    announcements: [
      "General meeting information will be provided by the stake.",
    ],
    openingHymn: {
      number: 89,
      title: "The Lord Is My Light",
    },
    openingPrayer: "Sister Mary Thompson",
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 194,
      title: "There Is a Green Hill Far Away",
    },
    speakers: [
      {
        name: "President John Anderson",
        topic: "Come Unto Christ",
        type: "speaker",
      },
      {
        name: "Stake Choir",
        topic: "Where Can I Turn for Peace?",
        type: "musical-number",
      },
    ],
    closingHymn: {
      number: 152,
      title: "God Be with You Till We Meet Again",
    },
    closingPrayer: "Brother Andrew Thomas",
  },
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) {
    return meetings.filter((meeting) => meeting.date === date);
  }

  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}
