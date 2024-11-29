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
    <aside className="sticky top-0 z-50 m-auto flex w-full max-w-[920px] justify-center bg-black px-2 py-5 pt-10 xl:m-0 xl:h-screen xl:w-full xl:flex-col xl:items-end xl:justify-between xl:border-none xl:py-10 xl:pr-8">
      <Link href="/" className="hidden aspect-square overflow-hidden rounded-full border-2 border-secondary xl:block">
        <img
          src="/images/kevin.jpg"
          title="Kevin Cruz"
          alt="Foto de Kevin"
          width="60"
          height="60"
          className="object-cover"
        />
      </Link>
      <div className="flex w-full items-center gap-4 xl:w-auto xl:flex-col">
        <Link href={'/'} title={'Inicio'} className="w-full">
          <div
            style={{
              backgroundColor: hash === '' ? 'var(--foreground)' : '',
              color: hash === '' ? 'var(--secondary)' : '',
              border: hash === '' ? '1px var(--secondary) solid' : '',
            }}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-background border-primary bg-foreground p-2 text-2xl transition-colors hover:border-[1px] hover:border-secondary hover:bg-foreground hover:text-secondary xl:p-4"
          >
            <HiOutlineHome className="group-hover:text-subtext transition-colors" />
            <span className="text-base xl:hidden">Inicio</span>
          </div>
        </Link>
        {ROUTES.map((route) => (
          <Link className="w-full" href={route.href} key={route.name} title={route.name}>
            <div
              style={{
                backgroundColor: hash === route.href ? 'var(--foreground)' : '',
                color: hash === route.href ? 'var(--secondary)' : '',
                border: hash === route.href ? '1px var(--secondary) solid' : '',
              }}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-background border-primary bg-foreground p-2 text-2xl transition-colors hover:border-[1px] hover:border-secondary hover:bg-foreground hover:text-secondary xl:p-4"
            >
              {route.icon}
              <span className="text-base xl:hidden">{route.name}</span>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="/"
        title="Home"
        className="hidden cursor-pointer rounded-xl p-4 text-2xl opacity-70 transition-colors hover:bg-foreground hover:text-secondary hover:opacity-100 xl:block"
      >
        <HiMiniArrowUp />
      </Link>
    </aside>
  );
};

export default Left;
