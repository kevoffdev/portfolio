import { BsPersonCheck } from 'react-icons/bs';
const AboutCard = ({ showEffect }: { showEffect: boolean }) => {
  return (
    <section className="mt-20 border-t border-primary pt-10" id="sobre-mi">
      <h2 className="mb-2 flex items-center gap-3 text-3xl font-bold leading-[3rem]">
        <BsPersonCheck />
        Sobre mí
      </h2>
      <article className="flex flex-col gap-4 text-gray-300">
        <p>
          ¡Hola 👋! Mi nombre es Kevin Cruz y soy desarrollador de software de Argentina. Tengo un fuerte enfoque en el
          desarrollo frontend. Actualmente estoy cursando la tecnicatura de Analista de Sistemas, lo que complementa mi
          interes por la tecnología y el aprendizaje continuo.
        </p>
        <p>
          He desarrollado proyectos personales utilizando diferentes tecnologías tanto para el desarrollo frontend como
          backend. Algunas de estas tecnologías incluyen
          <strong className="font-normal text-blue-400">
            {' '}
            React, Angular, Next.JS, MySQL, Node.js, Express.js, CSS, TailwindCSS, entre otras.{' '}
          </strong>
          Si estás interesado, puedes encontrar más información en mi perfil de LinkedIn o echar un vistazo a mi Github
          para ver algunos de los proyectos que he desarrollado.
        </p>
        <p>Cuando no estoy codificando o estudiando, puedes encontrame disfrutando de un mate o viendo futbol.</p>
        <p>
          Gracias por tomarte el tiempo de leer mi perfil. Ah, y si has encontrado el secreto <strong>escondido</strong>
          , ¡no olvides decírmelo! ⛓️{' '}
          {showEffect && <span className="bg-[#38e738] py-1 text-black">(¡lo conseguiste!)</span>}
        </p>
      </article>
    </section>
  );
};

export default AboutCard;
