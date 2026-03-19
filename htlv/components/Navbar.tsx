"use client";
import Link from "next/link";
import { TruckIcon } from "./Icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#request", label: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 h-[70px] bg-site-black/95 backdrop-blur-md border-b border-gold">
      <Link
        href="/"
        className="flex items-center gap-2.5 font-bebas text-[26px] tracking-[3px] text-cream no-underline"
      >
        <TruckIcon className="w-7 h-7 text-gold" />
        Hustlers <span className="text-gold">Towing</span>
      </Link>

      <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-condensed text-[13px] font-bold tracking-[2px] uppercase text-muted no-underline hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="tel:702-123-4567"
            className="font-condensed text-[13px] font-bold tracking-[2px] uppercase text-site-black bg-gold px-5 py-2.5 rounded-sm no-underline hover:bg-gold-dark transition-colors"
          >
            (702) 123-4567
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
