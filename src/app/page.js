// https://oeis.org/A335031

"use client";
import SequenceSundaram from "./SequenceSundaram";

export default function Page() {
  return (
    <div className="flex min-h-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex w-full max-w-7xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <SequenceSundaram />
      </div>
    </div>
  );
}
