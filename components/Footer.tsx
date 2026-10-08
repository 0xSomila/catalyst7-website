import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#333333] px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-start gap-6">

        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="Catalyst 7" className="h-10 w-auto" />
        </Link>

        <p className="text-[#999999] text-sm">
          © 2026 Catalyst 7 (Pty) Ltd · Pretoria, Gauteng, South Africa
        </p>

        <a
          href="mailto:catalyst7@catalyst7.co.za"
          className="text-[#999999] text-sm hover:text-[#EDE5D0] transition-colors"
        >
          catalyst7@catalyst7.co.za
        </a>

        <p className="text-[#CC1414] text-sm italic">
          precision meets expression
        </p>

      </div>
    </footer>
  )
}
