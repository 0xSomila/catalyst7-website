import Link from "next/link"

export const metadata = {
  title: "Data Dashboards | Catalyst 7",
  description:
    "Custom data dashboards and reporting infrastructure for South African businesses. C7 connects your data sources and builds the visibility layer your team needs to make faster decisions.",
}

export default function DataDashboardsPage() {
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
            Data Dashboards
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6 max-w-4xl">
            Your numbers,
            <br />
            <span className="text-[#CC1414]">finally visible.</span>
          </h1>
          <p className="text-[#999999] text-lg md:text-xl max-w-2xl leading-relaxed">
            Most businesses are sitting on data they cannot read. C7 connects
            your sources, structures the logic, and builds dashboards that show
            you what is actually happening in your business in real time.
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-b border-[#333333]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-12">
            What we build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Revenue and sales dashboards",
                description:
                  "Pipeline value, conversion rates, revenue by channel, month-on-month growth. The numbers your leadership needs every Monday morning without anyone compiling a spreadsheet.",
              },
              {
                title: "Operations dashboards",
                description:
                  "Project status, capacity utilisation, delivery timelines and team workload across your entire operation. Built to surface problems before they become delays.",
              },
              {
                title: "Marketing performance dashboards",
                description:
                  "Spend versus return across platforms, content performance, audience data and campaign attribution. One view instead of five separate platform logins.",
              },
              {
                title: "Client reporting dashboards",
                description:
                  "Branded dashboards delivered to your clients showing campaign performance, project progress or service metrics. Automated and always current.",
              },
              {
                title: "Financial overview dashboards",
                description:
                  "Cash position, outstanding invoices, cost of service by client, margin by project. Connected to your accounting tool and updated automatically.",
              },
              {
                title: "Custom KPI dashboards",
                description:
                  "If your business tracks it, we can display it. We build around your specific metrics, not a template of what a business your size should care about.",
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

      {/* The Problem We Solve */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-b border-[#333333]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
              The problem is not the data. It is the access.
            </h2>
            <p className="text-[#999999] leading-relaxed mb-6">
              Your CRM has pipeline data. Your accounting tool has revenue data.
              Your project management tool has delivery data. Your ad platform
              has performance data. None of them talk to each other, and pulling
              it all together takes someone a full day every week.
            </p>
            <p className="text-[#999999] leading-relaxed">
              C7 connects those sources, builds the logic layer that makes sense
              of them together, and puts the output in a single view your team
              can check in under two minutes.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                before: "Weekly reports compiled manually",
                after: "Automated and always current",
              },
              {
                before: "Data scattered across 5 platforms",
                after: "One connected view",
              },
              {
                before: "Numbers that are always a week old",
                after: "Real-time or daily refresh",
              },
              {
                before: "Spreadsheets emailed to leadership",
                after: "Live dashboard, always accessible",
              },
              {
                before: "No visibility until month-end",
                after: "Issues surface when they happen",
              },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-2 border border-[#333333]">
                <div className="px-4 py-3 border-r border-[#333333] text-[#999999] text-sm">
                  {row.before}
                </div>
                <div className="px-4 py-3 text-sm text-[#EDE5D0] flex items-center gap-2">
                  <span className="text-[#CC1414] font-bold shrink-0">+</span>
                  {row.after}
                </div>
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
                title: "Data audit",
                description:
                  "We map every tool your business uses that holds data, identify what is available via API, and determine what needs a manual pipeline.",
              },
              {
                number: "02",
                title: "Metrics definition",
                description:
                  "We work with your leadership to define which numbers actually drive decisions. We build around those, not a generic set of business metrics.",
              },
              {
                number: "03",
                title: "Pipeline and logic build",
                description:
                  "We connect the data sources, build the transformation logic and set up the refresh cadence. Daily, hourly or real-time depending on your needs.",
              },
              {
                number: "04",
                title: "Dashboard and handoff",
                description:
                  "We build the visual layer, train your team on how to read it, and document everything so you are not dependent on us to maintain it.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="border border-[#333333] p-8 md:border-r-0 last:border-r border-b md:border-b-0"
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

      {/* CTA */}
      <section className="bg-[#CC1414] px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-3">
              Know your numbers by Monday.
            </h2>
            <p className="text-red-100 text-lg">
              Book a data audit and we will show you exactly what is possible
              with your current stack.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="bg-white text-[#CC1414] px-8 py-4 font-semibold text-center hover:bg-[#EDE5D0] transition-colors"
            >
              Book a data audit
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
