"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BookOpen, Search, Heart } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur dark:bg-zinc-950/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white">
            <BookOpen size={20} />
          </div>

          <span>
            Book<span className="text-gray-500">Hub</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-gray-500"
          >
            Home
          </Link>

          <Link
            href="/book"
            className="text-sm font-medium transition-colors hover:text-gray-500"
          >
            Books
          </Link>

          <Link
            href="/aboutUs"
            className="text-sm font-medium transition-colors hover:text-gray-500"
          >
            About Us
          </Link> 
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-gray-100 dark:hover:bg-zinc-800"
            aria-label="Search"
          >
            <Search size={19} />
          </button>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-gray-100 dark:hover:bg-zinc-800"
            aria-label="Favorites"
          >
            <Heart size={19} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 md:hidden dark:hover:bg-zinc-800"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white px-4 pb-5 pt-3 md:hidden dark:bg-zinc-950">
          <div className="flex flex-col gap-2">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              Home
            </Link>

            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              Books
            </Link>

            <Link
              href="/favorites"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              About Us
            </Link>

            <button
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              <Search size={18} />
              Search
            </button>

            <button
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              <Heart size={18} />
             About Us
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}