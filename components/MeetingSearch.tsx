"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function MeetingSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (term.trim()) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="mb-6">
      <label
        htmlFor="meeting-search"
        className="mb-2 block text-sm font-medium text-[#183153]"
      >
        Search meetings
      </label>

      <input
        id="meeting-search"
        type="search"
        placeholder="Search by speaker, leader, or meeting type..."
        defaultValue={searchParams.get("query") ?? ""}
        onChange={(event) => handleSearch(event.target.value)}
        className="w-full rounded-lg border border-[#d7ccba] bg-[#fffdf9] px-4 py-3 text-[#183153] shadow-sm outline-none transition placeholder:text-[#71819a] focus:border-[#c7a56a] focus:ring-2 focus:ring-[#f1e4c5]"
      />
    </div>
  );
}
