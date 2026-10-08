import Link from "next/link"

export const metadata = {
  title: "Web and Digital | Catalyst 7",
  description:
    "Web platforms, client portals and digital products built for South African businesses. C7 designs and develops the digital infrastructure your operation needs to grow.",
}

export default function WebDigitalPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-[#333333] px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#CC1414] text-sm font-medium tracking-widest uppercase mb-4">
            <Link href="/technology" className="hover:underline">
              Technology
            </Link>
            <span className="mx-2 text-[#333333]">/</span>
            Web and Digital
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6 max-w-4xl">
            Digital infrastructure
            <br />
            <span className="text-[#CC1414]">built to perform.</span>
          </h1>
          <p className="text-[#999999] text-lg md:text-xl max-w-2xl leading-relaxed">
            A website is not a brochure. It is the first thing a client sees,
            the thing that qualifies or disqualifies you before a conversation
            happens. C7 builds web and digital products that work as hard as
            your team does.
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-b border-[#333333]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-12">
            What we build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Business websites",
                description:
                  "Fast, indexed and conversion-focused. Built on modern frameworks with clean architecture, SEO foundations baked in from day one, and copy that positions you correctly.",
                tag: "Most common",
              },
              {
                title: "Client portals",
                description:
                  "Secure environments where your clients log in to view project progress, approve deliverables, access documents and communicate with your team. Branded to your business.",
                tag: "Operational",
              },
              {
                title: "Web applications",
                description:
                  "Custom tools built for specific operational needs: booking systems, intake platforms, internal tools, calculators and workflow-specific applications.",
                tag: "Custom build",
              },
              {
                title: "E-commerce and digital storefronts",
                description:
                  "Product and service selling infrastructure built for South African payment rails and logistics realities. Designed for conversion, not just aesthetics.",
                tag: "Commerce",
              },
              {
                title: "Landing pages and campaign sites",
                description:
                  "Single-objective pages built around a specific offer, event or campaign. Fast to deploy, optimised to convert, and tracked from launch.",
                tag: "Campaign",
              },
              {
                title: "Platform integrations",
                description:
                  "Connecting your website to your CRM, payment provider, booking tool or operational systems so your digital presence and your business actually work together.",
                tag: "Integration",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-[#1A1A1A] border border-[#333333] p-6 ${
                  i === 0 ? "border-t-2 border-t-[#CC1414]" : ""
                }`}
              >
                <span className="text-[#CC1414] text-xs font-medium tracking-widest uppercase mb-3 block">
                  {item.tag}
                </span>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#999999] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-b border-[#333333]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
                How we build
              </h2>
              <p className="text-[#999999] leading-relaxed mb-6">
                C7 builds on modern frameworks: Next.js, React, and Tailwind for
                the front end. Vercel for deployment. Sanity or Contentful for
                content management when clients need to edit their own site.
                Supabase or Firebase for application data.
              </p>
              <p className="text-[#999999] leading-relaxed">
                We do not use page builders or templates. Every build is coded
                from scratch against a design brief, which means it performs
                correctly, loads fast and does not carry the weight of features
                you are not using.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  label: "Performance",
                  description:
                    "Every site targets a 90-plus Lighthouse score. Fast load times are not a bonus. They are a baseline.",
                },
                {
                  label: "SEO foundations",
                  description:
                    "Correct semantic structure, metadata, sitemap, robots.txt and Open Graph tags configured at launch. Not retrofitted later.",
                },
                {
                  label: "Mobile first",
                  description:
                    "Designed and tested on mobile before desktop. The majority of your clients will see your site on a phone first.",
                },
                {
                  label: "Handoff and documentation",
                  description:
                    "You receive a CMS login, a codebase you own and documentation for anything your team will need to manage ongoing.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 border-b border-[#333333] pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="text-[#CC1414] font-bold text-sm shrink-0 mt-0.5">
                    +
                  </span>
                  <div>
                    <p className="font-semibold text-sm mb-1">{item.label}</p>
                    <p className="text-[#999999] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-b border-[#333333]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)]">
              Selected work
            </h2>
            <Link
              href="/work"
              className="text-[#CC1414] text-sm font-medium hover:underline"
            >
              View all projects
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Catalyst 7 Website",
                client: "Internal",
                year: "2024",
                description:
                  "Full studio website built on Next.js with CMS integration, case study system and Vercel deployment.",
                slug: "catalyst7-website",
              },
              {
                title: "BOLO League",
                client: "BOLO League",
                year: "2024",
                description:
                  "Web platform for an emerging sports league. Event management, team listings and results tracking.",
                slug: "bolo-league",
              },
              {
                title: "Nuru. House",
                client: "Nuru. House",
                year: "2024",
                description:
                  "Brand and digital presence for a Johannesburg creative space. Full design-to-development build.",
                slug: "nuru-house",
              },
            ].map((project, i) => (
              <Link
                key={i}
                href={`/work/${project.slug}`}
                className="bg-[#1A1A1A] border border-[#333333] p-6 group hover:border-[#CC1414] transition-colors block"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#999999] text-xs uppercase tracking-widest">
                    {project.client}
                  </span>
                  <span className="text-[#999999] text-xs">
                    {project.year}
                  </span>
                </div>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-3 group-hover:text-[#CC1414] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#999999] text-sm leading-relaxed">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#CC1414] px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-3">
              Ready to build something that works?
            </h2>
            <p className="text-red-100 text-lg">
              Tell us what you need and we will scope a build that fits your
              timeline and budget.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="bg-white text-[#CC1414] px-8 py-4 font-semibold text-center hover:bg-[#EDE5D0] transition-colors"
            >
              Start the brief
            </Link>
            <Link
              href="/technology"
              className="border border-white text-white px-8 py-4 font-semibold text-center hover:bg-red-700 transition-colors"
            >
              Back to Technology
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
