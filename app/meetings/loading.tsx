export default function MeetingsLoading() {
  return (
    <div
      className="flex min-h-[300px] items-center justify-center"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-slate-900" />
        <p className="mt-4 text-sm text-slate-600">
          Loading meeting programs...
        </p>
      </div>
    </div>
  );
}
