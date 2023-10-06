"use client";
import NavPC from "@/components/nav/nav-pc";
import Aside from "@/components/aside/aside";
import Profile from "@/components/profile/profile";
import Technologies from "@/reactive/technologies/technologies";
import Resume from "@/components/resume/resume";
import Jobs from "@/components/jobs/jobs";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Projects from "@/reactive/projects/projects";

export default function Home() {
  return (
    <main
      className="flex min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url("/background/universo.jpg")' }}
    >
      <Aside />
      {/*Serian las distintas sections-Recibirian childrens*/}
      <div className="w-full">
        <header className="flex justify-center pb-5 sticky top-0 z-50">
          <NavPC />
        </header>
        <section id="profile" className="px-10">
          <Profile />
        </section>
        <section id="resume" className="px-10">
          <Resume />
        </section>
        <section id="jobs" className="px-10">
          <Jobs />
        </section>
        <section id="contact" className="px-10">
          <Contact />
        </section>
        <Footer />
      </div>
    </main>
  );
}
