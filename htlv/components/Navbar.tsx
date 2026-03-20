"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "/contact-us", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-site-black/95 backdrop-blur-md border-b border-gold">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 min-[850px]:px-10 h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center no-underline">
            <Image
              src="/hustlers_towing_gold_stroke.webp"
              alt="Hustlers Towing Las Vegas"
              width={160}
              height={48}
              priority
              className="h-15 w-auto object-contain"
            />
          </Link>

          {/* Desktop links — visible above 850px */}
          <ul className="hidden min-[860px]:flex items-center gap-8 list-none m-0 p-0">
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
                href="tel:7021234567"
                className="font-condensed text-[13px] font-bold tracking-[2px] uppercase text-site-black bg-gold px-5 py-2.5 rounded-sm no-underline hover:bg-gold-dark transition-colors"
              >
                (702) 123-4567
              </a>
            </li>
          </ul>

          {/* Mobile: call button + hamburger — visible below 850px */}
          <div className="flex min-[860px]:hidden items-center gap-3">
            <a
              href="tel:7021234567"
              className="hidden font-condensed text-[13px] font-bold tracking-[1px] uppercase text-site-black bg-gold px-4 py-2 rounded-sm no-underline"
            >
              Call Now
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-sm border border-gold/20 hover:border-gold/50 transition-colors"
            >
              <span
                className={`block w-5 h-[1.5px] bg-cream transition-all duration-300 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-cream transition-all duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-cream transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`min-[850px]:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-[400px] border-t border-gold/20" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col list-none m-0 p-0 px-6 py-4 gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block font-condensed text-[15px] font-bold tracking-[2px] uppercase text-muted no-underline hover:text-gold transition-colors py-3 border-b border-gold/10"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <a
                href="tel:7021234567"
                className="flex items-center justify-center font-condensed text-[15px] font-bold tracking-[2px] uppercase text-site-black bg-gold py-4 rounded-sm no-underline hover:bg-gold-dark transition-colors"
              >
                (702) 123-4567
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
