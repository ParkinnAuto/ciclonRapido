"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto text-gray-700 bg-gray-100">
      <div className="px-6 py-12 mx-auto max-w-7xl">

        {/* line */}
        <div className="mb-10 border-t border-gray-300"></div>

        {/* grid */}
        <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-4">

          {/* copyright */}
          <div className="flex items-start col-span-2 md:col-span-1">
            <p className="text-gray-500 transition hover:text-black">
              © Ciclón Rápido 2025
            </p>
          </div>

          {/* OUR TEAM */}
          <FooterColumn title="OUR TEAM" href="/our-team/drivers">
            <FooterLink href="/our-team/drivers">Drivers</FooterLink>
            <FooterLink href="/our-team/cars">Cars</FooterLink>
            <FooterLink href="/our-team/achievement">Achievement</FooterLink>
          </FooterColumn>

          {/* GALLERY */}
          <FooterColumn title="GALLERY" href="/gallery">
            <FooterLink href="/gallery">Gallery</FooterLink>
          </FooterColumn>

          {/* ABOUT */}
          <FooterColumn title="ABOUT US" href="/about-us/our-history">
            <FooterLink href="/about-us/our-history">Our History</FooterLink>
            <FooterLink href="/about-us/our-sponsors">Our Partners</FooterLink>
            <FooterLink href="/about-us/contact-us">Contact Us</FooterLink>
          </FooterColumn>

        </div>
      </div>
    </footer>
  );
}

/////////////////////////////////////////////////////////
// 🔥 Column Component (Clickable Title)
/////////////////////////////////////////////////////////
function FooterColumn({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <div>
      {href ? (
        <Link
          href={href}
          className="block mb-4 font-semibold tracking-wide text-gray-900 transition hover:text-black"
        >
          {title}
        </Link>
      ) : (
        <h3 className="mb-4 font-semibold tracking-wide text-gray-900">
          {title}
        </h3>
      )}

      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

/////////////////////////////////////////////////////////
// 🔥 Interactive Link (ใช้ Next Link)
/////////////////////////////////////////////////////////
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="relative inline-block transition-all duration-200 group hover:text-black"
      >
        {/* text */}
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          {children}
        </span>

        {/* underline animation */}
        <span
          className="
            absolute left-0 -bottom-1 h-[1px] w-0 bg-black
            transition-all duration-300
            group-hover:w-full
          "
        ></span>
      </Link>
    </li>
  );
}