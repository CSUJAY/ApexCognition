import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "cognitionapex@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    const appPassword = process.env.GMAIL_APP_PASSWORD;
    if (!appPassword) {
      console.error("GMAIL_APP_PASSWORD is not set.");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: RECIPIENT_EMAIL,
        pass: appPassword,
      },
    });

    await transporter.sendMail({
      from: `"Apex Cognition Contact" <${RECIPIENT_EMAIL}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `[Contact Form] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <pre>${escapeHtml(message)}</pre>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form send error:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
