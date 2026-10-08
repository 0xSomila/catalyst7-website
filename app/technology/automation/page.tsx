import Link from "next/link"

export const metadata = {
  title: "Automation | Catalyst 7",
  description:
    "Workflow automation and system integration built for South African businesses. C7 maps your processes and builds the infrastructure to run them without manual effort.",
}

export default function AutomationPage() {
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
            Automation
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6 max-w-4xl">
            Systems that run
            <br />
            <span className="text-[#CC1414]">without you.</span>
          </h1>
          <p className="text-[#999999] text-lg md:text-xl max-w-2xl leading-relaxed">
            Manual processes are a tax on your capacity. C7 maps your workflows,
            identifies the friction, and builds automation infrastructure that
            handles the repetitive work so your team can focus on the work that
            actually matters.
          </p>
        </div>
      </section>

      {/* What We Automate */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-b border-[#333333]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-12">
            What we automate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Lead and CRM flows",
                description:
                  "Enquiries captured, routed, logged and followed up without a human in the loop. From web form to CRM to calendar invite.",
              },
              {
                title: "Reporting and data pipelines",
                description:
                  "Pull data from multiple sources, format it, and deliver weekly reports, dashboards, or alerts automatically.",
              },
              {
                title: "Client onboarding sequences",
                description:
                  "Contracts sent, welcome packs delivered, intake forms collected and logged the moment a deal closes.",
              },
              {
                title: "Internal approvals and notifications",
                description:
                  "Slack pings, email alerts, and task creation triggered by form submissions, payment events, or status changes.",
              },
              {
                title: "Invoice and payment workflows",
                description:
                  "Quote generated, invoice sent, payment tracked, receipt issued. Built around your existing accounting stack.",
              },
              {
                title: "Cross-platform data sync",
                description:
                  "Contacts, orders, and records kept consistent across your tools without copy-paste or manual export.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-[#1A1A1A] border border-[#333333] p-6 ${
                  i === 0 ? "border-t-2 border-t-[#CC1414]" : ""
                }`}
              >
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

      {/* How It Works */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-b border-[#333333]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-12">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              {
                number: "01",
                title: "Process audit",
                description:
                  "We map every manual step in your current workflow: what triggers it, who touches it, and what it costs in time per week.",
              },
              {
                number: "02",
                title: "Automation design",
                description:
                  "We identify which steps can be removed, which can be automated, and which require a human decision. Then we design the flow.",
              },
              {
                number: "03",
                title: "Build and connect",
                description:
                  "We build the automation using the tools already in your stack where possible, adding infrastructure only where it is necessary.",
              },
              {
                number: "04",
                title: "Handoff and support",
                description:
                  "You get full documentation, a walkthrough, and a clear handoff. We stay available for the first 30 days to catch edge cases.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="border border-[#333333] p-8 md:border-r-0 last:border-r md:last:border-r border-b md:border-b-0"
              >
                <p className="text-[#CC1414] text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
                  {step.number}
                </p>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#999999] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools and Stack */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-b border-[#333333]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
              We work with your stack
            </h2>
            <p className="text-[#999999] leading-relaxed mb-6">
              C7 does not require you to switch tools. We build automations on
              top of what you already use: your CRM, your inbox, your project
              management tools, your payment processor.
            </p>
            <p className="text-[#999999] leading-relaxed">
              Where your existing tools lack an API or integration pathway, we
              bring in lightweight infrastructure that connects the gaps without
              disrupting how your team works.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              "CRM platforms",
              "Email and calendar",
              "Payment processors",
              "Project management",
              "Accounting tools",
              "E-commerce platforms",
              "Communication tools",
              "Custom APIs",
            ].map((tool, i) => (
              <div
                key={i}
                className="bg-[#1A1A1A] border border-[#333333] px-4 py-3 text-sm text-[#EDE5D0]"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#CC1414] px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-3">
              Ready to remove the manual work?
            </h2>
            <p className="text-red-100 text-lg">
              Book a process audit and we will show you exactly what can be
              automated.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="bg-white text-[#CC1414] px-8 py-4 font-semibold text-center hover:bg-[#EDE5D0] transition-colors"
            >
              Book a discovery call
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
