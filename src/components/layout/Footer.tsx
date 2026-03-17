import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/team", label: "Our Team" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-bg text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company & Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-accent-bright">
              Apex Cognition LLP
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Secure AI, Digital Transformation & IT Solutions
            </p>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-lightblue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Careers & Fiverr */}
          <div>
            <h3 className="text-lg font-semibold text-accent-bright">Opportunities</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-gray-300 transition-colors hover:text-lightblue"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/fiverr"
                  className="text-sm text-gray-300 transition-colors hover:text-lightblue"
                >
                  Our Fiverr Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Community */}
          <div>
            <h3 className="text-lg font-semibold text-accent-bright">
              Community & Social
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/apexcognition/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-lightblue"
                >
                  <span className="h-4 w-4 rounded bg-secondary/50" aria-hidden />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/HESewWst3e970X0g0eXaRq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-lightblue"
                >
                  <span className="h-4 w-4 rounded bg-secondary/50" aria-hidden />
                  Join Our WhatsApp Community
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-accent-bright">Contact</h3>
            <p className="mt-4 text-sm text-gray-300">
              <a
                href="mailto:cognitionapex@gmail.com"
                className="transition-colors hover:text-lightblue"
              >
                cognitionapex@gmail.com
              </a>
            </p>
            <p className="mt-2">
              <Link
                href="/contact"
                className="text-sm text-gray-300 transition-colors hover:text-lightblue"
              >
                Contact form
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          Apex Cognition LLP © 2026. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
