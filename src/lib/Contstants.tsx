import { BsPersonCheck } from 'react-icons/bs';
import { HiOutlineSquare3Stack3D } from 'react-icons/hi2';
import { SiGithub, SiLinkedin, SiNextdotjs, SiTailwindcss, SiTypescript, SiReact } from 'react-icons/si';
import { TbFileCv } from 'react-icons/tb';

export const ROUTES = [
  {
    icon: <HiOutlineSquare3Stack3D className="group-hover:text-subtext transition-colors" />,
    name: 'Proyectos',
    href: '#proyectos',
  },
  {
    icon: <BsPersonCheck className="group-hover:text-subtext transition-colors" />,
    name: 'Sobre mí',
    href: '#sobre-mi',
  },
];

export const SOCIALS = [
  {
    icon: <SiGithub />,
    name: 'Github',
    href: 'https://github.com/kevoffdev',
  },
  {
    icon: <TbFileCv />,
    name: 'CV',
    href: 'https://drive.google.com/file/d/1M59w95ThGqWqW1RdlYnQ7KkrnU_CSGOM/view',
  },
  {
    icon: <SiLinkedin />,
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/kevin-suvia-cruz-528476293/',
  },
];

export const PROJECTS = [
  {
    img: '/images/uizard-news.png',
    title: 'Uizard Hacerknews',
    titleUrlPage: 'uizard-hackernews.vercel',
    urlPage: 'https://uizard-challenge-virid.vercel.app/',
    urlCode: 'https://github.com/kevoffdev/uizard-challenge',
    description:
      'Plataforma para leer articulos al azar relacionados con tecnología, startups, ciencia y programación. Creado desde cero con Next.js, React y Tailwind CSS.',
    tools: [
      { icon: <SiNextdotjs />, title: 'Next.js', url: 'https://nextjs.org/' },
      { icon: <SiReact />, title: 'React', url: 'https://es.react.dev/' },
      { icon: <SiTypescript />, title: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      { icon: <SiTailwindcss />, title: 'TailwindCSS', url: 'https://tailwindcss.com/' },
    ],
  },
];
