import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-between border-t border-primary px-10 leading-[4rem] text-gray-400">
      <span>© 2024, Kevoff</span>
      <div className="flex gap-4">
        <a href="#sobre-mi">Sobre mí</a>
        <Link href={'/'}>Contacto</Link>
      </div>
    </footer>
  );
};

export default Footer;
