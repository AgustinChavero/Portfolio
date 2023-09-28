"use client";

import Abilities from "@/reactive/cards/card-abilities";

export default function Profile() {
  return (
    <article className="">
      <h1 className="text-center font-bold text-6xl py-9">Sobre mi</h1>
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
          <div className="space-y-10">
            <Abilities
              image="/icons/email.svg"
              alt="Capacity"
              tittle="Capacidades"
              content="Desarrollador Backend de API RESTful altamente motivado con habilidades y
              experiencia previa en tecnologías como NodeJS, Express, JavaScript, NestJS,
              TypeScript, Python, Django. Junto al manejo de Bases de Datos SQL y NoSQL a
              través de MySQL, PostgreSQL y SQLite."
            />
            <Abilities
              image="/icons/email.svg"
              alt="Capacity"
              tittle="Capacidades"
              content="Conocimiento actualizado de las últimas tecnologías y tendencias en el
                campo del Desarrollo Web y Aplicaciones, lo que me permite ofrecer
                soluciones innovadoras y eficientes."
            />
            <Abilities
              image="/icons/email.svg"
              alt="Capacity"
              tittle="Capacidades"
              content="Excelentes habilidades de comunicación oral y escrita, orientado a las
                metodologías agiles de trabajo a través de plataformas como Jira y Trello,
                lo que me permite trabajar de manera efectiva en equipo, presentar ideas
                claras y adaptarme a diferentes situaciones."
            />
            <Abilities
              image="/icons/email.svg"
              alt="Capacity"
              tittle="Capacidades"
              content="Si la situacion lo requiere, poseo los contactos necesarios para reunir un
                equipo de desarrollo capacitado para poder llevar adelante cualquier
                proyecto."
            />
            <Abilities
              image="/icons/email.svg"
              alt="Capacity"
              tittle="Capacidades"
              content="Apasionado por aprender y mejorar constantemente mis habilidades, siempre
                dispuesto a asumir nuevos retos y enfrentarlos con determinación."
            />
          </div>
          <p>
            Como puede ver en mi currículum adjunto, que puede descargar dando click en el
            boton debajo del apartado izquierdo, cumplo con todos esos requisitos y más.
          </p>
          <p>Me encantaría poder hablar sobre nuevas oportunidades junto a usted</p>
          <p>No dude en comunicarse conmigo.</p>
        </article>
      </div>
    </article>
  );
}
