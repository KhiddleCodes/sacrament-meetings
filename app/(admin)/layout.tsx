import type { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f4efe7]">
      <header className="border-b border-[#c7a56a] bg-[#183153] text-white shadow-sm">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f1e4c5]">
            Leader Area
          </p>

          <h1 className="mt-1 text-xl font-bold text-white">
            Sacrament Meeting Planner
          </h1>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
