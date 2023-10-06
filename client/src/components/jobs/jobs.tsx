import Projects from "@/reactive/projects/projects";
import Technologies from "@/reactive/technologies/technologies";

export default function Jobs() {
  const aythen = [
    "/proyect/aythen/aythen0.jpg",
    "/proyect/aythen/aythen1.jpg",
    "/proyect/aythen/aythen2.jpg",
    "/proyect/aythen/aythen3.jpg",
  ];

  const techsAythen = [
    "/technologies/postgresql.svg",
    "/technologies/nodejs.svg",
    "/technologies/express.svg",
    "/technologies/sequelize.svg",
    "/technologies/javascript.svg",
    "/technologies/next.svg",
    "/technologies/typescript.svg",
    "/technologies/css.svg",
    "/technologies/trello.svg",
  ];

  const urban = [
    "/proyect/urban/urban0.jpg",
    "/proyect/urban/urban1.jpg",
    "/proyect/urban/urban2.jpg",
  ];

  const techsUrban = [
    "/technologies/firebase.svg",
    "/technologies/firestore.svg",
    "/technologies/nodejs.svg",
    "/technologies/express.svg",
    "/technologies/typescript.svg",
    "/technologies/next.svg",
    "/technologies/tailwind.svg",
    "/technologies/trello.svg",
  ];

  const petfriendly = [
    "/proyect/petfriendly/petfriendly0.jpg",
    "/proyect/petfriendly/petfriendly1.jpg",
    "/proyect/petfriendly/petfriendly2.jpg",
    "/proyect/petfriendly/petfriendly3.jpg",
    "/proyect/petfriendly/petfriendly4.jpg",
    "/proyect/petfriendly/petfriendly5.jpg",
    "/proyect/petfriendly/petfriendly6.jpg",
    "/proyect/petfriendly/petfriendly7.jpg",
    "/proyect/petfriendly/petfriendly8.jpg",
    "/proyect/petfriendly/petfriendly9.jpg",
    "/proyect/petfriendly/petfriendly10.jpg",
  ];

  const techsPF = [
    "/technologies/postgresql.svg",
    "/technologies/nodejs.svg",
    "/technologies/express.svg",
    "/technologies/sequelize.svg",
    "/technologies/javascript.svg",
    "/technologies/react.svg",
    "/technologies/tailwind.svg",
    "/technologies/trello.svg",
  ];

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-full lg:w-3/4">
        <h3 className="text-left font-bold text-6xl border-b-2 border-white py-9 mt-10 lg:pl-10">
          Proyectos
        </h3>
      </div>
      <article className="gap-4 mt-10">
        {/* <div>
          <div className="border-b border-white p-2 m-2 flex justify-between">
            <p className="text-sm">Active - Olavarria, Buenos Aires, Argentina</p>
            <p className="text-sm">Fullstack Developer</p>
          </div>
          <Projects images={active} />
        </div> */}
        <div className="bg-[#011223] rounded-md p-5 my-5 shadow-black shadow-md">
          <div className="border-b border-white p-2 m-2 flex justify-between">
            <p className="text-sm">Aythen - Barcelona, España</p>
            <p className="text-sm">Backend Developer</p>
          </div>
          <Projects images={aythen} />
          <Technologies images={techsAythen} />
        </div>
        {/* <div>
          <div className="border-b border-white p-2 m-2 flex justify-between">
            <p className="text-sm">Urban - Medellin, Colombia</p>
            <p className="text-sm">Backend Developer</p>
          </div>
          <Projects images={urban} />
          <Technologies images={techsUrban} />
        </div> */}
        <div className="bg-[#011223] rounded-md p-5 my-5 shadow-black shadow-md">
          <div className="border-b border-white p-2 m-2 flex justify-between">
            <p className="text-sm">PetFriendlyUniverse - Rosario, Santa Fe, Argentina</p>
            <p className="text-sm">Fullstack Developer</p>
          </div>
          <Projects images={petfriendly} />
          <Technologies images={techsPF} />
        </div>
      </article>
    </section>
  );
}
