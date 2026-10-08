import Link from "next/link"

export const metadata = {
  title: "AWS Solutions Partner | Catalyst 7",
  description:
    "C7 is an AWS Solutions Partner. We help South African businesses design, migrate and optimise cloud infrastructure on Amazon Web Services.",
}

export default function AWSPage() {
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
            AWS
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6 max-w-4xl">
            Cloud infrastructure
            <br />
            <span className="text-[#CC1414]">that scales with you.</span>
          </h1>
          <p className="text-[#999999] text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            C7 is an AWS Solutions Partner. We help South African businesses
            design, migrate and optimise cloud infrastructure on Amazon Web
            Services, with the technical depth and local context to get it right.
          </p>
          <div className="inline-flex items-center gap-3 border border-[#333333] px-5 py-3 bg-[#1A1A1A]">
            <div className="w-2 h-2 rounded-full bg-[#CC1414]" />
            <span className="text-sm text-[#EDE5D0] font-medium">
              AWS Solutions Partner
            </span>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-b border-[#333333]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-12">
            What we deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cloud architecture design",
                description:
                  "We design AWS infrastructure for new products and platforms: compute, storage, networking, security and cost structure planned before a single resource is provisioned.",
              },
              {
                title: "Migration to AWS",
                description:
                  "Moving an existing system, database or application onto AWS. We handle the technical migration, minimise downtime, and document the resulting architecture.",
              },
              {
                title: "Serverless and managed services",
                description:
                  "Lambda, S3, RDS, DynamoDB, API Gateway and the wider AWS managed services stack. We select and configure the right services for your workload and scale requirements.",
              },
              {
                title: "Cost optimisation",
                description:
                  "Audit of existing AWS spend, right-sizing of resources, reserved instance strategy, and elimination of idle infrastructure. Most businesses overspend on cloud by 30 to 40 percent.",
              },
              {
                title: "Security and compliance",
                description:
                  "IAM configuration, VPC design, encryption, access controls, audit logging and compliance posture built in from the start rather than retrofitted.",
              },
              {
                title: "Ongoing management and support",
                description:
                  "Monitoring, incident response, infrastructure updates and capacity planning on a retainer basis. Your cloud environment managed as a service.",
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

      {/* Why AWS, Why C7 */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-b border-[#333333]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
              Why AWS
            </h2>
            <p className="text-[#999999] leading-relaxed mb-4">
              AWS is the most mature cloud platform available, with
              infrastructure in the Cape Town region giving South African
              businesses low-latency hosting without routing data offshore
              unnecessarily.
            </p>
            <p className="text-[#999999] leading-relaxed mb-4">
              The managed services catalogue means most operational concerns:
              backups, patching, scaling, failover, can be handled by the
              platform rather than by your team.
            </p>
            <p className="text-[#999999] leading-relaxed">
              For businesses building products that need to scale, AWS provides
              the foundation that does not need to be replaced as you grow.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
              Why C7
            </h2>
            <div className="space-y-5">
              {[
                {
                  heading: "Partner-level access",
                  body: "As an AWS Solutions Partner, C7 has access to AWS technical resources, support channels and partner benefits that independent consultants do not.",
                },
                {
                  heading: "Local context",
                  body: "We understand South African compliance requirements, data residency considerations, and the infrastructure realities of building for this market.",
                },
                {
                  heading: "Full-stack capability",
                  body: "Cloud infrastructure is not useful in isolation. C7 combines AWS expertise with automation, AI and web development so your infrastructure actually connects to your operation.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l border-[#CC1414] pl-5">
                  <h3 className="font-semibold text-sm mb-1">
                    {item.heading}
                  </h3>
                  <p className="text-[#999999] text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-b border-[#333333]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-12">
            How we engage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                type: "Architecture review",
                description:
                  "A structured audit of your current cloud setup. We identify risks, inefficiencies and gaps, and deliver a written report with prioritised recommendations.",
                duration: "One-off engagement",
              },
              {
                type: "Project build",
                description:
                  "A defined scope build: new infrastructure, a migration, a specific system. Delivered against a timeline with full documentation and handoff.",
                duration: "Fixed scope",
              },
              {
                type: "Managed support",
                description:
                  "Ongoing infrastructure management, monitoring, incident response and optimisation on a monthly retainer. Your cloud environment as a managed service.",
                duration: "Monthly retainer",
              },
            ].map((model, i) => (
              <div
                key={i}
                className="bg-[#1A1A1A] border border-[#333333] p-6"
              >
                <span className="text-[#CC1414] text-xs font-medium tracking-widest uppercase mb-3 block">
                  {model.duration}
                </span>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-3">
                  {model.type}
                </h3>
                <p className="text-[#999999] text-sm leading-relaxed">
                  {model.description}
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
              Let us review your cloud setup.
            </h2>
            <p className="text-red-100 text-lg">
              Book an architecture review and we will show you exactly where you
              stand and what to do next.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="bg-white text-[#CC1414] px-8 py-4 font-semibold text-center hover:bg-[#EDE5D0] transition-colors"
            >
              Book a review
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
