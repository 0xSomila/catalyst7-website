import Link from "next/link"

export default function Work() {
  const projects = [
    {
      slug: "epma-valet",
      category: "TECHNOLOGY",
      year: "2025",
      title: "EPMA Valet",
      description:
        "AI-powered assistant for enterprise project and portfolio management. Built to surface the right information at the right time.",
      tag: "AI · Automation",
    },
    {
      slug: "catalyst7-website",
      category: "TECHNOLOGY",
      year: "2025",
      title: "Catalyst 7 Website",
      description:
        "Full-stack marketing site and operating platform for the C7 studio. Built on Next.js, deployed on Vercel.",
      tag: "Web · Digital",
    },
    {
      slug: "bolo-league",
      category: "TECHNOLOGY",
      year: "2025",
      title: "BOLO League",
      description:
        "Digital platform for a youth basketball league. Fixtures, standings and team management in one system.",
      tag: "Web · Digital",
    },
    {
      slug: "nuru-house",
      category: "TECHNOLOGY",
      year: "2025",
      title: "Nuru. House",
      description:
        "Web platform for a creative production house. Designed to attract clients and communicate the studio's identity.",
      tag: "Web · Digital",
    },
    {
      slug: "lethiwe-dlamini-brand-film",
      category: "PRODUCTION",
      year: "2025",
      title: "Lethiwe Dlamini — Brand Film",
      description:
        "Brand identity film for a personal brand launch. Concept, direction and edit delivered end to end.",
      tag: "Commercial Film",
    },
    {
      slug: "uhc-campaign",
      category: "PRODUCTION",
      year: "2025",
      title: "UHC — Campaign Content",
      description:
        "Social and digital campaign content for a healthcare brand. Photography and video across multiple platforms.",
      tag: "Social Content",
    },
    {
      slug: "circuits-of-culture",
      category: "PRODUCTION",
      year: "2025",
      title: "Circuits of Culture — Podcast Trailer",
      description:
        "Trailer production for a culture and conversation podcast. Concept, shoot and edit.",
      tag: "Podcast · Film",
    },
    {
      slug: "kairos",
      category: "TECHNOLOGY",
      year: "2025",
      title: "Kairos",
      description:
        "Capacity-matching platform connecting businesses with qualified operators. Internal C7 product in active development.",
      tag: "Platform · AI",
    },
    {
      slug: "next5",
      category: "CONSULTING",
      year: "2025",
      title: "Next 5",
      description:
        "Growth strategy and systems design for a client collaboration framework. From audit to implementation plan.",
      tag: "Strategy · Systems",
    },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <p className="text-[#999999] text-xs uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-[#EDE5D0] transition-colors">
            HOME
          </Link>{" "}
          / WORK
        </p>
        <h1 className="text-[#EDE5D0] text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
          Selected work.
        </h1>
        <p className="text-[#999999] text-xl max-w-xl">
          Projects across technology, production and consulting. Every
          engagement listed here produced a measurable outcome.
        </p>
      </section>

      {/* Project Grid */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="bg-[#1A1A1A] p-8 block hover:border-[#CC1414] border border-transparent transition-colors group"
            >
              <div className="flex justify-between mb-6">
                <span
                  className={`text-xs uppercase tracking-widest ${
                    index === 0 ? "text-[#CC1414]" : "text-[#999999]"
                  }`}
                >
                  {project.category}
                </span>
                <span className="text-[#999999] text-xs">{project.year}</span>
              </div>
              <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 group-hover:text-[#CC1414] transition-colors font-[family-name:var(--font-space-grotesk)]">
                {project.title}
              </h3>
              <p className="text-[#999999] text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <span className="inline-block border border-[#333333] text-[#999999] text-xs px-3 py-1">
                {project.tag}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#1A1A1A] py-16 px-6 border-t border-[#333333]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#EDE5D0] text-xl font-semibold font-[family-name:var(--font-space-grotesk)]">
            Working on something?
          </p>
          <Link
            href="/contact"
            className="bg-[#CC1414] text-white px-8 py-3 font-medium hover:bg-red-700 transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  )
}
