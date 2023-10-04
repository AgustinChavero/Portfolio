export default function Contact() {
  return (
    <article className="py-10 flex flex-col justify-center items-center">
      <h3 className="text-center font-bold text-6xl py-9">Contactame</h3>
      <section className="bg-gray-300 text-black rounded-lg p-10 max-w-5xl flex-col justify-center">
        <p className="border-b-2 border-black">Enviame un mail</p>
        <form action="" method="post" className="flex-col max-w-xl">
          <div className="flex justify-between py-4">
            <label className="px-5">Nombre:</label>
            <input type="text" name="name" required className="rounded-md" />
          </div>
          <div className="flex justify-between py-4">
            <label className="px-5">Correo Electrónico:</label>
            <input type="email" name="email" required className="rounded-md" />
          </div>
          <div className="flex justify-between py-4">
            <label className="px-5">Número de Teléfono:</label>
            <input type="phone" name="telefono" required className="rounded-md" />
          </div>
          <div className="flex justify-between py-4">
            <label className="px-5">Mensaje:</label>
            <textarea name="content" required></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-lg text-white rounded-xl px-4 py-2 hover:bg-green-800"
          >
            Enviar
          </button>
        </form>
      </section>
    </article>
  );
}
