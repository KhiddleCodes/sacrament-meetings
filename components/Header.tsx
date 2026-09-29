import Link from "next/link";

export default function Header() {
  const currentDate = new Date().toLocaleDateString("en-NG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="sticky top-0 z-20 border-b border-[#d2c4a5] bg-[#f7f3ea]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10273a] text-sm font-bold text-white shadow-sm">
            S
          </span>

          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#234f55]">
              Ovom Ward
            </span>
            <span className="block text-base font-bold text-[#10273a]">
              Sacrament Meeting Planner
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-2 sm:flex">
          <span className="rounded-full border border-[#d2c4a5] bg-[#f6ecd8] px-3 py-1 text-xs font-medium text-[#10273a]">
            {currentDate}
          </span>
        </div>
      </div>
    </header>
  );
}
