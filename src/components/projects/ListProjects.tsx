import { HiOutlineSquare3Stack3D } from 'react-icons/hi2';
import { HiLink } from 'react-icons/hi2';
import { SiGithub } from 'react-icons/si';

import { PROJECTS } from '@/lib/Contstants';

const ListProjects = () => {
  return (
    <section className="mt-20 flex flex-col gap-6 border-t border-primary pt-10" id="proyectos">
      <h2 className="flex items-center gap-2 text-3xl font-bold leading-[3rem]">
        <HiOutlineSquare3Stack3D />
        Proyectos
      </h2>
      {PROJECTS.map((project, index) => {
        return (
          <article
            key={index}
            className="grid grid-cols-1 gap-8 rounded-lg border border-primary bg-foreground/50 p-6 xl:grid-cols-2"
          >
            <a href={project.urlPage} target="_blank" className="rounded-xl hover:opacity-90">
              <img src={project.img} className="h-60 w-full rounded-xl object-cover" alt={project.title} />
            </a>
            <div className="flex flex-col justify-between gap-2">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <footer className="flex gap-4 font-semibold">
                <a
                  href={project.urlPage}
                  target="_blank"
                  className="flex cursor-pointer items-center justify-center gap-1 opacity-70 hover:text-secondary hover:opacity-100"
                >
                  <HiLink />
                  {project.titleUrlPage}
                </a>
                <a
                  href={project.urlCode}
                  className="flex cursor-pointer items-center justify-center gap-1 opacity-70 hover:text-secondary hover:opacity-100"
                  target="_blank"
                >
                  <SiGithub />
                  Code
                </a>
              </footer>
              <p className="text-gray-400">{project.description}</p>
              <ul className="flex items-center gap-x-5 border-y border-primary py-2 text-sm">
                {project.tools.map((tool, index) => {
                  return (
                    <li title={tool.title} key={index} className="text-lg hover:text-secondary">
                      <a target="_blank" href={tool.url} className="flex items-center gap-2">
                        {tool.icon}
                        {/* <strong className="text-xs">{tool.title}</strong> */}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListProjects;

{
  /* <SiTailwindcss className="text-xl opacity-70" /> */
}
