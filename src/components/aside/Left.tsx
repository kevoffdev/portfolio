'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMiniArrowUp } from 'react-icons/hi2';

import { ROUTES } from '@/lib/Contstants';

const Left = () => {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen flex-col items-end justify-between py-10 pr-8">
      <Link href="/" className="aspect-square overflow-hidden rounded-full border-2 border-secondary">
        <img src="/images/kevin.jpg" alt="Foto de Kevin" width="60" height="60" className="object-cover" />
      </Link>
      <div className="flex flex-col items-center justify-center gap-4">
        {ROUTES.map((route) => (
          <Link href={route.href} key={route.name} title={route.name}>
            <div
              style={{
                backgroundColor: pathname === route.href ? 'var(--foreground)' : '',
                color: pathname === route.href ? 'var(--secondary)' : '',
                border: pathname === route.href ? '1px var(--secondary) solid' : '',
              }}
              className="cursor-pointer rounded-xl border border-background p-4 text-2xl transition-colors hover:border-[1px] hover:border-secondary hover:bg-foreground hover:text-secondary"
            >
              {route.icon}
            </div>
          </Link>
        ))}
      </div>
      <div className="cursor-pointer rounded-xl p-4 text-2xl opacity-70 transition-colors hover:bg-foreground hover:text-secondary hover:opacity-100">
        <Link href="/" title="Home">
          <HiMiniArrowUp />
        </Link>
      </div>
    </aside>
  );
};

export default Left;
