'use client';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineEnvelope, HiOutlineSquare3Stack3D } from 'react-icons/hi2';

import AboutCard from '@/components/about/AboutCard';
import MatrixEffect from '@/components/animate/MatrixEffect';
import ListProjects from '@/components/projects/ListProjects';

export default function Home() {
  const [showEffect, setShowEffect] = useState(false);

  const handleClick = () => {
    setShowEffect(!showEffect);
  };
  return (
    <>
      {showEffect && <MatrixEffect />}
      <main className="m-auto max-w-[920px] px-10 py-10">
        <article className="bg my-10 flex gap-12">
          <img
            src="/images/kevin.jpg"
            title="Kevin Cruz"
            alt="Foto de Kevin"
            width="220"
            height="180"
            className="object-cover"
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold tracking-wide sm:text-4xl">Kevin Cruz</h1>
              <h2 className="flex gap-1 text-lg font-bold text-gray-400">
                Sofware Developer
                <button onClick={() => handleClick()}>👨🏻‍💻</button>
              </h2>
            </div>
            <div className="text-lg">
              <p>
                <strong className="text-blue-300">Desarrollador Fullstack y futuro Analista en Sistemas</strong> de
                Buenos Aires, Argentina
                <strong className="font-normal opacity-80"> 🇦🇷. </strong>
                Me especializo en el desarrollo de aplicaciones web. ¡Gracias por visitar mi página! Espero que
                disfrutes explorando mi portfolio.
              </p>
            </div>
            <div className="flex justify-around gap-14">
              <Link
                href={'/contact'}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-primary bg-foreground p-2 text-lg transition-colors hover:border-secondary hover:text-secondary"
              >
                <HiOutlineEnvelope />
                <span className="">Contáctame</span>
              </Link>
              <Link
                href={'#proyectos'}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-primary bg-foreground p-2 text-lg transition-colors hover:border-secondary hover:text-secondary"
              >
                <HiOutlineSquare3Stack3D />
                <span className="">Proyectos</span>
              </Link>
            </div>
          </div>
        </article>
        <ListProjects />
        <AboutCard showEffect={showEffect} />
      </main>
    </>
  );
}
