import AboutMe from "./Components/AboutMe";
import Technologies from "./Components/Technologies";
import Experience from "./Components/Experience";
import Studies from "./Components/Studies";
import Proyects from "./Components/Proyects";

function Home() {
  return (
    <main className="">
      <div id="AboutMe" className="flex justify-center overflow-hidden py-24">
        <AboutMe />
      </div>
      <div id="Technologies" className="flex justify-center py-24">
        <Technologies />
      </div>
      <div id="Experience" className="flex justify-center py-24">
        <Experience />
      </div>
      <div id="Studies" className="flex justify-center py-24">
        <Studies />
      </div>
      <div id="Proyects" className="flex justify-center py-24">
        <Proyects />
      </div>
    </main>
  );
}

export default Home;
