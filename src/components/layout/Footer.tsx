import Link from "next/link";
import { Zap } from "lucide-react";
import { SITE_TAGLINE, SOCIAL_LINKS } from "@/lib/constants";

const FOOTER_LINKS = {
  Institute: [
    { label: "Research Labs", href: "/research" },
    { label: "Academic Programs", href: "/courses" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Ethics Policy", href: "/ethics" },
  ],
};

const socialItems = [
  { platform: "Twitter", initial: "T", href: SOCIAL_LINKS.twitter },
  { platform: "LinkedIn", initial: "L", href: SOCIAL_LINKS.linkedin },
  { platform: "GitHub", initial: "G", href: SOCIAL_LINKS.github },
  { platform: "YouTube", initial: "Y", href: SOCIAL_LINKS.youtube },
];

export default function Footer() {
  return (
    <footer className="bg-[#080C0F] border-t border-[rgba(0,212,170,0.08)]">
      <div
        className="max-w-7xl mx-auto px-6 lg:px-8 py-16"
        style={{
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="w-8 h-8 rounded-lg bg-[#00D4AA]/10 border border-[#00D4AA]/30 flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#00D4AA]" />
              </div>
              <span
                className="text-lg font-bold tracking-widest uppercase text-white"
                style={{ letterSpacing: "0.15em" }}
              >
                Techatrax AI
              </span>
            </Link>

            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              {SITE_TAGLINE}. Leading the digital frontier through technical
              elite training and cutting-edge neural research.
            </p>

            {/* Social icons */}
            <div
              className="flex items-center gap-3 pt-2"
              style={{ paddingTop: "8px" }}
            >
              {socialItems.map((item) => (
                <a
                  key={item.platform}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.platform}
                  className="w-8 h-8 rounded-lg border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-white/40 hover:text-[#00D4AA] hover:border-[#00D4AA]/30 transition-all duration-200 text-xs font-mono"
                >
                  {item.initial}
                </a>
              ))}
            </div>
          </div>
          {/* END brand column */}

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3
                className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* END link columns */}
        </div>
        {/* END grid */}

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ marginTop: "4rem", paddingTop: "2rem" }}
        >
          <p
            className="text-xs text-white/25 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © 2026 Techatrax Global. Engineered for the digital frontier.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] animate-pulse" />
            <span
              className="text-xs text-white/25 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              System Status: Operational
            </span>
          </div>
        </div>
        {/* END bottom bar */}
      </div>
      {/* END container */}
    </footer>
  );
}
