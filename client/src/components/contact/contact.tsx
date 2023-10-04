export default function Contact() {
  return (
    <article className="py-10 flex flex-col justify-center items-center">
      <section className="bg-gray-300 text-black rounded-lg p-10 lg:w-2/3 flex-col justify-center">
        <p className="border-b-2 border-black">Enviame un correo electronico</p>
        <form action="" method="post" className="flex-col">
          <section className="flex justify-between w-full">
            <div className="flex justify-between py-4 w-full">
              <label className="px-5">Nombre:</label>
              <input type="text" name="name" required className="rounded-md" />
            </div>
            <div className="flex justify-between py-4 w-full">
              <label className="px-5">Apellido:</label>
              <input type="text" name="name" required className="rounded-md" />
            </div>
          </section>
          <section className="flex justify-between w-full">
            <div className="flex justify-between py-4 w-full">
              <label className="px-5">Email:</label>
              <input type="email" name="email" required className="rounded-md" />
            </div>
            <div className="flex justify-between py-4 w-full">
              <label className="px-5">Teléfono:</label>
              <input type="phone" name="telefono" required className="rounded-md" />
            </div>
          </section>

          <div className="flex justify-between py-4">
            <label className="px-5">Mensaje:</label>
            <textarea name="content" required className="w-full rounded-md"></textarea>
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
