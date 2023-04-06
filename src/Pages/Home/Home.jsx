import AboutMe from "./Components/AboutMe";
import Technologies from "./Components/Technologies";
import Experience from "./Components/Experience";
import Studies from "./Components/Studies";
import Proyects from "./Components/Proyects";

function Home() {
  return (
    <main className="">
      <section id="AboutMe" className="overflow-hidden lg:pt-16">
        <AboutMe />
      </section>
      <section
        id="Technologies"
        className="overflow-hidden flex justify-center"
      >
        <Technologies />
      </section>
      <section
        id="Proyects"
        className="overflow-hidden flex justify-center py-24"
      >
        <Proyects className="" />
      </section>
      <section
        id="Studies"
        className="overflow-hidden flex justify-center py-24"
      >
        <Studies />
      </section>
    </main>
  );
}

export default Home;
