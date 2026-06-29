"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 px-6 py-4 text-white bg-black md:px-10">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <div className="text-lg font-bold">CICLÓN RÁPIDO</div>

        {/* DESKTOP */}
        <div className="items-center hidden gap-8 text-sm md:flex">
          <Link href="/" className="hover:text-red-400">
            HOME
          </Link>

          <div className="relative group">
            <span className="cursor-pointer hover:text-red-400">
              OUR TEAM ▼
            </span>
            <div
              className="
  absolute top-full left-0 w-44
  bg-white text-black rounded-lg shadow-lg

  opacity-0 scale-95 translate-y-2
  group-hover:opacity-100
  group-hover:scale-100
  group-hover:translate-y-0

  transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]

  pointer-events-none group-hover:pointer-events-auto
"
            >
              <Link
                href="/our-team/drivers"
                className="block px-3 py-2 hover:bg-gray-100"
              >
                Drivers
              </Link>
              <Link href="/our-team/cars" className="block px-3 py-2 hover:bg-gray-100">
                Cars
              </Link>
              <Link
                href="/our-team/achievement"
                className="block px-3 py-2 hover:bg-gray-100"
              >
                Achievement
              </Link>
            </div>
          </div>

          <Link href="/gallery" className="hover:text-red-400">
            GALLERY
          </Link>

          <div className="relative group">
            <span className="cursor-pointer hover:text-red-400">ABOUT ▼</span>
            <div
              className="
  absolute top-full left-0 w-44
  bg-white text-black rounded-lg shadow-lg

  opacity-0 scale-95 translate-y-2
  group-hover:opacity-100
  group-hover:scale-100
  group-hover:translate-y-0

  transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]

  pointer-events-none group-hover:pointer-events-auto
"
            >
              <Link
                href="/about-us/our-history"
                className="block px-3 py-2 hover:bg-gray-100"
              >
                Our History
              </Link>
              <Link
                href="/about-us/our-sponsors"
                className="block px-3 py-2 hover:bg-gray-100"
              >
                Our Partners
              </Link>
              <Link
                href="/about-us/contact-us"
                className="block px-3 py-2 hover:bg-gray-100"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="text-2xl md:hidden">
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] mt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col text-sm divide-y divide-gray-800">
          {/* HOME */}
          <Link href="/" className="py-3">
            HOME
          </Link>

          {/* OUR TEAM */}
          <div>
            <button
              onClick={() => setTeamOpen(!teamOpen)}
              className="flex items-center justify-between w-full py-3"
            >
              OUR TEAM
              <span className={`transition ${teamOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                teamOpen ? "max-h-40 pb-2" : "max-h-0"
              }`}
            >
              <div className="flex flex-col gap-2 pl-4 text-gray-300">
                <Link href="/our-team/drivers">Drivers</Link>
                <Link href="/cars">Cars</Link>
                <Link href="/achievement">Achievement</Link>
              </div>
            </div>
          </div>

          {/* GALLERY */}
          <Link href="/gallery" className="py-3">
            GALLERY
          </Link>

          {/* CONTACT US */}
          <div>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center justify-between w-full py-3"
            >
              CONTACT US
              <span className={`transition ${aboutOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                aboutOpen ? "max-h-40 pb-2" : "max-h-0"
              }`}
            >
              <div className="flex flex-col gap-2 pl-4 text-gray-300">
                <Link href="/about-us/our-history">Our History</Link>
                <Link href="/about-us/our-sponsors">Our Partner</Link>
                <Link href="/about-us/contact-us">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
