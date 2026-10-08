import Link from "next/link"
import { notFound } from "next/navigation"

type Project = {
  slug: string
  category: string
  year: string
  title: string
  client: string
  tag: string
  brief: string
  approach: string
  outcome: string
  stat1value: string
  stat1label: string
  stat2value: string
  stat2label: string
  stat3value: string
  stat3label: string
  nextSlug: string
  nextTitle: string
}

const projects: Project[] = [
  {
    slug: "epma-valet",
    category: "TECHNOLOGY",
    year: "2025",
    title: "EPMA Valet",
    client: "Internal / C7 Product",
    tag: "AI · Automation",
    brief: "Build an AI assistant that surfaces project and portfolio management intelligence on demand, reducing time spent searching for information.",
    approach:
      "We designed a retrieval-augmented AI layer on top of existing project data. The assistant understands context, surfaces relevant records and drafts responses grounded in real project state.",
    outcome:
      "A working AI assistant deployed internally and available for client licensing. Reduces project status reporting time significantly.",
    stat1value: "AI",
    stat1label: "POWERED",
    stat2value: "Internal",
    stat2label: "FIRST DEPLOYMENT",
    stat3value: "2025",
    stat3label: "DELIVERED",
    nextSlug: "catalyst7-website",
    nextTitle: "Catalyst 7 Website",
  },
  {
    slug: "catalyst7-website",
    category: "TECHNOLOGY",
    year: "2025",
    title: "Catalyst 7 Website",
    client: "Catalyst 7",
    tag: "Web · Digital",
    brief: "Design and build the primary marketing and identity platform for the C7 studio. SEO-optimised, fast and fully representative of the brand.",
    approach:
      "Built on Next.js with Tailwind CSS, deployed on Vercel. Design led by the C7 brand system. Content structured for search indexing from day one.",
    outcome:
      "Live production site serving as C7's primary client acquisition and credibility asset.",
    stat1value: "Next.js",
    stat1label: "FRAMEWORK",
    stat2value: "Vercel",
    stat2label: "DEPLOYED ON",
    stat3value: "2025",
    stat3label: "DELIVERED",
    nextSlug: "bolo-league",
    nextTitle: "BOLO League",
  },
  {
    slug: "bolo-league",
    category: "TECHNOLOGY",
    year: "2025",
    title: "BOLO League",
    client: "BOLO League",
    tag: "Web · Digital",
    brief: "Build a digital home for a youth basketball league. Fixtures, standings, team profiles and results in one accessible platform.",
    approach:
      "Custom web application with a content management layer. Designed for mobile-first use by players, parents and coaches.",
    outcome:
      "A functioning league platform replacing manual spreadsheets and WhatsApp group updates.",
    stat1value: "Mobile",
    stat1label: "FIRST",
    stat2value: "CMS",
    stat2label: "POWERED",
    stat3value: "2025",
    stat3label: "DELIVERED",
    nextSlug: "nuru-house",
    nextTitle: "Nuru. House",
  },
  {
    slug: "nuru-house",
    category: "TECHNOLOGY",
    year: "2025",
    title: "Nuru. House",
    client: "Nuru. House",
    tag: "Web · Digital",
    brief: "Build a web platform that communicates the identity and capability of a creative production house to potential clients.",
    approach:
      "Design-led build with strong visual hierarchy. Built on Next.js with a focus on first impression, portfolio presentation and contact conversion.",
    outcome:
      "A live production site used actively for client acquisition by the Nuru. House team.",
    stat1value: "Next.js",
    stat1label: "FRAMEWORK",
    stat2value: "Live",
    stat2label: "IN PRODUCTION",
    stat3value: "2025",
    stat3label: "DELIVERED",
    nextSlug: "lethiwe-dlamini-brand-film",
    nextTitle: "Lethiwe Dlamini — Brand Film",
  },
  {
    slug: "lethiwe-dlamini-brand-film",
    category: "PRODUCTION",
    year: "2025",
    title: "Lethiwe Dlamini — Brand Film",
    client: "Lethiwe Dlamini",
    tag: "Commercial Film",
    brief: "Create a brand identity film for a personal brand launch. The film needed to communicate character, aesthetic and professional positioning in under two minutes.",
    approach:
      "Concept development, location scouting, direction and full post-production managed in-house. Shot in Pretoria over one day.",
    outcome:
      "A completed brand film used across the client's digital platforms and personal brand presence.",
    stat1value: "1 Day",
    stat1label: "SHOOT",
    stat2value: "In-House",
    stat2label: "PRODUCTION",
    stat3value: "2025",
    stat3label: "DELIVERED",
    nextSlug: "uhc-campaign",
    nextTitle: "UHC Campaign Content",
  },
  {
    slug: "uhc-campaign",
    category: "PRODUCTION",
    year: "2025",
    title: "UHC — Campaign Content",
    client: "UHC",
    tag: "Social Content",
    brief: "Produce social and digital campaign content for a healthcare brand across multiple platforms and formats.",
    approach:
      "Photography and video production across multiple shoot days. Content formatted and optimised for Instagram, LinkedIn and digital display.",
    outcome:
      "A complete campaign content library delivered and deployed across the client's active channels.",
    stat1value: "Multi",
    stat1label: "PLATFORM",
    stat2value: "Photo",
    stat2label: "AND VIDEO",
    stat3value: "2025",
    stat3label: "DELIVERED",
    nextSlug: "circuits-of-culture",
    nextTitle: "Circuits of Culture",
  },
  {
    slug: "circuits-of-culture",
    category: "PRODUCTION",
    year: "2025",
    title: "Circuits of Culture — Podcast Trailer",
    client: "Circuits of Culture",
    tag: "Podcast · Film",
    brief: "Produce a trailer for a culture and conversation podcast. The trailer needed to establish tone, introduce hosts and drive subscriptions.",
    approach:
      "Concept, shoot and edit managed end to end. Produced as both a video trailer and an audio-only cut for distribution across podcast platforms.",
    outcome:
      "Completed trailer delivered and used for the podcast launch across social and streaming platforms.",
    stat1value: "Video",
    stat1label: "AND AUDIO",
    stat2value: "Launch",
    stat2label: "ASSET",
    stat3value: "2025",
    stat3label: "DELIVERED",
    nextSlug: "kairos",
    nextTitle: "Kairos",
  },
  {
    slug: "kairos",
    category: "TECHNOLOGY",
    year: "2025",
    title: "Kairos",
    client: "Catalyst 7 (Internal)",
    tag: "Platform · AI",
    brief: "Build a capacity-matching platform that connects businesses with qualified operators across creative and technical disciplines.",
    approach:
      "Platform architecture designed around capability mapping, operator qualification and intelligent matching. Currently in active development.",
    outcome:
      "Internal product in development. Designed as a standalone C7 commercial platform.",
    stat1value: "In Dev",
    stat1label: "STATUS",
    stat2value: "Platform",
    stat2label: "PRODUCT",
    stat3value: "2025",
    stat3label: "STARTED",
    nextSlug: "next5",
    nextTitle: "Next 5",
  },
  {
    slug: "next5",
    category: "CONSULTING",
    year: "2025",
    title: "Next 5",
    client: "Next 5",
    tag: "Strategy · Systems",
    brief: "Design a growth strategy and client collaboration framework for an active business relationship. From audit to structured implementation plan.",
    approach:
      "Operational audit followed by systems design. Documented as a clear action plan with ownership, sequence and measurable milestones.",
    outcome:
      "A structured collaboration framework actively in use. Ongoing strategic relationship.",
    stat1value: "Ongoing",
    stat1label: "ENGAGEMENT",
    stat2value: "Strategy",
    stat2label: "AND SYSTEMS",
    stat3value: "2025",
    stat3label: "STARTED",
    nextSlug: "epma-valet",
    nextTitle: "EPMA Valet",
  },
]

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function WorkSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <>
      {/* Page Hero */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <p className="text-[#999999] text-xs uppercase tracking-widest mb-8">
          <Link href="/work" className="hover:text-[#EDE5D0] transition-colors">
            WORK
          </Link>{" "}
          / {project.category}
        </p>
        <h1 className="text-[#EDE5D0] text-5xl md:text-7xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
          {project.title}
        </h1>
        <p className="text-[#999999] text-lg mb-2">
          Client: {project.client}
        </p>
        <span className="border border-[#333333] text-[#999999] text-xs px-3 py-1 inline-block">
          {project.tag}
        </span>
      </section>

      {/* Three Stat Tiles */}
      <section className="bg-[#1A1A1A] py-12 px-6 border-y border-[#333333]">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-[#EDE5D0] text-3xl font-bold mb-1 font-[family-name:var(--font-space-grotesk)]">
              {project.stat1value}
            </p>
            <p className="text-[#CC1414] text-xs uppercase tracking-widest">
              {project.stat1label}
            </p>
          </div>
          <div>
            <p className="text-[#EDE5D0] text-3xl font-bold mb-1 font-[family-name:var(--font-space-grotesk)]">
              {project.stat2value}
            </p>
            <p className="text-[#CC1414] text-xs uppercase tracking-widest">
              {project.stat2label}
            </p>
          </div>
          <div>
            <p className="text-[#EDE5D0] text-3xl font-bold mb-1 font-[family-name:var(--font-space-grotesk)]">
              {project.stat3value}
            </p>
            <p className="text-[#CC1414] text-xs uppercase tracking-widest">
              {project.stat3label}
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Body */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="md:col-span-1">
          <div className="border-b border-[#333333] pb-8 mb-8">
            <p className="text-[#CC1414] text-xs uppercase tracking-widest mb-3">
              The Brief
            </p>
            <p className="text-[#999999] text-sm leading-relaxed">
              {project.brief}
            </p>
          </div>
          <div className="border-b border-[#333333] pb-8 mb-8">
            <p className="text-[#999999] text-xs uppercase tracking-widest mb-3">
              The Approach
            </p>
            <p className="text-[#999999] text-sm leading-relaxed">
              {project.approach}
            </p>
          </div>
          <div>
            <p className="text-[#999999] text-xs uppercase tracking-widest mb-3">
              The Outcome
            </p>
            <p className="text-[#999999] text-sm leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="bg-[#1A1A1A] w-full aspect-video flex items-center justify-center">
            <p className="text-[#333333] text-sm">
              Project imagery coming soon
            </p>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t border-[#333333]">
        <div className="flex justify-between items-center">
          <p className="text-[#999999] text-xs uppercase tracking-widest">
            Next Project
          </p>
          <Link
            href={`/work/${project.nextSlug}`}
            className="text-[#EDE5D0] text-xl font-semibold hover:text-[#CC1414] transition-colors font-[family-name:var(--font-space-grotesk)]"
          >
            {project.nextTitle} &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
