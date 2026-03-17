import Link from "next/link";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Apex Cognition LLP",
  description:
    "Discover Apex Cognition's innovative products including MeetingBuddy AI: Secure, Local AI for Meeting Automation.",
};

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-dark-bg">
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 h-72 w-72 rounded-full bg-secondary/10 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Our Innovative Products
        </h1>

        <section className="card-3d mt-12 p-8 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white">
                MeetingBuddy AI: Secure, Local AI for Meeting Automation
              </h2>
              <p className="mt-4 max-w-2xl text-gray-400">
                MeetingBuddy AI is our flagship product that keeps your meeting
                data on your infrastructure while delivering AI-powered
                summaries, voice control, and seamless integration—addressing
                both productivity loss and critical data privacy concerns for
                tech and product teams.
              </p>
              <div className="mt-6">
                <Button href="/products/meetingbuddy-ai" variant="primary">
                  Learn More about MeetingBuddy AI
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:flex-shrink-0">
              <div
                className="orb-3d h-36 w-36 bg-gradient-to-br from-accent/50 to-secondary/40 tilt-3d"
                aria-hidden
              />
            </div>
          </div>
        </section>

        <section className="card-3d mt-16 p-8">
          <h2 className="text-xl font-bold text-white">
            Upcoming Products & Future Innovations
          </h2>
          <p className="mt-4 text-gray-400">
            We are actively developing additional products to expand our secure
            AI and digital transformation offerings. Stay connected via our
            community channels for the latest updates.
          </p>
          <Link
            href="/community"
            className="mt-4 inline-block font-medium text-accent-bright hover:text-white"
          >
            Join our community →
          </Link>
        </section>
      </div>
    </div>
  );
}
