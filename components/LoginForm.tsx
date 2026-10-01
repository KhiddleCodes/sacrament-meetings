"use client";

import { useActionState, useState } from "react";
import { authenticate } from "../lib/actions";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="mt-7 space-y-5">
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-[#163756]"
        >
          Bishopric email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="username"
          required
          className="w-full rounded-md border border-[#c6d4dd] bg-white px-3 py-2.5 text-sm text-[#163756] outline-none focus:border-[#3d7ea6] focus:ring-2 focus:ring-[#3d7ea6]/20"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-semibold text-[#163756]"
        >
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            minLength={8}
            required
            className="w-full rounded-md border border-[#c6d4dd] bg-white px-3 py-2.5 pr-11 text-sm text-[#163756] outline-none focus:border-[#3d7ea6] focus:ring-2 focus:ring-[#3d7ea6]/20"
          />
          <button
            type="button"
            onClick={() => setShowPassword((visible) => !visible)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
            title={showPassword ? "Hide password" : "Show password"}
            className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-[#53657a] hover:text-[#163756] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#3d7ea6]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
              <circle cx="12" cy="12" r="3" />
              {showPassword && <path d="m4 4 16 16" />}
            </svg>
          </button>
        </div>
      </div>
      <input type="hidden" name="redirectTo" value="/meetings" />
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-md bg-[#163756] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#224b71] disabled:cursor-wait disabled:opacity-70"
      >
        {isPending ? "Signing in..." : "Sign in"}
      </button>
      {errorMessage && (
        <p role="alert" className="text-sm font-medium text-red-700">
          {errorMessage}
        </p>
      )}
    </form>
  );
}