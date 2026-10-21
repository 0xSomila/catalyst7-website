"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/work", label: "Work" },
  { href: "/production", label: "Production" },
  { href: "/technology", label: "Technology" },
  { href: "/consulting", label: "Consulting" },
  { href: "/studio", label: "Studio" },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Active check — matches exact page or any child route (e.g. /work/some-slug)
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/")

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-[#333333]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo — hard navigate to home so it always reloads */}
          <a href="/" onClick={() => setIsOpen(false)} className="flex items-center">
            <img src="/logo.svg" alt="Catalyst 7" className="h-8 w-auto" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors ${
                  isActive(href)
                    ? "text-[#CC1414]"
                    : "text-[#999999] hover:text-[#EDE5D0]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className={`hidden md:flex text-sm px-5 py-2 font-medium transition-colors ${
              pathname === "/contact"
                ? "bg-red-700 text-white"
                : "bg-[#CC1414] text-white hover:bg-red-700"
            }`}
          >
            Get In Touch
          </Link>

          {/* Mobile Hamburger / X */}
          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-0.5 w-5 bg-[#EDE5D0] transition-all duration-300 origin-center ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#EDE5D0] transition-all duration-300 ${
                isOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#EDE5D0] transition-all duration-300 origin-center ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Top spacer to clear nav bar */}
        <div className="h-16 shrink-0" />

        {/* Nav links */}
        <div className="flex-1 flex flex-col justify-center px-6 pb-8">
          {links.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`text-3xl sm:text-4xl font-bold py-4 border-b border-[#1E1E1E] font-[family-name:var(--font-space-grotesk)] transition-all duration-200 ${
                isActive(href) ? "text-[#CC1414]" : "text-[#EDE5D0] hover:text-[#CC1414]"
              } ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? `${i * 50}ms` : "0ms" }}
            >
              {label}
            </Link>
          ))}

          {/* CTA Button */}
          <div
            className={`mt-8 transition-all duration-200 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? `${links.length * 50}ms` : "0ms" }}
          >
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block bg-[#CC1414] text-white text-center text-base font-semibold px-8 py-4 hover:bg-red-700 transition-colors font-[family-name:var(--font-space-grotesk)]"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </>
  )
}
