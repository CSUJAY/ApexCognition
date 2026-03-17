import Image from "next/image";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MeetingBuddy AI - Secure, Local AI for Meeting Automation | Apex Cognition LLP",
  description:
    "MeetingBuddy AI keeps your meeting data on your infrastructure with AI-powered summaries, voice control, and seamless integration. Enterprise-ready, privacy-first meeting automation.",
};

const WAITLIST_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfGXIjjRMwor5FODbWghFjf1Shzc0BGb0JItdXcwGUO1YbKdQ/viewform";

const solutionPoints = [
  {
    title: "Local Deployment for Privacy (USP)",
    description:
      "All data remains on your servers; no data is sent to external cloud AI, ensuring compliance and data sovereignty.",
  },
  {
    title: "AI-Powered Structured Summaries",
    description:
      "Automated generation of meeting notes, action items, and decisions using local LLMs.",
  },
  {
    title: "Voice-Controlled Work OS",
    description:
      "Natural language and voice commands to control workflows and retrieve information hands-free.",
  },
  {
    title: "Contextual Memory & Retrieval",
    description:
      "AI maintains context across sessions for continuity and smarter assistance.",
  },
  {
    title: "Seamless Integration",
    description:
      "Works with your existing meeting and productivity tools without vendor lock-in.",
  },
];

export default function MeetingBuddyAIProductPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-dark-bg">
      <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-secondary/10 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white md:text-4xl">
              MeetingBuddy AI: Secure, Local AI for Meeting Automation
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              MeetingBuddy AI addresses productivity loss and critical data
              privacy risks by delivering AI-powered meeting automation that
              runs entirely on your infrastructure. Built for tech and product
              teams who cannot compromise on data sovereignty.
            </p>
          </div>
          <div className="relative h-64 w-full flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 lg:h-80 lg:w-96">
            <Image
              src="https://placehold.co/800x500/1A1333/8B5CF6?text=MeetingBuddy+AI"
              alt="MeetingBuddy AI - Secure Local AI"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 384px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
          </div>
        </section>

        <section className="card-3d mt-16 p-8">
          <h2 className="text-2xl font-bold text-white">
            Problem Solved: Productivity Loss & Critical Data Privacy
          </h2>
          <p className="mt-4 text-gray-400">
            Teams waste significant time in meetings with inefficient follow-up
            and unclear action items. Sending meeting recordings and notes to
            cloud-based AI services creates critical data privacy and
            compliance risks—especially for organizations that require data to
            stay on-premises (USP setup). MeetingBuddy AI solves both problems
            by running entirely on your infrastructure while delivering
            powerful meeting automation.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white">
            MeetingBuddy AI&apos;s 5-Point Secure Solution
          </h2>
          <ul className="mt-8 space-y-6">
            {solutionPoints.map((item, i) => (
              <li
                key={item.title}
                className="card-glass flex gap-4 p-6 transition-all hover:border-accent/20"
              >
                <div
                  className="orb-3d h-10 w-10 flex-shrink-0 rounded-full bg-accent/40 text-center text-sm font-bold leading-10 text-white"
                  aria-hidden
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="card-3d mt-16 p-8">
          <h2 className="text-2xl font-bold text-white">Target Market</h2>
          <p className="mt-4 text-gray-400">
            MeetingBuddy AI is designed for tech and product-led
            organizations—from mid-size companies to enterprises—that need
            meeting automation without exposing sensitive data to the cloud.
            Key buyers include CTOs, Product Leaders, and IT/InfoSec teams who
            prioritize data privacy and local deployment.
          </p>
        </section>

        <section className="card-3d mt-16 p-8">
          <h2 className="text-2xl font-bold text-white">
            We Own the Secure Enterprise Segment
          </h2>
          <p className="mt-4 text-gray-400">
            While many meeting AI tools rely on cloud APIs, MeetingBuddy AI is
            built from the ground up for local deployment. This positions us
            uniquely in the secure enterprise segment where data cannot leave
            the organization. We focus on owning this niche with a
            privacy-first, scalable product.
          </p>
        </section>

        <section className="card-3d mt-16 p-8">
          <h2 className="text-2xl font-bold text-white">
            PoC Status & Core Technology Stack
          </h2>
          <div className="mt-6 space-y-4 text-gray-400">
            <div>
              <h3 className="font-semibold text-white">PoC Outcomes</h3>
              <p className="mt-1">
                Our proof of concept has validated local LLM deployment for
                meeting summarization and voice-controlled workflows, with
                positive outcomes on accuracy and latency within an on-premises
                setup.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Core AI Engine</h3>
              <p className="mt-1">
                Built with Ollama, Llama 3, and Node.js for robust local
                inference and API orchestration.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">
                Local Deployment Stack (USP)
              </h3>
              <p className="mt-1">
                MongoDB and our stack are designed for on-premises deployment
                so that all data remains within your environment.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-2xl border-2 border-accent/40 bg-accent/20 py-12 text-center">
          <h2 className="text-2xl font-bold text-white">
            Get an Enterprise Demo or Join the Waitlist
          </h2>
          <p className="mt-4 text-gray-300">
            Take the next step with MeetingBuddy AI. Request a demo or join
            our waitlist for early access and updates.
          </p>
          <div className="mt-8">
            <Button
              href={WAITLIST_URL}
              external
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Get an Enterprise Demo / Join MeetingBuddy AI Waitlist
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
