import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiverr Services - Web & Mobile App Development | Apex Cognition LLP",
  description:
    "Apex Cognition LLP offers agile web and mobile app development services on Fiverr—custom components, utility apps, and UI/UX tasks.",
};

const FIVERR_GIG_URL = "https://www.fiverr.com/s/yvPAdX5";

const serviceTypes = [
  "Custom component development for web and mobile",
  "Small utility apps and MVPs",
  "UI/UX design and implementation tasks",
  "Bug fixes and feature enhancements",
  "Integration and API development",
];

export default function FiverrPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-dark-bg">
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-secondary/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/10 blur-[90px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Specialized Web & Mobile App Services on Fiverr
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-400">
          Apex Cognition LLP offers agile, focused services for web and mobile
          application development through Fiverr. Whether you need a custom
          component, a small app, or UI/UX work, we deliver quality with clear
          communication and quick turnarounds.
        </p>

        <section className="card-3d mt-12 flex flex-col gap-8 p-8 md:flex-row md:items-center">
          <div className="relative h-64 flex-1 overflow-hidden rounded-xl border border-white/10 md:h-72">
            <Image
              src="https://placehold.co/600x400/1A1333/8B5CF6?text=Web+%26+Mobile"
              alt="Web and mobile app development"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white">
              Visit Our Fiverr Gig: Web & Mobile App Development
            </h2>
            <p className="mt-2 text-gray-400">
              Browse our gig, check reviews, and start a project directly on
              Fiverr for a streamlined experience.
            </p>
            <div className="mt-6">
              <Button
                href={FIVERR_GIG_URL}
                external
                variant="primary"
                className="text-base px-6 py-3"
              >
                Visit Our Fiverr Gig: Web & Mobile App Development
              </Button>
            </div>
          </div>
        </section>

        <section className="card-3d mt-16 p-8">
          <h2 className="text-xl font-bold text-white">
            What We Offer on Fiverr
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-gray-400">
            {serviceTypes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="card-3d mt-12 p-6">
          <p className="text-sm text-gray-400">
            <strong className="text-gray-300">For larger, enterprise-level projects</strong>, please
            refer to our main{" "}
            <Link href="/services" className="text-accent-bright hover:text-white">
              Services
            </Link>{" "}
            page or email us at{" "}
            <a
              href="mailto:cognitionapex@gmail.com"
              className="text-accent-bright hover:text-white"
            >
              cognitionapex@gmail.com
            </a>{" "}
            so we can scope and deliver a custom solution.
          </p>
        </section>
      </div>
    </div>
  );
}
