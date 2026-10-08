"use client"

import { useState } from "react"
import Link from "next/link"

const links = [
  { href: "/work", label: "Work" },
  { href: "/production", label: "Production" },
  { href: "/technology", label: "Technology" },
  { href: "/consulting", label: "Consulting" },
  { href: "/studio", label: "Studio" },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-[#333333]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <span className="font-bold text-[#EDE5D0] text-lg tracking-tight font-[family-name:var(--font-space-grotesk)]">
              C7
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[#999999] text-sm hover:text-[#EDE5D0] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:flex bg-[#CC1414] text-white text-sm px-5 py-2 font-medium hover:bg-red-700 transition-colors"
          >
            Get In Touch
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="h-0.5 w-5 bg-[#EDE5D0]" />
            <div className="h-0.5 w-5 bg-[#EDE5D0]" />
            <div className="h-0.5 w-5 bg-[#EDE5D0]" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#0A0A0A] z-40 flex flex-col pt-20 px-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-[#EDE5D0] text-2xl font-bold py-4 border-b border-[#333333] font-[family-name:var(--font-space-grotesk)]"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-[#EDE5D0] text-2xl font-bold py-4 border-b border-[#333333] font-[family-name:var(--font-space-grotesk)]"
          >
            Contact
          </Link>
        </div>
      )}

      {/* Spacer */}
      <div className="h-16" />
    </>
  )
}
