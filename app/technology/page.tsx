import Link from "next/link"

export default function Technology() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <p className="text-[#999999] text-xs uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-[#EDE5D0] transition-colors">
            HOME
          </Link>{" "}
          / TECHNOLOGY
        </p>
        <h1 className="text-[#EDE5D0] text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
          Technology built for how business actually works.
        </h1>
        <p className="text-[#999999] text-xl max-w-2xl mb-10">
          Custom automation, AI tools, data systems and web platforms. We build
          the infrastructure that reduces friction and compounds over time.
        </p>
        <Link
          href="/contact"
          className="bg-[#CC1414] text-white px-8 py-3 font-medium hover:bg-red-700 transition-colors inline-block"
        >
          Discuss a Build
        </Link>
      </section>

      {/* Solutions */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <p className="text-[#CC1414] text-xs uppercase tracking-widest mb-12">
          What We Build
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#1A1A1A] p-8 border-t-2 border-[#CC1414]">
            <p className="text-[#CC1414] text-sm font-medium mb-3">01</p>
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Automation
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              Workflow automation, CRM integrations and process elimination. We
              remove the repetitive so your team can focus on the complex.
            </p>
            <Link
              href="/technology/automation"
              className="text-[#CC1414] text-sm mt-6 block hover:underline"
            >
              Learn More &rarr;
            </Link>
          </div>

          <div className="bg-[#1A1A1A] p-8 border-t-2 border-[#333333]">
            <p className="text-[#999999] text-sm font-medium mb-3">02</p>
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              AI Assistants
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              Custom AI tools trained on your business context. From internal
              knowledge bases to client-facing chat.
            </p>
            <Link
              href="/technology/ai-assistants"
              className="text-[#EDE5D0] text-sm mt-6 block hover:text-[#CC1414] transition-colors"
            >
              Learn More &rarr;
            </Link>
          </div>

          <div className="bg-[#1A1A1A] p-8 border-t-2 border-[#333333]">
            <p className="text-[#999999] text-sm font-medium mb-3">03</p>
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Data Dashboards
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              Live business intelligence: revenue, operations, marketing and
              client performance in one view.
            </p>
            <Link
              href="/technology/data-dashboards"
              className="text-[#EDE5D0] text-sm mt-6 block hover:text-[#CC1414] transition-colors"
            >
              Learn More &rarr;
            </Link>
          </div>

          <div className="bg-[#1A1A1A] p-8 border-t-2 border-[#333333]">
            <p className="text-[#999999] text-sm font-medium mb-3">04</p>
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Web &amp; Digital
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              Marketing sites, web applications and digital platforms. Designed
              for performance, built for scale.
            </p>
            <Link
              href="/technology/web-digital"
              className="text-[#EDE5D0] text-sm mt-6 block hover:text-[#CC1414] transition-colors"
            >
              Learn More &rarr;
            </Link>
          </div>

          <div className="bg-[#1A1A1A] p-8 border-t-2 border-[#333333] md:col-span-2 lg:col-span-1">
            <p className="text-[#999999] text-sm font-medium mb-3">05</p>
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              AWS Infrastructure
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              Cloud architecture developed in partnership with AWS. Scalable,
              secure and built for production.
            </p>
            <Link
              href="/technology/aws"
              className="text-[#EDE5D0] text-sm mt-6 block hover:text-[#CC1414] transition-colors"
            >
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* AWS Partner Strip */}
      <section className="bg-[#1A1A1A] py-16 px-6 border-y border-[#333333]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-[#CC1414] text-xs uppercase tracking-widest mb-4">
              Built with AWS
            </p>
            <h2 className="text-[#EDE5D0] text-2xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              AWS Solutions Partner
            </h2>
            <p className="text-[#999999] text-base leading-relaxed mb-6">
              As an AWS Solutions Partner, C7 builds and deploys technology solutions on AWS infrastructure,
              giving clients enterprise-grade reliability and access to AWS funding opportunities.
            </p>
            <Link
              href="/technology/aws"
              className="text-[#EDE5D0] font-medium hover:text-[#CC1414] transition-colors"
            >
              Explore AWS Work &rarr;
            </Link>
          </div>
          <div className="flex-shrink-0">
            <img src="/aws-partner-badge.svg" alt="AWS Solutions Partner" className="w-48 h-auto" />
          </div>
        </div>
      </section>

      {/* How We Build */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <p className="text-[#999999] text-xs uppercase tracking-widest mb-12">
          The Process
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="text-[#CC1414] text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
              01
            </p>
            <h3 className="text-[#EDE5D0] font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
              Scope
            </h3>
            <p className="text-[#999999] text-sm">
              We define the problem, the constraints and what success looks
              like.
            </p>
          </div>
          <div className="flex-1">
            <p className="text-[#CC1414] text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
              02
            </p>
            <h3 className="text-[#EDE5D0] font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
              Architect
            </h3>
            <p className="text-[#999999] text-sm">
              We design the system before we build a single line of code.
            </p>
          </div>
          <div className="flex-1">
            <p className="text-[#CC1414] text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
              03
            </p>
            <h3 className="text-[#EDE5D0] font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
              Build
            </h3>
            <p className="text-[#999999] text-sm">
              Iterative development with weekly checkpoints. No black-box
              delivery.
            </p>
          </div>
          <div className="flex-1">
            <p className="text-[#CC1414] text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
              04
            </p>
            <h3 className="text-[#EDE5D0] font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
              Maintain
            </h3>
            <p className="text-[#999999] text-sm">
              We monitor, update and improve. Technology is not a one-time
              event.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#CC1414] py-20 px-6 text-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
          Have a system that needs building?
        </h2>
        <p className="text-white/80 text-lg mb-10">
          Tell us what you need. We&apos;ll scope the build.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#CC1414] font-semibold px-10 py-4 hover:bg-[#EDE5D0] transition-colors inline-block"
        >
          Start the Conversation
        </Link>
      </section>
    </>
  )
}
