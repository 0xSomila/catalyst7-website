import Link from "next/link"

export const metadata = {
  title: "AI Assistants | Catalyst 7",
  description:
    "Custom AI assistants built for South African businesses. C7 designs, trains and deploys AI tools that handle real operational tasks inside your existing workflows.",
}

export default function AIAssistantsPage() {
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
            AI Assistants
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6 max-w-4xl">
            Intelligence built
            <br />
            <span className="text-[#CC1414]">for your operation.</span>
          </h1>
          <p className="text-[#999999] text-lg md:text-xl max-w-2xl leading-relaxed">
            Generic AI tools are built for everyone. C7 builds AI assistants
            configured for your business: your tone, your processes, your
            knowledge base. Tools your team will actually use because they
            actually work.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-b border-[#333333]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
            What we build
          </h2>
          <p className="text-[#999999] mb-12 max-w-2xl">
            Every assistant is purpose-built. We do not deploy off-the-shelf
            chatbots. We configure AI tools that understand your context and
            handle specific operational tasks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Client-facing intake assistants",
                description:
                  "Qualify leads, collect brief information, answer common questions and route enquiries before a human ever gets involved. Available 24 hours, consistent every time.",
                tag: "Customer-facing",
              },
              {
                title: "Internal knowledge assistants",
                description:
                  "Give your team instant access to SOPs, pricing guides, policy documents and institutional knowledge. Trained on your actual documentation, not generic content.",
                tag: "Internal ops",
              },
              {
                title: "Sales and proposal assistants",
                description:
                  "First-draft proposals, quote calculations and outreach copy generated in your brand voice against a brief. Cut proposal turnaround from days to hours.",
                tag: "Sales",
              },
              {
                title: "Content and copy assistants",
                description:
                  "Social captions, email sequences, product descriptions and campaign copy drafted in your voice. Trained on your existing content and brand guidelines.",
                tag: "Content",
              },
              {
                title: "Operations and reporting assistants",
                description:
                  "Summarise meeting notes, extract action items, format data, draft weekly reports. Repetitive cognitive work handled at scale.",
                tag: "Operations",
              },
              {
                title: "Custom vertical tools",
                description:
                  "Domain-specific assistants for legal, finance, healthcare, education and logistics. Built to handle the specific language and requirements of your industry.",
                tag: "Specialist",
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

      {/* How We Build */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-b border-[#333333]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-12">
            How we build it
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              {
                number: "01",
                title: "Scope and use case",
                description:
                  "We identify the one or two tasks where an AI assistant will have the most immediate impact. We do not try to solve everything at once.",
              },
              {
                number: "02",
                title: "Knowledge and context",
                description:
                  "We collect your documents, tone references, SOPs and data. The assistant is trained on what it needs to actually be useful in your context.",
              },
              {
                number: "03",
                title: "Build and test",
                description:
                  "We configure, prompt-engineer and stress-test the assistant against real scenarios before it touches your operation or your clients.",
              },
              {
                number: "04",
                title: "Deploy and iterate",
                description:
                  "We deploy into your existing environment and monitor performance. Assistants improve over time as edge cases surface and get resolved.",
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

      {/* What Makes Ours Different */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-b border-[#333333]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
              Not a chatbot. A configured tool.
            </h2>
            <p className="text-[#999999] leading-relaxed">
              The difference between a generic AI tool and a C7-built assistant
              is configuration depth. We spend the time upfront so the output is
              reliable enough to trust.
            </p>
          </div>
          {[
            {
              heading: "Trained on your content",
              body: "Your documents, your tone, your pricing, your process. The assistant knows your business, not a generalised version of your industry.",
            },
            {
              heading: "Built for adoption",
              body: "We design the interface and the workflow integration so your team actually uses it. An AI tool that sits unused is not a solution.",
            },
          ].map((item, i) => (
            <div key={i} className="border-l border-[#CC1414] pl-6">
              <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-3">
                {item.heading}
              </h3>
              <p className="text-[#999999] text-sm leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#CC1414] px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-3">
              Let us scope your assistant.
            </h2>
            <p className="text-red-100 text-lg">
              One conversation to identify where AI can have immediate impact on
              your operation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="bg-white text-[#CC1414] px-8 py-4 font-semibold text-center hover:bg-[#EDE5D0] transition-colors"
            >
              Start the conversation
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
