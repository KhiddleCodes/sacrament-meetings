import Link from "next/link";

export default function Header() {
  const currentDate = new Date().toLocaleDateString("en-NG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div>
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Sacrament Meeting Planner
          </Link>

          <p className="mt-1 text-sm text-gray-600">Ovom Ward</p>
        </div>

        <p className="hidden text-sm text-gray-600 sm:block">{currentDate}</p>
      </div>
    </header>
  );
}
