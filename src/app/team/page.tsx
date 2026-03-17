import TeamAvatar from "../../../public/images/TeamAvatar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team - Apex Cognition LLP",
  description:
    "Meet the leadership team at Apex Cognition LLP: Shreyas (CEO), Sujay (CTO), and Sebastian (CMO).",
};

const team = [
  {
    name: "Shreyas",
    role: "CEO",
    image: "/images/Shreyas.jpg",
    bio: "Leading vision and strategy for Apex Cognition.",
  },
  {
    name: "Sujay",
    role: "CTO",
    image: "/images/Sujay.jpg",
    bio: "Driving technology, product, and innovation.",
  },
  {
    name: "Sebastian",
    role: "CMO",
    image: "/images/Sebastian.jpg",
    bio: "Shaping brand, growth, and market presence.",
  },
];

export default function TeamPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-future bg-network">
      <div className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-accent/12 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-20 -left-20 h-80 w-80 rounded-full bg-secondary/10 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/8 blur-[90px]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Our Team
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-300">
          The people behind Apex Cognition—focused on secure AI and digital
          transformation.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="card-3d group p-8"
            >
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-2 border-accent/30">
                <TeamAvatar src={member.image} name={member.name} />
              </div>
              <h2 className="mt-6 text-center text-xl font-bold text-white">
                {member.name}
              </h2>
              <p className="text-center text-accent-bright font-semibold">
                {member.role}
              </p>
              <p className="mt-2 text-center text-sm text-gray-400">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
