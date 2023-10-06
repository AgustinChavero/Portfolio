export default function NavPC() {
  return (
    <nav className="bg-[#011223] sticky flex justify-center items-center top-0 right-0 p-2 w-full">
      <ul className="flex justify-between w-1/3">
        <li className=" text-center">
          <a href="#profile">
            <img src="/icons/profile.svg" alt="Profile" className="w-10 p-1" />
          </a>
        </li>
        <li className=" text-center">
          <a href="#resume">
            <img src="/icons/resume.svg" alt="Resume" className="w-10 p-1" />
          </a>
        </li>
        <li className=" text-center">
          <a href="#jobs">
            <img src="/icons/job.svg" alt="Job" className="w-10 p-1" />
          </a>
        </li>
        <li className=" text-center">
          <a href="#contact">
            <img src="/icons/contact.svg" alt="Contact" className="w-10 p-1" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
