import { HiOutlineEnvelope, HiOutlineHome, HiOutlineSquare3Stack3D } from 'react-icons/hi2';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

export const ROUTES = [
  {
    icon: <HiOutlineHome className="group-hover:text-subtext transition-colors" />,
    name: 'Home',
    href: '/',
  },
  {
    icon: <HiOutlineSquare3Stack3D className="group-hover:text-subtext transition-colors" />,
    name: 'Projects',
    href: '/projects',
  },
  {
    icon: <HiOutlineEnvelope className="transition-colors" />,
    name: 'contact',
    href: '/contact',
  },
];

export const SOCIALS = [
  {
    icon: <SiGithub />,
    name: 'Github',
    href: 'https://github.com/kevoffdev',
  },
  {
    icon: <SiX />,
    name: 'X',
    href: 'https://x.com/Kevoffdev',
  },
  {
    icon: <SiLinkedin />,
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/kevin-suvia-cruz-528476293/',
  },
];
