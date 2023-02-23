"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParam = useSearchParams();
  const genre = searchParam.get("genre");

  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`p-2 cursor-pointer font-semibold hover:text-amber-600 ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        }`}
      >
        {title}
      </Link>
    </div>
  );
}
