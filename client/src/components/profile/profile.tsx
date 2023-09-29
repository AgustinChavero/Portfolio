"use client";
export default function Profile() {
  return (
    <article className="">
      <h3 className="text-center font-bold text-6xl py-9">Sobre mi</h3>
      <div className="flex items-center justify-center">
        <article className="bg-custom_skyblue rounded-xl p-5 text-black text-lg space-y-3 max-w-5xl">
          <p>Ante todo, gracias por estar aca</p>
          <p>
            Soy un Backend Developer de Mendoza-Argentina, con casi un año de experiencia
            en desarrollo web/software. Me encuentro siempre esta en la busqueda de nuevos
            desafios u oportunidades que me hagan crecer tanto personal como
            profesionalmente.
          </p>
          <p>
            Puedo llevar adelante proyectos garantizando un solido proceso de desarrollo
            en el que se le preparara para ser escalable, seguro y amigable para el
            usuario. Garantizando de esta manera su exito desde el surgimiento hasta el
            estrellato.
          </p>
          <h6>Gracias a mis estudios y experiencias he logrado destacar en:</h6>
          <ul className="grid grid-cols-2 gap-4">
            <li className="mx-auto">
              <article className="bg-gray-700 relative text-white border-2 border-white flex space-x-14 rounded-lg max-w-sm p-3">
                <img
                  src="/icons/email.svg"
                  alt="Capacity"
                  className="w-12 absolute top-3 left-2"
                />
                <div className="">
                  <h3 className="font-extrabold text-2xl py-2">Backend</h3>
                  <p className="">
                    Desarrollo de API RESTful con habilidades en distintas tecnologías,
                    capaz de llevar adelante trabajos en NodeJS y JavaScript, NestJS y
                    TypeScript, Python y Django.
                  </p>
                </div>
              </article>
            </li>
            <li className="mx-auto">
              <article className="bg-gray-700 relative text-white border-2 border-white flex space-x-14 rounded-lg max-w-sm p-3">
                <img
                  src="/icons/email.svg"
                  alt="Capacity"
                  className="w-12 absolute top-3 left-2"
                />
                <div className="">
                  <h3 className="font-extrabold text-2xl py-2">Bases de datos</h3>
                  <p className="">
                    Despliegue y mantenimiento de Bases de Datos escalables, seguras y
                    solidas, tanto SQL como NoSQL a través de MySQL, PostgreSQL y SQLite.
                  </p>
                </div>
              </article>
            </li>
            <li className="mx-auto">
              <article className="bg-gray-700 relative text-white border-2 border-white flex space-x-14 rounded-lg max-w-sm p-3">
                <img
                  src="/icons/email.svg"
                  alt="Capacity"
                  className="w-12 absolute top-3 left-2"
                />
                <div className="">
                  <h3 className="font-extrabold text-2xl py-2">Conocimientos</h3>
                  <p className="">
                    Actualizado en las últimas tecnologías y tendencias en el campo del
                    Desarrollo Web y Aplicaciones, lo que me permite ofrecer soluciones
                    innovadoras y eficientes. Motivado para aprender y mejorar
                    constantemente mis habilidades o conocimientos.
                  </p>
                </div>
              </article>
            </li>
            <li className="mx-auto">
              <article className="bg-gray-700 relative text-white border-2 border-white flex space-x-14 rounded-lg max-w-sm p-3">
                <img
                  src="/icons/email.svg"
                  alt="Capacity"
                  className="w-12 absolute top-3 left-2"
                />
                <div className="">
                  <h3 className="font-extrabold text-2xl py-2">Metodologias</h3>
                  <p className="">
                    Orientado a las metodologías agiles de trabajo a través de plataformas
                    como Jira y Trello, permitiendome trabajar de forma solida en equipo,
                    presentar mis ideas de forma clara y estar preparado para cualquier
                    desafio.
                  </p>
                </div>
              </article>
            </li>
            <li className="mx-auto">
              <article className="bg-gray-700 relative text-white border-2 border-white flex space-x-14 rounded-lg max-w-sm p-3">
                <img
                  src="/icons/email.svg"
                  alt="Capacity"
                  className="w-12 absolute top-3 left-2"
                />
                <div className="">
                  <h3 className="font-extrabold text-2xl py-2">Reclutamiento</h3>
                  <p className="">
                    Si la situacion lo requiere, conozco las personas necesarias para
                    crear un equipo de desarrollo altamente capacitado para poder llevar
                    adelante cualquier proyecto.
                  </p>
                </div>
              </article>
            </li>
            <li className="mx-auto">
              <article className="bg-gray-700 relative text-white border-2 border-white flex space-x-14 rounded-lg max-w-sm p-3">
                <img
                  src="/icons/email.svg"
                  alt="Capacity"
                  className="w-12 absolute top-3 left-2"
                />
                <div className="">
                  <h3 className="font-extrabold text-2xl py-2">Mentalidad</h3>
                  <p className="">
                    Siempre abierto a escuchar recomendaciones, a mejorar con cada paso,
                    preparado para afrontar nuevos retos altamente motivado buscando
                    resolverlos con seriedad y compromiso
                  </p>
                </div>
              </article>
            </li>
          </ul>
        </article>
      </div>
    </article>
  );
}
