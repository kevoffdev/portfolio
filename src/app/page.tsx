import Link from 'next/link';
import { HiOutlineEnvelope, HiOutlineSquare3Stack3D } from 'react-icons/hi2';

export default function Home() {
  return (
    <main className="m-auto max-w-4xl px-10 py-10">
      <article className="my-10 flex gap-12">
        <img src="/images/kevin.jpg" alt="Foto de Kevin" width="200" height="200" className="object-cover" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-secondary">Hola soy</span>
            <h1 className="text-3xl font-bold leading-[2rem]">Kevin Cruz</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam expedita magni nemo esse ad aperiam
            cupiditate soluta fugiat praesentium recusandae voluptatibus odit rerum earum ab facilis quia,
            exercitationem est quibusdam!
          </p>
          <div className="flex justify-around gap-14">
            <Link
              href={'/project'}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-primary bg-foreground p-2 text-lg transition-colors hover:border-secondary hover:text-secondary"
            >
              <HiOutlineSquare3Stack3D />
              <span className="uppercase">Mis proyectos</span>
            </Link>
            <Link
              href={'/contact'}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-primary bg-foreground p-2 text-lg transition-colors hover:border-secondary hover:text-secondary"
            >
              <HiOutlineEnvelope />
              <span className="uppercase">Contactame</span>
            </Link>
          </div>
        </div>
      </article>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni sit, consectetur sint suscipit velit excepturi
        illo tempore, aperiam laudantium possimus commodi repellat deserunt, eligendi temporibus. Nostrum sapiente illo
        necessitatibus cupiditate?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni sit, consectetur sint suscipit velit excepturi
        illo tempore, aperiam laudantium possimus commodi repellat deserunt, eligendi temporibus. Nostrum sapiente illo
        necessitatibus cupiditate?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni sit, consectetur sint suscipit velit excepturi
        illo tempore, aperiam laudantium possimus commodi repellat deserunt, eligendi temporibus. Nostrum sapiente illo
        necessitatibus cupiditate?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni sit, consectetur sint suscipit velit excepturi
        illo tempore, aperiam laudantium possimus commodi repellat deserunt, eligendi temporibus. Nostrum sapiente illo
        necessitatibus cupiditate?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni sit, consectetur sint suscipit velit excepturi
        illo tempore, aperiam laudantium possimus commodi repellat deserunt, eligendi temporibus. Nostrum sapiente illo
        necessitatibus cupiditate?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni sit, consectetur sint suscipit velit excepturi
        illo tempore, aperiam laudantium possimus commodi repellat deserunt, eligendi temporibus. Nostrum sapiente illo
        necessitatibus cupiditate?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni sit, consectetur sint suscipit velit excepturi
        illo tempore, aperiam laudantium possimus commodi repellat deserunt, eligendi temporibus. Nostrum sapiente illo
        necessitatibus cupiditate?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni sit, consectetur sint suscipit velit excepturi
        illo tempore, aperiam laudantium possimus commodi repellat deserunt, eligendi temporibus. Nostrum sapiente illo
        necessitatibus cupiditate?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni sit, consectetur sint suscipit velit excepturi
        illo tempore, aperiam laudantium possimus commodi repellat deserunt, eligendi temporibus. Nostrum sapiente illo
        necessitatibus cupiditate?
      </p>
    </main>
  );
}
