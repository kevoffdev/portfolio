import React from 'react';

import { SOCIALS } from '@/lib/Contstants';

import PingIcon from '../header/PingIcon';

const Footer = () => {
  return (
    <footer className="m-auto flex max-w-[920px] flex-col justify-between px-4 py-5 leading-[4rem] text-gray-400 xl:max-w-full xl:border-t xl:border-primary xl:px-10">
      <div className="flex items-center justify-between gap-4 border-t border-primary py-5 xl:hidden">
        <div className="flex items-center gap-2 rounded-xl bg-primary px-2 py-2 lg:gap-4">
          <PingIcon />
          <span className="text-sm opacity-90 lg:text-lg">Disponible para trabajar</span>
        </div>
        <div className="flex gap-4">
          {SOCIALS.map((route) => (
            <a href={route.href} key={route.name} target="_blank" title={route.name}>
              <div className="cursor-pointer rounded-xl border border-primary bg-foreground p-2 text-2xl opacity-70 transition-colors hover:border-secondary hover:text-secondary hover:opacity-100">
                {route.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-between border-t border-primary xl:border-none">
        <span>© 2024, Kevoff</span>
        <div className="flex gap-4">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="mailto:kevinsuviacruz@gmail.com">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
