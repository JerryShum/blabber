"use client";

import Logo from "@/components/nav/Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import NavAuth from "./NavAuth";
import { DarkModeToggle } from "./DarkModeToggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="relative px-4 py-3">
      <div className="mx-auto max-w-7xl">
        {/* Desktop Navigation */}
        <div className="hidden items-center justify-between gap-4 lg:flex">
          <Logo />
          <NavLinks />
          <div className="flex items-center gap-4">
            <SearchBar />
            <DarkModeToggle />
            <NavAuth />
          </div>
        </div>

        {/* Mobile Navigation Header */}
        <div className="flex items-center justify-between lg:hidden">
          <Logo />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Half-screen Mobile Menu */}
        <div
          className={`fixed inset-y-0 right-0 top-[73px] z-50 w-3/4 transform bg-white transition-transform duration-300 ease-in-out dark:bg-gray-900 lg:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col overflow-y-auto">
            <div className="flex flex-col space-y-8 p-6">
              <div className="w-full">
                <SearchBar />
              </div>
              <div className="flex flex-col space-y-4">
                <NavLinks mobile={true} />
              </div>
              <div className="flex items-center justify-center gap-10">
                <DarkModeToggle />
                <NavAuth />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
