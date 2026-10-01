import type { Metadata } from "next";
import LoginForm from "../../components/LoginForm";

export const metadata: Metadata = {
  title: "Bishopric Sign In",
  description: "Sign in to manage the sacrament meeting schedule.",
};

export default function LoginPage() {
  return (
    <section className="mx-auto flex min-h-[65vh] w-full max-w-xl items-center px-6 py-12">
      <div className="w-full rounded-2xl border border-[#cfe0ee] bg-white p-8 shadow-[0_24px_70px_-42px_rgba(22,55,86,0.55)] sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3d7ea6]">
          Ovom Ward
        </p>
        <h1 className="mt-3 text-3xl font-bold text-[#163756]">
          Bishopric sign in
        </h1>
        <p className="mt-2 text-sm leading-6 text-[#4d6980]">
          Sign in to manage sacrament meeting plans.
        </p>
        <LoginForm />
      </div>
    </section>
  );
}