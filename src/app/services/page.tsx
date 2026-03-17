import Link from "next/link";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Apex Cognition LLP",
  description:
    "Digital transformation, cybersecurity, web and mobile development, and AI consulting from Apex Cognition LLP.",
};

const serviceCategories = [
  {
    title: "Digital Transformation & AI Consulting",
    description:
      "We help organizations adopt AI and digital workflows with a focus on local deployment, privacy, and scalability—from strategy to implementation.",
  },
  {
    title: "Cybersecurity Software Development",
    description:
      "Custom security tools, secure architecture design, and development of solutions that protect your data and infrastructure.",
  },
  {
    title: "Mobile App Development (Android)",
    description:
      "Native and cross-platform Android applications built for performance, security, and user experience.",
  },
  {
    title: "Full-Stack Web Development & SaaS Platforms",
    description:
      "End-to-end web applications, dashboards, and SaaS products with modern stacks and scalable architecture.",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-dark-bg">
      <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-accent/15 blur-[100px]" />
      <div className="pointer-events-none absolute -left-20 bottom-40 h-72 w-72 rounded-full bg-secondary/10 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-accent/10 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Our Comprehensive IT & Digital Transformation Services
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-400">
          Apex Cognition LLP offers a full range of services to support your
          digital journey—from AI and cybersecurity to web and mobile development.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {serviceCategories.map((service) => (
            <article
              key={service.title}
              className="card-3d p-6"
            >
              <div className="flex gap-4">
                <div
                  className="orb-3d h-12 w-12 flex-shrink-0 rounded-full bg-accent/30"
                  aria-hidden
                />
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-gray-400">{service.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="card-3d relative mt-16 overflow-visible p-8">
          <div className="orb-3d-float pointer-events-none absolute -right-8 top-1/2 h-20 w-20 -translate-y-1/2 bg-gradient-to-br from-accent/40 to-secondary/30" aria-hidden />
          <h2 className="text-xl font-bold text-white">
            Smaller-Scope Web & Mobile App Services on Fiverr
          </h2>
          <p className="mt-4 text-gray-400">
            For agile, focused projects—custom components, small utility apps,
            UI/UX tasks, and quick turnarounds—we also offer web and mobile app
            development services on Fiverr.
          </p>
          <div className="mt-6">
            <Button href="/fiverr" variant="secondary">
              Explore Our Fiverr Services
            </Button>
          </div>
        </section>

        <section className="mt-16 text-center">
          <p className="text-gray-400">
            For larger, enterprise-level projects or custom solutions, we’d love
            to hear from you.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary">
              Contact Us for Custom Solutions
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
