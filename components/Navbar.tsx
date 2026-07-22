"use client";

import { useState } from "react";
import { navigation } from "@/lib/content";
import { Icon } from "./ui/Icon";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#fffdf9]/95 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-bold text-slate-900"
          onClick={closeMenu}
        >
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
            alt="Accredian logo"
            className="h-10" 
          />
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold transition hover:text-blue-500 hover:underline"
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 lg:hidden"
        >
          <Icon name={open ? "close" : "menu"} className="size-6" />
        </button>
      </nav>
      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-[#fffdf9] px-5 py-5 lg:hidden"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="block rounded-md px-3 py-3 font-medium text-slate-700 hover:bg-teal-50"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-3 block rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Talk to an expert
          </a>
        </div>
      ) : null}
    </header>
  );
};
