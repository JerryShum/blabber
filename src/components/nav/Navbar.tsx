"use client";

import Logo from "@/components/nav/Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import NavAuth from "./NavAuth";
import { DarkModeToggle } from "./DarkModeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

        <div className="flex items-center justify-between lg:hidden">
          <Logo />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-full z-50 bg-white py-4 shadow-lg transition-all duration-300 dark:bg-gray-900 lg:hidden">
            <div className="flex flex-col gap-4">
              <div className="px-4">
                <SearchBar />
              </div>
              <NavLinks />
              <div className="flex items-center justify-between px-4">
                <DarkModeToggle />
                <NavAuth />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
