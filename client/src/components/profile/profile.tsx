"use client";

export default function Profile() {
  return (
    <aside className="bg-slate-800 max-w-md h-screen sticky top-0 left-0 text-white py-1">
      <article className="flex flex-col items-center gap-3">
        <img src="/personal/profile.png" alt="" className="rounded-full w-60 my-4" />
        <h2 className="font-bold text-3xl">Agustin Daniel Chavero</h2>
        <h3 className="font-semibold text-xl text-black bg-gray-100 p-2 rounded-lg">
          Backend Developer
        </h3>
        <section className="mx-4">
          <ul className="flex gap-x-3">
            <li className="p-2 rounded-xl">
              <a href="https://api.whatsapp.com/send?phone=5492612797321" target="_blank">
                <img
                  src="/social/whatsapp.svg"
                  alt="Whatsapp"
                  className="w-8 hover:scale-125 transition-all duration-200"
                />
              </a>
            </li>
            <li className="p-2 rounded-xl">
              <a href="https://github.com/AgustinChavero" target="_blank">
                <img
                  src="/social/github.svg"
                  alt="GitHub"
                  className="w-8 hover:scale-125 transition-all duration-200"
                />
              </a>
            </li>
            <li className="p-2 rounded-xl">
              <a href="https://www.linkedin.com/in/agustinchavero/" target="_blank">
                <img
                  src="/social/linkedin.svg"
                  alt="Linkedin"
                  className="w-8 hover:scale-125 transition-all duration-200"
                />
              </a>
            </li>
            <li className="p-2 rounded-xl">
              <a href="https://www.instagram.com/agustinchavero.dev/" target="_blank">
                <img
                  src="/social/instagram.svg"
                  alt="Instagram"
                  className="w-8 hover:scale-125 transition-all duration-200"
                />
              </a>
            </li>
            <li className="p-2 rounded-xl">
              <a
                href="https://www.facebook.com/profile.php?id=100094240187280"
                target="_blank"
              >
                <img
                  src="/social/facebook.svg"
                  alt="Facebook"
                  className="w-8 hover:scale-125 transition-all duration-200"
                />
              </a>
            </li>
          </ul>
        </section>
      </article>
      <article className="text-black">
        <section className="flex gap-x-5 bg-gray-100/80 my-2 mx-6 rounded-xl p-3 items-center">
          <img src="/icons/phone.svg" alt="Phone" className="w-8 p-1" />
          <p>+5492612797321</p>
        </section>
        <section className="flex gap-x-5 bg-gray-100/80 my-2 mx-6 rounded-xl p-3 items-center">
          <img src="/icons/location.svg" alt="Location" className="w-8 p-1" />
          <p>Mendoza, Argentina</p>
        </section>
        <section className="flex gap-x-5 bg-gray-100/80 my-2 mx-6 rounded-xl p-3 items-center">
          <img src="/icons/email.svg" alt="Email" className="w-8 p-1" />
          <p>agustindanielchavero@gmail.com</p>
        </section>
      </article>
      <article className="flex justify-center text-white py-5">
        <button className="bg-green-700 p-4 rounded-2xl hover:bg-green-800">
          Descargar CV
        </button>
      </article>
    </aside>
  );
}
