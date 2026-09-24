import Link from "next/link";

export default function Header() {
  const currentDate = new Date().toLocaleDateString("en-NG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="border-b border-[#21486d] bg-[#183153] text-white shadow-[0_10px_30px_rgba(24,49,83,0.18)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div>
          <Link href="/" className="text-2xl font-bold tracking-tight text-white">
            Sacrament Meeting Planner
          </Link>

          <p className="mt-1 text-sm text-[#dce7f2]">Ovom Ward</p>
        </div>

        <p className="hidden text-sm text-[#f1e4c5] sm:block">{currentDate}</p>
      </div>
    </header>
  );
}
