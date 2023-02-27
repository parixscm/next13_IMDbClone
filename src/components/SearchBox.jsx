"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }

  return (
    <form
      className="px-5 max-w-6xl mx-auto flex justify-between items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        placeholder="Search keywords..."
        className="flex-1 w-full h-14 rounded-sm placholder-gray-500 outline-none bg-transparent"
        onChange={e => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="text-amber-500 disabled:text-gray-400"
        disabled={!search}
      >
        Search
      </button>
    </form>
  );
}
