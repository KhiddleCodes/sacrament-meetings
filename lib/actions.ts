"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import type { ActionState } from "./action-state";
import {
  createMeeting as createMeetingInDb,
  deleteMeeting as deleteMeetingInDb,
  updateMeeting as updateMeetingInDb,
} from "./meetings-db";


const hymnSchema = z.object({
  number: z.coerce
    .number()
    .int("Hymn number must be a whole number.")
    .positive("Hymn number must be greater than 0."),
  title: z.string().trim().min(1, "Hymn title is required."),
});

const speakerSchema = z.object({
  name: z.string().trim().min(1, "Speaker name is required."),
  topic: z.string().trim().min(1, "Speaker topic is required."),
  type: z.enum(["speaker", "musical-number"]),
});

const wardBusinessSchema = z.object({
  description: z.string().trim().min(1, "Business description is required."),
});

const MeetingFormSchema = z.object({
  date: z
    .string()
    .trim()
    .min(1, "Meeting date is required.")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Enter a valid meeting date."),

  meetingType: z.enum(["testimony", "regular", "stake", "general"], {
    message: "Please select a valid meeting type.",
  }),

  presiding: z.string().trim().min(1, "Presiding officer is required."),

  conducting: z.string().trim().min(1, "Conducting officer is required."),

  announcements: z.array(z.string()).default([]),

  openingHymn: hymnSchema,

  openingPrayer: z.string().trim().min(1, "Opening prayer is required."),

  wardBusiness: z.array(wardBusinessSchema).default([]),

  stakeBusiness: z.boolean().default(false),

  sacramentHymn: hymnSchema,

  speakers: z.array(speakerSchema).default([]),

  closingHymn: hymnSchema,

  closingPrayer: z.string().trim().min(1, "Closing prayer is required."),
});

function getString(formData: FormData, fieldName: string): string {
  const value = formData.get(fieldName);

  return typeof value === "string" ? value : "";
}

function getLines(formData: FormData, fieldName: string): string[] {
  return getString(formData, fieldName)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function getNumber(formData: FormData, fieldName: string): number {
  return Number(getString(formData, fieldName));
}

function getBoolean(formData: FormData, fieldName: string): boolean {
  return formData.get(fieldName) === "true";
}

function getSpeakers(formData: FormData) {
  return getLines(formData, "speakersText").map((line) => {
    const [name, topic] = line.split("|").map((value) => value.trim());

    return {
      name: name ?? "",
      topic: topic ?? "",
      type: "speaker" as const,
    };
  });
}

function getWardBusiness(formData: FormData) {
  return getLines(formData, "wardBusinessText").map((description) => ({
    description,
  }));
}

function getFormValues(formData: FormData) {
  return {
    date: getString(formData, "date"),

    meetingType: getString(formData, "meetingType"),

    presiding: getString(formData, "presiding"),

    conducting: getString(formData, "conducting"),

    announcements: getLines(formData, "announcementsText"),

    openingHymn: {
      number: getNumber(formData, "openingHymnNumber"),
      title: getString(formData, "openingHymnTitle"),
    },

    openingPrayer: getString(formData, "openingPrayer"),

    wardBusiness: getWardBusiness(formData),

    stakeBusiness: getBoolean(formData, "stakeBusiness"),

    sacramentHymn: {
      number: getNumber(formData, "sacramentHymnNumber"),
      title: getString(formData, "sacramentHymnTitle"),
    },

    speakers: getSpeakers(formData),

    closingHymn: {
      number: getNumber(formData, "closingHymnNumber"),
      title: getString(formData, "closingHymnTitle"),
    },

    closingPrayer: getString(formData, "closingPrayer"),
  };
}

function getValidationState(result: { error: z.ZodError }): ActionState {
  const errors: Record<string, string[]> = {};

  for (const issue of result.error.issues) {
    const field = issue.path[0]?.toString() ?? "form";

    if (!errors[field]) {
      errors[field] = [];
    }

    errors[field].push(issue.message);
  }

  return {
    message: "Please correct the errors below.",
    errors,
  };
}

export async function createMeeting(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const rawValues = getFormValues(formData);

  const result = MeetingFormSchema.safeParse(rawValues);

  if (!result.success) {
    return getValidationState(result);
  }

  try {
    await createMeetingInDb(result.data);

    revalidatePath("/meetings");
  } catch (error) {
    console.error("Failed to create meeting:", error);

    return {
      message: "Unable to create the meeting. Please try again.",
      errors: {},
    };
  }

  redirect("/meetings");
}

export async function updateMeeting(
  id: number,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const rawValues = getFormValues(formData);

  const result = MeetingFormSchema.safeParse(rawValues);

  if (!result.success) {
    return getValidationState(result);
  }

  try {
    const meeting = await updateMeetingInDb(id, result.data);

    if (!meeting) {
      return {
        message: "The meeting could not be found.",
        errors: {},
      };
    }

    revalidatePath("/meetings");
    revalidatePath(`/meetings/${id}`);
  } catch (error) {
    console.error("Failed to update meeting:", error);

    return {
      message: "Unable to update the meeting. Please try again.",
      errors: {},
    };
  }

  redirect(`/meetings/${id}`);
}

export async function deleteMeeting(
  id: number,
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  void prevState;
  void formData;

  try {
    await deleteMeetingInDb(id);

    revalidatePath("/meetings");
    revalidatePath(`/meetings/${id}`);
  } catch (error) {
    console.error("Failed to delete meeting:", error);

    return {
      message: "Unable to delete the meeting. Please try again.",
      errors: {},
    };
  }

  redirect("/meetings");
}
