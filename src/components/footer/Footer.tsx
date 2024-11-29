import Link from 'next/link';
import React from 'react';

import { SOCIALS } from '@/lib/Contstants';

const Footer = () => {
  return (
    <footer className="m-auto flex max-w-[920px] flex-col justify-between px-4 py-5 leading-[4rem] text-gray-400 xl:max-w-full xl:border-t xl:border-primary xl:px-10">
      <div className="flex items-center justify-center gap-4 border-t border-primary py-5 xl:hidden">
        {SOCIALS.map((route) => (
          <a href={route.href} key={route.name} target="_blank" title={route.name}>
            <div className="cursor-pointer rounded-xl border border-primary bg-foreground p-2 text-2xl opacity-70 transition-colors hover:border-secondary hover:text-secondary hover:opacity-100">
              {route.icon}
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-between border-t border-primary xl:border-none">
        <span>© 2024, Kevoff</span>
        <div className="flex gap-4">
          <a href="#sobre-mi">Sobre mí</a>
          <Link href={'/'}>Contacto</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
