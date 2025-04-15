'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ children, href }: { children: string; href: string }) {
  const path = usePathname();

  return (
    <Link href={href} className={path.startsWith(href) ? 'active' : undefined}>
      {children}
    </Link>
  );
}
