import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Futuristic Hero */}
      <section className="relative min-h-[90vh] overflow-hidden bg-gradient-future bg-network bg-network-pattern">
        <div className="absolute inset-0 bg-gradient-glow" aria-hidden />
        {/* 3D atmospheric orbs */}
        <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-accent/15 blur-[100px]" aria-hidden />
        <div className="pointer-events-none absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-secondary/12 blur-[110px]" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-[90px]" aria-hidden />
        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:flex-row lg:justify-between lg:gap-12 lg:px-8 lg:text-left">
          {/* Left: Copy + CTAs */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Innovation,</span>
              <span className="mt-1 block bg-gradient-to-r from-accent-bright to-secondary bg-clip-text text-transparent">
                Secured
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300 sm:text-xl lg:mx-0">
              We deliver secure AI and digital transformation to keep your
              business connected. Advanced technology and privacy-first
              protocols so your data stays safe and your teams stay productive.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/contact"
                className="w-full rounded-lg bg-accent px-6 py-3.5 text-center font-medium text-white transition-all hover:bg-accent-bright focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-bg sm:w-auto"
              >
                Get in touch
              </Link>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfGXIjjRMwor5FODbWghFjf1Shzc0BGb0JItdXcwGUO1YbKdQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-lg border-2 border-white/80 bg-transparent px-6 py-3.5 text-center font-medium text-white transition-all hover:bg-white/10 sm:w-auto"
              >
                Book a demo
              </Link>
            </div>
          </div>
          {/* Right: Visual - abstract 3D / security vibe (CSS + icon) */}
          <div className="perspective-3d relative mt-12 flex flex-1 items-center justify-center lg:mt-0">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96" style={{ transform: "perspective(1000px) rotateY(-10deg) rotateX(5deg)" }}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 blur-3xl animate-glow-pulse" />
              <div className="absolute inset-0 flex items-center justify-center rounded-full border border-white/10 bg-dark-card/80 shadow-depth-3d backdrop-blur-sm">
                <svg
                  className="h-1/2 w-1/2 text-accent-bright/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
            </div>
            {/* Floating 3D orb accent */}
            <div
              className="orb-3d-float absolute -right-4 top-1/4 h-24 w-24 bg-gradient-to-br from-accent/50 to-secondary/40 md:h-32 md:w-32"
              aria-hidden
            />
          </div>
        </div>
      </section>

      {/* Trusted by - optional strip */}
      <section className="border-t border-white/10 bg-dark-card/50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-400">
            Trusted by teams who value security and scale
          </p>
        </div>
      </section>
    </>
  );
}
