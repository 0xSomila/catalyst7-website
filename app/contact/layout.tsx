import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Catalyst 7. Tell us what you are working on — we respond to all enquiries within 24 hours and come back with a scoped proposal or a clear next move.",
  openGraph: {
    title: "Contact | Catalyst 7",
    description:
      "Start a project with Catalyst 7. Tell us what you are working on — we respond to all enquiries within 24 hours and come back with a scoped proposal or a clear next move.",
    url: "https://catalyst7.co.za/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
