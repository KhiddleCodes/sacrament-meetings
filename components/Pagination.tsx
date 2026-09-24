"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);

  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));

    return `${pathname}?${params.toString()}`;
  }

  return (
    <nav
      aria-label="Meeting pagination"
      className="mt-8 flex items-center justify-center gap-4"
    >
      {currentPage > 1 ? (
        <Link
          href={createPageURL(currentPage - 1)}
          className="rounded-lg border border-[#c7a56a] bg-[#fffdf9] px-4 py-2 text-sm font-medium text-[#183153] transition hover:bg-[#f5ebd5]"
        >
          Previous
        </Link>
      ) : (
        <span className="px-4 py-2 text-sm text-[#8e98a8]">Previous</span>
      )}

      <span className="text-sm font-medium text-[#4d5c6d]">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link
          href={createPageURL(currentPage + 1)}
          className="rounded-lg border border-[#c7a56a] bg-[#fffdf9] px-4 py-2 text-sm font-medium text-[#183153] transition hover:bg-[#f5ebd5]"
        >
          Next
        </Link>
      ) : (
        <span className="px-4 py-2 text-sm text-[#8e98a8]">Next</span>
      )}
    </nav>
  );
}
