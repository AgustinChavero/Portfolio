export default function NavPC() {
  return (
    <nav className="bg-custom_blue rounded-xl sticky top-0 right-0 p-2 w-[1000px]">
      <ul className="flex justify-around">
        <li className=" text-center">
          <a href="">
            <img src="/icons/profile.svg" alt="Profile" className="w-10 p-1" />
            Perfil
          </a>
        </li>
        <li className=" text-center">
          <a href="">
            <img src="/icons/technologies.svg" alt="Technologies" className="w-10 p-1" />
            Tecnologias
          </a>
        </li>
        <li className=" text-center">
          <a href="">
            <img src="/icons/resume.svg" alt="Resume" className="w-10 p-1" />
            CV
          </a>
        </li>
        <li className=" text-center">
          <a href="">
            <img src="/icons/job.svg" alt="Job" className="w-10 p-1" />
            Trabajos
          </a>
        </li>
        <li className=" text-center">
          <a href="">
            <img src="/icons/contact.svg" alt="Contact" className="w-10 p-1" />
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
