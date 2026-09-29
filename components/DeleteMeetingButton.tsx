"use client";

import { useActionState } from "react";
import { deleteMeeting } from "../lib/actions";
import { initialState, type ActionState } from "../lib/action-state";

interface DeleteMeetingButtonProps {
  meetingId: number;
}

export default function DeleteMeetingButton({
  meetingId,
}: DeleteMeetingButtonProps) {
  const deleteMeetingAction = deleteMeeting.bind(null, meetingId);

  const [state, formAction, isPending] = useActionState<
    ActionState,
    FormData
  >(deleteMeetingAction, initialState);

  return (
    <form action={formAction}>
      {state.message && (
        <p
          aria-live="polite"
          className="mb-2 text-sm text-red-600"
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        onClick={(event) => {
          if (
            !window.confirm(
              "Are you sure you want to delete this meeting?",
            )
          ) {
            event.preventDefault();
          }
        }}
        className="inline-flex w-fit rounded-md border border-red-300 bg-white px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? "Deleting..." : "Delete"}
      </button>
    </form>
  );
}