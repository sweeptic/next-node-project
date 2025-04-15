'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function CustomImage({ poster, title }: { poster: string; title: string }) {
  const [error, setOnError] = useState(false);

  return (
    <Image
      src={!poster || error ? `/assets/unavailable.jpg` : poster}
      alt={title}
      width={200}
      height={300}
      priority={true}
      onError={() => setOnError(true)}
    />
  );
}
