"use client";

import Image from "next/image";
import { useState } from "react";

type Props = { src: string; name: string };

export default function TeamAvatar({ src, name }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex h-full w-full items-center justify-center rounded-full border-2 border-accent/30 bg-gradient-to-br from-accent/40 to-secondary/30 text-4xl font-bold text-white"
        aria-hidden
      >
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      fill
      className="object-cover"
      sizes="160px"
      onError={() => setFailed(true)}
    />
  );
}
