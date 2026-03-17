import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Apex Cognition LLP",
  description:
    "Get in touch with Apex Cognition LLP for inquiries, partnerships, or project discussions.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
