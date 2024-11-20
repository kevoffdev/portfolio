'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiMiniArrowUp, HiOutlineHome } from 'react-icons/hi2';

import { ROUTES } from '@/lib/Contstants';
const Left = () => {
  const [hash, setHash] = useState('');
  const params = useParams();

  useEffect(() => {
    const currentHash = window.location.hash;
    setHash(currentHash);
  }, [params]);
  return (
    <aside className="sticky top-0 flex h-screen flex-col items-end justify-between py-10 pr-8">
      <Link href="/" className="aspect-square overflow-hidden rounded-full border-2 border-secondary">
        <img
          src="/images/kevin.jpg"
          title="Kevin Cruz"
          alt="Foto de Kevin"
          width="60"
          height="60"
          className="object-cover"
        />
      </Link>
      <div className="flex flex-col items-center justify-center gap-4">
        <Link href={'/'} title={'Inicio'}>
          <div
            style={{
              backgroundColor: hash === '' ? 'var(--foreground)' : '',
              color: hash === '' ? 'var(--secondary)' : '',
              border: hash === '' ? '1px var(--secondary) solid' : '',
            }}
            className="cursor-pointer rounded-xl border border-background p-4 text-2xl transition-colors hover:border-[1px] hover:border-secondary hover:bg-foreground hover:text-secondary"
          >
            <HiOutlineHome className="group-hover:text-subtext transition-colors" />
          </div>
        </Link>
        {ROUTES.map((route) => (
          <Link href={route.href} key={route.name} title={route.name}>
            <div
              style={{
                backgroundColor: hash === route.href ? 'var(--foreground)' : '',
                color: hash === route.href ? 'var(--secondary)' : '',
                border: hash === route.href ? '1px var(--secondary) solid' : '',
              }}
              className="cursor-pointer rounded-xl border border-background p-4 text-2xl transition-colors hover:border-[1px] hover:border-secondary hover:bg-foreground hover:text-secondary"
            >
              {route.icon}
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="/"
        title="Home"
        className="cursor-pointer rounded-xl p-4 text-2xl opacity-70 transition-colors hover:bg-foreground hover:text-secondary hover:opacity-100"
      >
        <HiMiniArrowUp />
      </Link>
    </aside>
  );
};

export default Left;
