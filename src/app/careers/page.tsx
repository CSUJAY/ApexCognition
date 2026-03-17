import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Join Apex Cognition LLP",
  description:
    "Join the innovative team at Apex Cognition LLP. Apply through our talent acquisition form.",
};

const TALENT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfe432qkkT0D1RDNh0A_3QzRMRI1jzj0fGoEVjT1uef4ogjmA/viewform?usp=dialog";

export default function CareersPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-dark-bg">
      <div className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/3 left-0 h-80 w-80 rounded-full bg-secondary/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Join Our Innovative Team at Apex Cognition LLP
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-400">
          We are building the future of secure, local AI and digital
          transformation. If you are passionate about AI/ML, software
          engineering, cybersecurity, or product development—and want to work in
          an environment that values privacy, innovation, and scalability—we
          would love to hear from you.
        </p>

        <section className="card-3d mt-12 p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white">
                Apply Now: Talent Acquisition Form
              </h2>
              <p className="mt-4 text-gray-400">
                Apex Cognition looks for candidates who combine technical depth
                with curiosity, collaboration, and a commitment to building
                products that respect user privacy and enterprise requirements.
                Whether you are interested in AI/ML, full-stack development,
                DevOps, or business roles, use the form below to introduce
                yourself and your experience.
              </p>
              <div className="mt-6">
                <Button
                  href={TALENT_FORM_URL}
                  external
                  variant="primary"
                  className="text-base px-6 py-3"
                >
                  Open Talent Acquisition Form
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:flex-shrink-0">
              <div
                className="orb-3d h-28 w-28 bg-gradient-to-br from-accent/40 to-secondary/30 tilt-3d"
                aria-hidden
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
