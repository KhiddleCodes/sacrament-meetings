export default function Loading() {
  return (
    <section
      className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="mb-8 rounded-2xl border border-[#d9d0c2] bg-[#fffdf9] p-6">
        <div className="h-4 w-32 animate-pulse rounded bg-[#e6d9bf]" />

        <div className="mt-3 h-9 w-64 animate-pulse rounded bg-[#e6d9bf]" />

        <div className="mt-3 h-5 w-96 max-w-full animate-pulse rounded bg-[#e6d9bf]" />
      </div>

      <div className="space-y-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-40 animate-pulse rounded-lg border border-[#d9d0c2] bg-[#f5efe6]"
          />
        ))}
      </div>
    </section>
  );
}
