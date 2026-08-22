// https://oeis.org/A335031

"use client";
import SequenceSundaram from "./SequenceSundaram";

export default function Page() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex w-full max-w-7xl flex-col items-center justify-between bg-white px-4 py-8 dark:bg-black sm:items-start sm:px-16">
        <SequenceSundaram />
      </div>
    </div>
  );
}
