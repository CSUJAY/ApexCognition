"use client";

import { useState } from "react";

const CONTACT_EMAIL = "cognitionapex@gmail.com";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send. Please check your connection and try again.");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-dark-bg">
      {/* 3D-style background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-secondary/15 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Get in Touch with Apex Cognition LLP
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Have a question or want to discuss a project? Use the form or email us
          directly.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Contact form - glass card */}
          <section className="card-3d p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-white">Send a message</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-white placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-white placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-white placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-white placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Your message..."
                />
              </div>
              {status === "success" && (
                <p className="rounded-lg bg-green-500/20 px-3 py-2 text-sm text-green-400">
                  Thank you! Your message has been sent. We typically respond within 24–48 hours.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-lg bg-red-500/20 px-3 py-2 text-sm text-red-400">
                  {errorMessage}
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-lg bg-accent px-4 py-3 font-medium text-white transition-colors hover:bg-accent-bright focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </section>

          {/* Contact details + 3D visual */}
          <section className="flex flex-col gap-8">
            <div className="card-3d p-6">
              <h2 className="text-xl font-semibold text-white">
                Contact Information
              </h2>
              <p className="mt-4 text-gray-400">
                For general inquiries, use the form or reach out directly.
              </p>
              <div className="mt-6">
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-1 block font-medium text-accent-bright hover:text-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            {/* 3D-style decorative block */}
            <div className="relative flex flex-1 flex-col items-center justify-center gap-6 rounded-2xl border border-white/10 bg-dark-card/60 py-16 backdrop-blur-sm">
              <div
                className="orb-3d-float h-40 w-40 bg-gradient-to-br from-accent/40 to-secondary/30 tilt-3d"
                aria-hidden
              />
              <p className="text-center text-sm text-gray-500">
                We typically respond within 24–48 hours
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
