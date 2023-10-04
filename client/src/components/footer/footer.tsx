export default function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="flex gap-x-12 justify-around p-4">
        <section>
          <h3 className="text-xl">Contacto</h3>
          <p>agustindanielchavero@gmail.com</p>
          <p>+5492612797321</p>
        </section>
        <section>
          <h3 className="text-xl">Información Personal</h3>
          <p>Soy un profesional de desarrollo web con experiencia en...</p>
        </section>

        <section>
          <h3 className="text-xl">Referencias</h3>
          <ul>
            <li>Cliente 1</li>
            <li>Cliente 2</li>
            <li>Cliente 3</li>
          </ul>
        </section>
      </div>

      <p className="p-4 font-extralight text-lg">&copy; 2023 AgustinChavero</p>
    </footer>
  );
}
