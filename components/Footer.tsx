import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#333333] pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <p className="text-[#EDE5D0] text-2xl font-bold mb-3 font-[family-name:var(--font-space-grotesk)]">
              C7
            </p>
            <p className="text-[#999999] text-sm">
              Precision meets expression.
            </p>
            <p className="text-[#999999] text-sm mt-1">
              Pretoria, South Africa
            </p>
          </div>

          {/* Studio */}
          <div>
            <p className="text-[#999999] text-xs uppercase tracking-widest mb-4">
              Studio
            </p>
            <Link
              href="/studio"
              className="text-[#999999] text-sm hover:text-[#EDE5D0] transition-colors block mb-2"
            >
              About Us
            </Link>
            <Link
              href="/process"
              className="text-[#999999] text-sm hover:text-[#EDE5D0] transition-colors block mb-2"
            >
              Our Process
            </Link>
            <Link
              href="/work"
              className="text-[#999999] text-sm hover:text-[#EDE5D0] transition-colors block mb-2"
            >
              Our Work
            </Link>
          </div>

          {/* Services */}
          <div>
            <p className="text-[#999999] text-xs uppercase tracking-widest mb-4">
              Services
            </p>
            <Link
              href="/technology"
              className="text-[#999999] text-sm hover:text-[#EDE5D0] transition-colors block mb-2"
            >
              Technology
            </Link>
            <Link
              href="/production"
              className="text-[#999999] text-sm hover:text-[#EDE5D0] transition-colors block mb-2"
            >
              Production
            </Link>
            <Link
              href="/consulting"
              className="text-[#999999] text-sm hover:text-[#EDE5D0] transition-colors block mb-2"
            >
              Consulting
            </Link>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#999999] text-xs uppercase tracking-widest mb-4">
              Contact
            </p>
            <a
              href="mailto:hello@catalyst7.co.za"
              className="text-[#999999] text-sm hover:text-[#EDE5D0] transition-colors block mb-2"
            >
              hello@catalyst7.co.za
            </a>
            <Link
              href="/contact"
              className="text-[#CC1414] text-sm hover:underline block"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-[#333333] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#999999] text-xs">
            &copy; 2025 Catalyst 7 (Pty) Ltd. All rights reserved.
          </p>
          <span className="text-[#CC1414] italic text-sm font-medium">
            precision meets expression
          </span>
        </div>
      </div>
    </footer>
  )
}
