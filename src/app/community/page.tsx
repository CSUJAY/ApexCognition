import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community - Apex Cognition LLP",
  description:
    "Join the Apex Cognition community on WhatsApp and LinkedIn for product updates, insights, and direct engagement with our team.",
};

const WHATSAPP_URL = "https://chat.whatsapp.com/HESewWst3e970X0g0eXaRq";
const LINKEDIN_URL =
  "https://www.linkedin.com/company/apexcognition/?viewAsMember=true";

export default function CommunityPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-dark-bg">
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-accent/15 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-secondary/10 blur-[80px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[70px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Join the Apex Cognition Community
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-400">
          Stay connected for product updates, industry insights, and direct
          engagement with our team and fellow enthusiasts.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <section className="card-3d p-8">
            <div className="mb-6 flex justify-center">
              <div
                className="orb-3d-float h-16 w-16 bg-gradient-to-br from-green-500/40 to-emerald-600/30"
                aria-hidden
              />
            </div>
            <h2 className="text-xl font-bold text-white">
              MeetingBuddy AI & Apex Cognition Community on WhatsApp
            </h2>
            <p className="mt-4 text-gray-400">
              Stay updated on MeetingBuddy AI and product releases, industry
              insights, and engage directly with our team and other enthusiasts.
            </p>
            <div className="mt-6">
              <Button href={WHATSAPP_URL} external variant="primary">
                Join WhatsApp Group
              </Button>
            </div>
          </section>

          <section className="card-3d p-8">
            <div className="mb-6 flex justify-center">
              <div
                className="orb-3d-float h-16 w-16 bg-gradient-to-br from-blue-500/40 to-secondary/30"
                aria-hidden
              />
            </div>
            <h2 className="text-xl font-bold text-white">
              Follow Apex Cognition LLP on LinkedIn
            </h2>
            <p className="mt-4 text-gray-400">
              Connect with us on LinkedIn for company news, thought leadership
              articles, career opportunities, and other product updates.
            </p>
            <div className="mt-6">
              <Button href={LINKEDIN_URL} external variant="secondary">
                Follow on LinkedIn
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
