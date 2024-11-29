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
      <main className="m-auto max-w-[920px] px-4 py-2 xl:px-10 xl:py-10">
        <article className="my-5 flex flex-col gap-6 xl:my-10 xl:flex-row">
          <div className="flex w-full items-center justify-start gap-3 sm:justify-center">
            <img
              src="/images/kevin.jpg"
              title="Kevin Cruz"
              alt="Foto de Kevin"
              className="h-[130px] w-[130px] rounded-xl object-cover xl:h-[250px] xl:w-[230px] xl:rounded-none"
            />
            <div className="flex flex-col xl:hidden">
              <h1 className="text-2xl font-bold tracking-wide sm:text-4xl xl:text-4xl">Kevin Cruz</h1>
              <h2 className="flex gap-1 text-sm font-bold text-gray-400 sm:text-base xl:text-lg">
                Sofware Developer
                <button onClick={() => handleClick()}>👨🏻‍💻</button>
              </h2>
            </div>
          </div>
          <div className="mt-4 flex flex-col justify-center gap-3 xl:mt-0 xl:justify-start">
            <div className="hidden flex-col xl:flex">
              <h1 className="text-2xl font-bold tracking-wide sm:text-4xl xl:text-4xl">Kevin Cruz</h1>
              <h2 className="gap-1 text-lg font-bold text-gray-400 xl:flex">
                Sofware Developer
                <button onClick={() => handleClick()}>👨🏻‍💻</button>
              </h2>
            </div>
            <div className="text-base xl:text-lg">
              <p>
                <strong className="text-blue-300">Desarrollador Fullstack y futuro Analista en Sistemas</strong> de
                Buenos Aires, Argentina
                <strong className="font-normal opacity-80"> 🇦🇷. </strong>
                Me especializo en el desarrollo de aplicaciones web. ¡Gracias por visitar mi página! Espero que
                disfrutes explorando mi portfolio.
              </p>
            </div>
            <div className="flex flex-col gap-4 xl:flex-row xl:gap-14">
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
