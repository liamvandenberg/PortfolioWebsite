"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
            setShow(false); // Scrolling down
          } else {
            setShow(true); // Scrolling up
          }
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    // { passive: true } drastically improves scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-[#0a0e17]/90 backdrop-blur-md border-b border-gray-800 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-4xl text-emerald-400 hover:text-emerald-300" 
          style={{ fontFamily: "Great Vibes, cursive" }}
        >
          Liam van den Berg
        </Link>

        <nav className="flex items-center gap-8 text-base text-gray-300">
          <Link href="/#about" className="hover:text-white transition-colors">
            About Me
          </Link>
          <Link href="/#projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/#technologies" className="hover:text-white transition-colors">
            Technologies
          </Link>
          <Link href="/#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}