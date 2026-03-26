import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Apex Cognition LLP",
  description:
    "Learn about Apex Cognition LLP's mission, vision, and leadership team dedicated to innovative, secure, and human-centric IT solutions.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-dark-bg">
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="card-3d p-8 md:p-12">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            About Apex Cognition LLP
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-400">
            Apex Cognition LLP is committed to delivering innovative, secure, and
            human-centric IT solutions. Our mission is to empower organizations
            with locally-deployed AI and digital transformation services that
            respect data privacy and drive productivity. We combine deep technical
            expertise with a focus on scalability and user experience, from
            flagship products like MeetingBuddy AI to custom web, mobile, and
            cybersecurity solutions.
          </p>
        </section>

        <section className="card-3d mt-12 flex flex-col gap-8 p-8 md:flex-row md:items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white">Our Leadership</h2>
            <p className="mt-2 text-gray-400">
              Our leadership team brings together expertise in strategy, technology,
              and growth to deliver scalable, enterprise-ready solutions.
            </p>
            <p className="mt-4">
              <Link
                href="/team"
                className="inline-flex items-center font-medium text-accent-bright hover:text-white"
              >
                Meet our team: Shreyas (CEO) and Sujay (CTO) →
              </Link>
            </p>
          </div>
          <div className="flex justify-center md:flex-shrink-0">
            <div
              className="orb-3d h-40 w-40 bg-gradient-to-br from-accent/40 to-secondary/30 tilt-3d"
              aria-hidden
            />
          </div>
        </section>
      </div>
    </div>
  );
}
