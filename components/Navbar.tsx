"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        isScrolled ? "bg-white/80 backdrop-blur border-b border-zinc-200 dark:bg-black/60 dark:border-zinc-800" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-14 items-center justify-between">
          <a href="#home" className="text-base font-semibold">
            Iqbal
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="#home" className="hover:opacity-80">Home</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#education" className="hover:opacity-80">Education</a>
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}


