import { signOut } from "../auth";

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button
        type="submit"
        className="rounded-md border border-[#cfe0ee] px-3 py-2 text-sm font-semibold text-[#163756] transition hover:bg-[#edf4fb]"
      >
        Sign out
      </button>
    </form>
  );
}