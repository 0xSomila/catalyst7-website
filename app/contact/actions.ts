"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string }

export async function sendContactForm(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim() ?? ""
  const email = formData.get("email")?.toString().trim() ?? ""
  const message = formData.get("message")?.toString().trim() ?? ""
  const type = formData.get("type")?.toString().trim() ?? ""

  if (!name || !email || !message || !type) {
    return { status: "error", message: "Please fill in all fields." }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." }
  }

  try {
    await resend.emails.send({
      // Swap to a catalyst7.co.za address once the domain is verified in Resend
      from: "Catalyst 7 Website <onboarding@resend.dev>",
      to: "catalyst7@catalyst7.co.za",
      replyTo: email,
      subject: `New enquiry: ${type} — ${name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Engagement type:</strong> ${type}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    return { status: "success" }
  } catch {
    return {
      status: "error",
      message: "Something went wrong. Please email us directly.",
    }
  }
}
