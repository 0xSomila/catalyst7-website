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
    slug: "catalyst7-hq",
    category: "TECHNOLOGY",
    year: "2026",
    title: "Catalyst 7 HQ",
    client: "Catalyst 7 (Internal)",
    tag: "Cloud · Infrastructure",
    brief:
      "C7 needed a single, controlled environment to track freelancer hours, revenue, client relationships, and pipeline without exposing internal data to third-party SaaS tools or paying monthly subscription costs that compound as the studio scales.",
    approach:
      "Built on Cloudflare Workers and D1 — serverless SQLite at the edge — the platform carries zero infrastructure overhead. Role-based access separates founder-level visibility from freelancer views. Enterprise-grade security: TOTP 2FA with backup codes, CSRF protection, rate-limited login, a full audit log, and optional Google OAuth. A monthly retention review cron trigger runs automatically each period.",
    outcome:
      "A live internal operating platform giving C7 complete ownership of its operational data — weekly freelancer logs, revenue tracking, client records, lead pipeline — accessible from anywhere, at zero recurring cost beyond Cloudflare's free tier. The first tool C7 built for itself. Now the system the studio runs on.",
    stat1value: "Cloudflare",
    stat1label: "INFRASTRUCTURE",
    stat2value: "Zero",
    stat2label: "RECURRING COST",
    stat3value: "2026",
    stat3label: "DELIVERED",
    nextSlug: "nuru-house-ai-receptionist",
    nextTitle: "Nuru House AI Receptionist",
  },
  {
    slug: "nuru-house-ai-receptionist",
    category: "TECHNOLOGY",
    year: "2026",
    title: "Nuru House AI Receptionist",
    client: "Nuru House",
    tag: "AI · Automation",
    brief:
      "Nuru House — an African luxury hair house in Pretoria North — was handling all inbound bookings, product enquiries, and leads manually via WhatsApp. Volume was unmanageable, response times inconsistent, and no structured data existed. The business was losing leads it did not know it had.",
    approach:
      "C7 built a Botpress v12 conversational flow using Claude Haiku for intent classification across seven defined categories: booking, product enquiry, care tips, pre-order, lead capture, order, and escalation. A three-step lead capture sequence fires confirmed leads via a Make.com webhook into a live Google Sheets log with a simultaneous WhatsApp notification to staff. The system handles the full top-of-funnel without human involvement.",
    outcome:
      "A fully documented, tested AI receptionist architecture ready for production deployment, pending Meta WhatsApp business verification. Zero-maintenance post-deployment design. Proved that a studio-scale team can build the same automation infrastructure as a funded tech company.",
    stat1value: "7",
    stat1label: "INTENT CATEGORIES",
    stat2value: "WhatsApp",
    stat2label: "NATIVE",
    stat3value: "2026",
    stat3label: "DELIVERED",
    nextSlug: "c7-automation-os",
    nextTitle: "C7 Automation OS",
  },
  {
    slug: "c7-automation-os",
    category: "TECHNOLOGY",
    year: "2026",
    title: "C7 Automation OS",
    client: "Catalyst 7 (Commercial Product)",
    tag: "AI · SaaS",
    brief:
      "Small professional service businesses — physiotherapy practices, salons, consultancies — spend significant overhead on appointment handling, follow-up, and client communication. No affordable, fully autonomous solution existed that could be white-labelled and deployed across multiple verticals from a single codebase.",
    approach:
      "Built in TypeScript with an Express server, the platform runs a Claude-powered tool-calling loop for natural conversation. Google Calendar provides live availability data; Supabase handles production storage; n8n manages scheduled operations — reminders, reactivation sequences, waitlist workflows. Each client vertical receives its own configuration file. CLI onboarding, terminal chat test mode, and a Dockerfile are included.",
    outcome:
      "A containerised, commercially deployable AI automation platform with full documentation and a go-live process. Designed to generate recurring revenue from a single maintained codebase deployed across multiple clients. Built by Somila (lead) and Tshiamo.",
    stat1value: "TypeScript",
    stat1label: "STACK",
    stat2value: "Multi-tenant",
    stat2label: "ARCHITECTURE",
    stat3value: "2026",
    stat3label: "DELIVERED",
    nextSlug: "bolo-league-visual-identity",
    nextTitle: "BOLO League — Visual Identity",
  },
  {
    slug: "bolo-league-visual-identity",
    category: "PRODUCTION",
    year: "2026",
    title: "BOLO League — Visual Identity",
    client: "BOLO League",
    tag: "Brand · Identity",
    brief:
      "BOLO League required an identity capable of competing visually with international football aesthetics — communicating competitive credibility, Pretoria origin, and cultural pride simultaneously. Nothing from a template library would get there. Every decision had to be constructed from first principles.",
    approach:
      "C7 produced a full identity construction specification. The palette — Highveld Gold, Ridge Navy, Bib Orange, Flop-Out Red, Off-White — was built to work across kit, print, and digital simultaneously. The BL monogram uses a 10-12 degree forward lean, rounded terminals, and heavy linework derived from shield and badge tradition. A dual typeface system manages the full typographic register. An AI-assisted design prompt library was developed as a companion tool for ongoing content generation.",
    outcome:
      "A spec-grade identity system covering palette, monogram, typography, content grammar, and eight defined template categories — delivered as a production-ready foundation for all digital and physical output.",
    stat1value: "5",
    stat1label: "COLOUR PALETTE",
    stat2value: "8",
    stat2label: "TEMPLATE CATEGORIES",
    stat3value: "2026",
    stat3label: "DELIVERED",
    nextSlug: "phoenix-jewellers-maker-series",
    nextTitle: "Phoenix Jewellers — The Maker Series",
  },
  {
    slug: "phoenix-jewellers-maker-series",
    category: "PRODUCTION",
    year: "2026",
    title: "Phoenix Jewellers — The Maker Series",
    client: "Phoenix Jewellers",
    tag: "Photography · Editorial",
    brief:
      "Phoenix Jewellers had a distinctive handcrafted product but no visual identity communicating its craft origins. The brand existed as product photographs — pieces laid flat, no context, no human presence, no reason for the audience to care about where the work came from.",
    approach:
      "C7 reframed the photographic brief entirely: stop shooting the jewellery, start shooting the jeweller. A cinematic workshop shoot documented the maker's hands, tools, and working environment — building a narrative around craft, precision, and origin. The resulting series was packaged as a multi-image editorial carousel with intentional typographic framing and brand copy.",
    outcome:
      "A published multi-image carousel series establishing Phoenix Jewellers' brand visual language. Single-post engagement: 73 likes, with the content continuing to convert audience attention seven months post-publication. Established a repeatable content format for the client.",
    stat1value: "73",
    stat1label: "LIKES ON LAUNCH",
    stat2value: "7 Months",
    stat2label: "ON-FEED",
    stat3value: "2026",
    stat3label: "DELIVERED",
    nextSlug: "origin-pretoria",
    nextTitle: "ORIGIN — Pretoria",
  },
  {
    slug: "origin-pretoria",
    category: "PRODUCTION",
    year: "2026",
    title: "ORIGIN — Pretoria",
    client: "Multi-subject",
    tag: "Photography · Editorial",
    brief:
      "Personal brand photography in South Africa defaults to corporate headshots or phone-quality social posts. Neither option establishes the kind of visual authority that makes a person's profile work for them before they've said a word. There was no format in C7's market that treated young professionals from Pretoria with editorial seriousness.",
    approach:
      "C7 directed and shot ORIGIN across real Pretoria locations: parks, streetscapes, and outdoor environments that carry a distinct sense of place. Each volume was art-directed with intentional wardrobe, lighting context, and post-treatment. Typographic title cards, a consistent editorial layout, and sequential volume structure position the series as an ongoing C7 production.",
    outcome:
      "Two published editorial volumes: Vol. I (73+ likes, 14 weeks on-feed) and Vol. II (31-43 likes). The series created a repeatable, sellable C7 format — personal brand editorial shoots positioned as a premium photography service, priced at R1,500-R4,500 across tiers.",
    stat1value: "2",
    stat1label: "VOLUMES PUBLISHED",
    stat2value: "73+",
    stat2label: "LIKES VOL. I",
    stat3value: "2026",
    stat3label: "DELIVERED",
    nextSlug: "maneuneu-physiotherapy",
    nextTitle: "Maneuneu Physiotherapy",
  },
  {
    slug: "maneuneu-physiotherapy",
    category: "CONSULTING + PRODUCTION",
    year: "2025-2026",
    title: "Maneuneu Physiotherapy — Brand Content System",
    client: "Maneuneu Physiotherapy",
    tag: "Content · Strategy",
    brief:
      "Maneuneu was operating as a highly competent physiotherapy practice with a digital presence that reflected none of that competence. Healthcare businesses in South Africa rely on referrals and wait to be found. The practice had no mechanism for translating expertise into visibility, and visibility into booked appointments.",
    approach:
      "C7 built a content architecture around a single strategic positioning: most healthcare brands wait to be found. We built the system that makes that happen. Carousel-format educational and positioning content was developed to communicate expertise, build audience trust, and drive direct enquiry. Posts were designed to speak to specific patient concerns while simultaneously establishing Maneuneu as the authoritative answer.",
    outcome:
      "A recurring social content system delivering sustained brand visibility and patient enquiry. Client relationship ongoing. Confirmed cleared for public portfolio use.",
    stat1value: "Ongoing",
    stat1label: "ENGAGEMENT",
    stat2value: "Carousel",
    stat2label: "FORMAT",
    stat3value: "2025-26",
    stat3label: "STARTED",
    nextSlug: "krownbarber-the-krown",
    nextTitle: "KrownBarber x Lefa — The Krown",
  },
  {
    slug: "krownbarber-the-krown",
    category: "PRODUCTION",
    year: "2025",
    title: "KrownBarber x Lefa — The Krown",
    client: "KrownBarber",
    tag: "Brand Film",
    brief:
      "KrownBarber and barber Lefa had built a genuine reputation for skill, but their digital presence did not communicate the weight of what they'd built. Phone clips and basic social content were doing nothing to separate them from every other barbershop in the city.",
    approach:
      "C7 produced The Krown — a branded short-form film combining close-up craft footage with cinematic title treatment and an editorial aesthetic. Lefa was positioned not as a service provider but as a cultural practitioner: a craftsman with a point of view. The typographic treatment gave the film an identity of its own within the barbershop's overall brand.",
    outcome:
      "A published brand film establishing the visual language for KrownBarber's digital identity. Confirmed cleared for public portfolio use.",
    stat1value: "Short-form",
    stat1label: "FILM",
    stat2value: "Pretoria",
    stat2label: "LOCATION",
    stat3value: "2025",
    stat3label: "DELIVERED",
    nextSlug: "circuits-of-culture",
    nextTitle: "Circuits of Culture",
  },
  {
    slug: "circuits-of-culture",
    category: "PRODUCTION",
    year: "2025",
    title: "Circuits of Culture — A Lethuthando Nhlapho Concept",
    client: "Lethuthando Nhlapho",
    tag: "Music Video · Film",
    brief:
      "Lethuthando Nhlapho had a fully realised creative concept but no production infrastructure to execute it at the level the work demanded. Music video production in South Africa defaults to low-budget, generically shot content. The challenge was to build something that felt like a deliberate artistic statement.",
    approach:
      "C7 took on the production and post-production, treating the brief as a short film rather than a promotional clip. The approach prioritised visual concept integrity: art direction, cinematography, and editing decisions were made in service of the artist's original concept. The result carried C7 branding as co-producer.",
    outcome:
      "A published music video released under the artist's concept, with C7 credited in the production. The piece expanded C7's portfolio into the film and music video category — demonstrating that the studio's production capability extends beyond commercial briefs into cultural and artistic work.",
    stat1value: "Co-produced",
    stat1label: "C7 CREDITED",
    stat2value: "Music Video",
    stat2label: "CATEGORY",
    stat3value: "2025",
    stat3label: "DELIVERED",
    nextSlug: "nuru-house-next5",
    nextTitle: "Nuru House x Next 5",
  },
  {
    slug: "nuru-house-next5",
    category: "CONSULTING + PRODUCTION",
    year: "2025",
    title: "Nuru House x Next 5",
    client: "Nuru House / Next 5",
    tag: "Strategy · Production",
    brief:
      "Two client engagements — social growth strategy and content execution — running in parallel through C7's consulting and production offering. Both clients needed a mechanism to translate their brand into consistent, high-quality digital output.",
    approach:
      "Strategic positioning, content calendar design, and production execution across both clients. C7 managed the full cycle from creative direction to published content.",
    outcome:
      "Active client relationships delivering ongoing social content and growth strategy. Both engagements contributed to C7's track record in the consulting and production category.",
    stat1value: "2",
    stat1label: "ACTIVE CLIENTS",
    stat2value: "Strategy +",
    stat2label: "PRODUCTION",
    stat3value: "2025",
    stat3label: "STARTED",
    nextSlug: "parrots-wonderpark",
    nextTitle: "Parrots Wonderpark",
  },
  {
    slug: "parrots-wonderpark",
    category: "PRODUCTION",
    year: "2025",
    title: "Parrots Wonderpark",
    client: "Parrots Wonderpark",
    tag: "Event · Photography",
    brief:
      "Parrots Wonderpark needed professional event and venue photography to support their digital marketing and brand presence. Existing content was not communicating the scale and energy of the venue.",
    approach:
      "C7 handled full event coverage — capturing the venue atmosphere, event highlights, and brand moments across multiple formats for social and digital use. Shot on-location in Pretoria.",
    outcome:
      "A complete event photography set delivered and deployed across the client's digital channels. Established C7's capability in event and venue coverage.",
    stat1value: "Event",
    stat1label: "COVERAGE",
    stat2value: "Pretoria",
    stat2label: "LOCATION",
    stat3value: "2025",
    stat3label: "DELIVERED",
    nextSlug: "catalyst7-hq",
    nextTitle: "Catalyst 7 HQ",
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
            <p className="text-[#CC1414] text-xs uppercase tracking-widest mb-3">
              The Approach
            </p>
            <p className="text-[#999999] text-sm leading-relaxed">
              {project.approach}
            </p>
          </div>
          <div>
            <p className="text-[#CC1414] text-xs uppercase tracking-widest mb-3">
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
