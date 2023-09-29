export default function Resume() {
  return (
    <article>
      <section>
        <h3 className="text-center font-bold text-6xl py-9">Stack</h3>
        <h4 className="font-semibold text-3xl lg:pl-36 py-4">En dominio:</h4>
        <article className="grid grid-cols-4 gap-y-4">
          <img src="/technologies/javascript.svg" alt="JavaScript" className="mx-auto" />
          <img src="/technologies/nodejs.svg" alt="Node" className="mx-auto" />
          <img src="/technologies/express.svg" alt="Express" className="mx-auto" />
          <img src="/technologies/sequelize.svg" alt="Sequelize" className="mx-auto" />
          <img src="/technologies/typescript.svg" alt="TypeScript" className="mx-auto" />
          <img src="/technologies/nest.svg" alt="Nest" className="mx-auto" />
          <img src="/technologies/python.svg" alt="Python" className="mx-auto" />
          <img src="/technologies/django.svg" alt="Django" className="mx-auto" />
          <img src="/technologies/react.svg" alt="React" className="mx-auto" />
          <img src="/technologies/next.svg" alt="Next" className="mx-auto" />
          <img src="/technologies/tailwind.svg" alt="Tailwind" className="mx-auto" />
          <img src="/technologies/html.svg" alt="HTML" className="mx-auto" />
          <img src="/technologies/css.svg" alt="CSS" className="mx-auto" />
          <img src="/technologies/mysql.svg" alt="MySQL" className="mx-auto" />
          <img src="/technologies/postgresql.svg" alt="PostgreSQL" className="mx-auto" />
          <img src="/technologies/mongodb.svg" alt="MongoDB" className="mx-auto" />
          <img src="/technologies/jira.svg" alt="Jira" className="mx-auto" />
          <img src="/technologies/trello.svg" alt="Trello" className="mx-auto" />
        </article>
        <h4 className="font-semibold text-3xl lg:pl-36 py-4">En proceso:</h4>
        <article className="grid grid-cols-4 gap-y-4">
          <img src="/technologies/csharp.svg" alt="CSharp" className="mx-auto" />
          <img src="/technologies/net.svg" alt=".Net" className="mx-auto" />
          <img src="/technologies/java.svg" alt="Java" className="mx-auto" />
        </article>
      </section>
      <section>
        <h3 className="text-center font-bold text-6xl py-9">Experiencia laboral</h3>
        <article className="grid grid-cols-2 gap-y-4">
          <div className="border border-black max-w-md rounded-lg p-4">
            <p className="text-sm">Septiembre 2023 - Actualidad</p>
            <p className="text-2xl">Backend Developer</p>
            <p className="text-sm">Active - Ovalarria, Buenos Aires, Argentina</p>
          </div>
          <div className="border border-black max-w-md rounded-lg p-4">
            <p className="text-sm">Junio 2023 - Septiembre 2023</p>
            <p className="text-2xl">Backend Developer</p>
            <p className="text-sm">Aythen - Barcelona, España</p>
          </div>
          <div className="border border-black max-w-md rounded-lg p-4">
            <p className="text-sm">Marzo 2023 - Mayo 2023</p>
            <p className="text-2xl">Backend Developer</p>
            <p className="text-sm">Urban - Medellin, Colombia</p>
          </div>
          <div className="border border-black max-w-md rounded-lg p-4">
            <p className="text-sm">Febrero 2023 - Marzo 2023</p>
            <p className="text-2xl">Fullstack Developer</p>
            <p className="text-sm">
              Pet Friendly Universe - Rosario, Santa Fe, Argentina
            </p>
          </div>
          <div className="border border-black max-w-md rounded-lg p-4">
            <p className="text-sm">Diciembre 2020 - Febrero 2022</p>
            <p className="text-2xl">Conductor</p>
            <p className="text-sm">Cabify - Mendoza, Argentina</p>
          </div>
          <div className="border border-black max-w-md rounded-lg p-4">
            <p className="text-sm">Enero 2018 - Diciembre 2018</p>
            <p className="text-2xl">Administrativo</p>
            <p className="text-sm">Seguro Tres Provincias - Mendoza, Argentina</p>
          </div>
          <div className="border border-black max-w-md rounded-lg p-4">
            <p className="text-sm">Septiembre 2014 - Diciembre 2014</p>
            <p className="text-2xl">Administrativo</p>
            <p className="text-sm">World Comex SA - Godoy Cruz, Mendoza, Argentina</p>
          </div>
        </article>
        <h3 className="text-center font-bold text-6xl py-9">Proyectos</h3>
        <article className="grid grid-cols-2 gap-y-4">
          <div className="border border-black max-w-md rounded-lg p-4">
            <p className="text-sm">Marzo 2023</p>
            <p className="text-2xl">Fullstack Developer</p>
            <p className="text-sm">Memorias NFT - Mendoza, Argentina</p>
          </div>
          <div className="border border-black max-w-md rounded-lg p-4">
            <p className="text-sm">Enero 2023</p>
            <p className="text-2xl">Fullstack Developer</p>
            <p className="text-sm">Pokedex - CABA, Argentina</p>
          </div>
        </article>
      </section>
      <section>
        <h3 className="text-center font-bold text-6xl py-9">Educacion</h3>
        <article className="grid grid-cols-3 gap-y-4">
          <div className="border border-black max-w-md rounded-lg p-4">
            <p className="text-sm">Marzo 2023 - Actualidad</p>
            <p className="text-2xl">Backend Developer</p>
            <p className="text-sm">Udemy | Autodidacta</p>
          </div>
          <div className="border border-black max-w-md rounded-lg p-4">
            <p className="text-sm">Noviembre 2022 - Febrero 2023</p>
            <p className="text-2xl">Fullstack Developer</p>
            <p className="text-sm">Henry Bootcamp - CABA, Argentina</p>
          </div>
          <div className="border border-black max-w-md rounded-lg p-4">
            <p className="text-sm">Enero 2014 - Marzo 2017</p>
            <p className="text-2xl">Tecnicatura en Comercio Internacion y Aduanas</p>
            <p className="text-sm">Universidad Nacional de Cuyo - Mendoza, Argentina</p>
          </div>
        </article>
      </section>
    </article>
  );
}
