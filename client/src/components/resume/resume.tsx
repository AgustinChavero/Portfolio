export default function Resume() {
  return (
    <article className="flex flex-col justify-center items-center">
      <div className="w-full lg:w-3/4">
        <h3 className="text-left font-bold text-6xl border-b-2 border-white py-9 lg:pl-10 mt-10">
          Curriculum
        </h3>
      </div>
      <div className="bg-[#011223] flex rounded-md gap-x-6 py-5 px-20 mt-10 shadow-black shadow-md">
        <section>
          <h3 className="text-center font-extralight text-6xl py-9">Experiencia</h3>
          <article className="grid grid-cols-1 gap-y-4">
            <div className="border border-[#0257a6] max-w-md rounded-lg p-4">
              <p className="text-sm">Septiembre 2023 - Actualidad</p>
              <p className="text-2xl">Backend Developer</p>
              <p className="text-sm">Active - Ovalarria, Buenos Aires, Argentina</p>
            </div>
            <div className="border border-[#0257a6] max-w-md rounded-lg p-4">
              <p className="text-sm">Junio 2023 - Septiembre 2023</p>
              <p className="text-2xl">Backend Developer</p>
              <p className="text-sm">Aythen - Barcelona, España</p>
            </div>
            <div className="border border-[#0257a6] max-w-md rounded-lg p-4">
              <p className="text-sm">Marzo 2023 - Mayo 2023</p>
              <p className="text-2xl">Backend Developer</p>
              <p className="text-sm">Urban - Medellin, Colombia</p>
            </div>
            <div className="border border-[#0257a6] max-w-md rounded-lg p-4">
              <p className="text-sm">Febrero 2023 - Marzo 2023</p>
              <p className="text-2xl">Fullstack Developer</p>
              <p className="text-sm">
                Pet Friendly Universe - Rosario, Santa Fe, Argentina
              </p>
            </div>
          </article>
        </section>
        <section>
          <h3 className="text-center font-extralight text-6xl py-9">Educacion</h3>
          <article className="grid grid-cols-1 gap-y-4">
            <div className="border border-[#0257a6] max-w-md rounded-lg p-4">
              <p className="text-sm">Marzo 2023 - Actualidad</p>
              <p className="text-2xl">Backend Developer</p>
              <p className="text-sm">Udemy | Autodidacta</p>
            </div>
            <div className="border border-[#0257a6] max-w-md rounded-lg p-4">
              <p className="text-sm">Noviembre 2022 - Febrero 2023</p>
              <p className="text-2xl">Fullstack Developer</p>
              <p className="text-sm">Henry Bootcamp - CABA, Argentina</p>
            </div>
            <div className="border border-[#0257a6] max-w-md rounded-lg p-4">
              <p className="text-sm">Enero 2014 - Marzo 2017</p>
              <p className="text-2xl">Comercio Internacion y Aduanas</p>
              <p className="text-sm">Universidad Nacional de Cuyo - Mendoza, Argentina</p>
            </div>
          </article>
        </section>
      </div>
    </article>
  );
}
