export default function Jobs() {
  return (
    <article className="flex flex-col justify-center items-center">
      <h3 className="text-center font-bold text-6xl py-9">Proyectos</h3>
      <article className="grid grid-cols-2 gap-4">
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
    </article>
  );
}
