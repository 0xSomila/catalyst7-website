import Link from "next/link"

export default function Contact() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <p className="text-[#999999] text-xs uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-[#EDE5D0] transition-colors">
            HOME
          </Link>{" "}
          / CONTACT
        </p>
        <h1 className="text-[#EDE5D0] text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
          Let&apos;s build something.
        </h1>
        <p className="text-[#999999] text-xl max-w-xl">
          Tell us what you&apos;re working on. We&apos;ll tell you if and how
          we can help.
        </p>
      </section>

      {/* Two-Column Layout */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="text-[#999999] text-xs uppercase tracking-widest mb-2 block"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Themba Dlamini"
              className="bg-[#1A1A1A] border border-[#333333] text-[#EDE5D0] px-4 py-3 w-full focus:outline-none focus:border-[#CC1414] placeholder:text-[#999999]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-[#999999] text-xs uppercase tracking-widest mb-2 block"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@company.com"
              className="bg-[#1A1A1A] border border-[#333333] text-[#EDE5D0] px-4 py-3 w-full focus:outline-none focus:border-[#CC1414] placeholder:text-[#999999]"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-[#999999] text-xs uppercase tracking-widest mb-2 block"
            >
              What Are You Working On?
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us about the project, the problem or the idea."
              className="bg-[#1A1A1A] border border-[#333333] text-[#EDE5D0] px-4 py-3 w-full focus:outline-none focus:border-[#CC1414] placeholder:text-[#999999] resize-none"
            />
          </div>

          <div>
            <label
              htmlFor="type"
              className="text-[#999999] text-xs uppercase tracking-widest mb-2 block"
            >
              What Type of Engagement?
            </label>
            <select
              id="type"
              name="type"
              defaultValue=""
              className="bg-[#1A1A1A] border border-[#333333] text-[#EDE5D0] px-4 py-3 w-full focus:outline-none focus:border-[#CC1414]"
            >
              <option value="" disabled className="text-[#999999]">
                Select one...
              </option>
              <option value="production">Production Brief</option>
              <option value="technology">Technology Build</option>
              <option value="consulting">Business Consulting</option>
              <option value="general">General Enquiry</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#CC1414] text-white px-8 py-3 font-medium w-full hover:bg-red-700 transition-colors mt-2"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-10">
          <div>
            <p className="text-[#999999] text-xs uppercase tracking-widest mb-2">
              Based In
            </p>
            <p className="text-[#EDE5D0] text-lg">
              Pretoria, Gauteng, South Africa
            </p>
          </div>

          <div>
            <p className="text-[#999999] text-xs uppercase tracking-widest mb-2">
              Email
            </p>
            <a
              href="mailto:catalyst7@catalyst7.co.za"
              className="text-[#EDE5D0] text-lg hover:text-[#CC1414] transition-colors"
            >
              catalyst7@catalyst7.co.za
            </a>
          </div>

          <div>
            <p className="text-[#999999] text-xs uppercase tracking-widest mb-2">
              Response Time
            </p>
            <p className="text-[#EDE5D0] text-lg">
              We respond to all project enquiries within 24 hours.
            </p>
          </div>

          <div>
            <p className="text-[#999999] text-xs uppercase tracking-widest mb-4">
              What Happens Next
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-[#CC1414] font-bold">01</span>
                <p className="text-[#999999] text-sm">
                  We review your message and respond within 24 hours.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-[#CC1414] font-bold">02</span>
                <p className="text-[#999999] text-sm">
                  We schedule a discovery call to understand what you need.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-[#CC1414] font-bold">03</span>
                <p className="text-[#999999] text-sm">
                  We come back with a scoped proposal or a clear next move.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Strip */}
      <section className="bg-[#1A1A1A] py-12 px-6 border-t border-[#333333]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#999999] text-sm">Not sure what you need?</p>
          <p className="text-[#EDE5D0] text-sm">
            Book a free 30-minute discovery call and we&apos;ll figure it out
            together.
          </p>
          <a
            href="mailto:catalyst7@catalyst7.co.za"
            className="text-[#CC1414] text-sm font-medium hover:underline"
          >
            Book a Call
          </a>
        </div>
      </section>
    </>
  )
}
