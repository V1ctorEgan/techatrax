"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, Bell } from "lucide-react";
import { cn } from "@/utils/cn";

const NAV_LINKS = [
  { label: "Courses", href: "/courses" },
  { label: "Research", href: "/research" },
  { label: "Students", href: "/students" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080C0F]/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-360 mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-[#00D4AA] text-[18px] font-black tracking-tighter uppercase italic">
              Techatrax
            </span>
          </Link>

          {/* Centered Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-200",
                    isActive
                      ? "text-[#00E5FF]"
                      : "text-white/70 hover:text-white",
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00E5FF] shadow-[0_2px_10px_#00E5FF]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Globe className="w-4 h-4 text-white/60 cursor-pointer hover:text-white" />
            <Bell className="w-4 h-4 text-white/60 cursor-pointer hover:text-white" />
            <div className="flex items-center justify-center min-w-30 h-9 bg-[#00E5FF] rounded-xs hover:bg-[#00D4AA] transition-all uppercase shadow-[0_0_15px_rgba(0,229,255,0.4)] mr-2">
              <Link
                href="/portal"
                className="font-bold w-full h-full flex items-center justify-center px-6 mx-1 text-[10px]  text-[#141516]  whitespace-nowrap"
              >
                Portal Access
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#080C0F] p-6 flex flex-col gap-4 border-t border-white/10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase text-white/70"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
