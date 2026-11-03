"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t-4 border-[#e2b744] bg-[#202b2e] text-[#f4f7f7]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <Link
            href="/"
            className="inline-block rounded-sm text-xl font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e2b744]"
          >
            ClothingShop
          </Link>
          <p className="mt-1 text-sm text-[#c2d0d2]">Simples e Bonito.</p>
        </div>

        <p className="text-sm text-[#c2d0d2]">&copy; 2026 ClothingShop</p>
      </div>
    </footer>
  );
}
