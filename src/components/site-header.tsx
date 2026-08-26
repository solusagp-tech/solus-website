"use client";

import { useState } from "react";
import { LogoMark } from "./logo-mark";

const NAV_LINKS = [
  { href: "#disciplines", label: "Disciplines" },
  { href: "#why", label: "Why Solus" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#top" className="logo" aria-label="Solus — home">
          <LogoMark />
          <span className="logo-word">SOLUS</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta">
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile" hidden={!open}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>
          Get in touch
        </a>
      </nav>
    </header>
  );
}
