"use client";
import NavPC from "@/components/nav/nav-pc";
import Aside from "@/components/aside/aside";
import Profile from "@/components/profile/profile";
import Technologies from "@/reactive/technologies/technologies";
import Resume from "@/components/resume/resume";
import Jobs from "@/components/jobs/jobs";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main className="bg-custom_mosaic flex min-h-screen">
      <Aside />
      {/*Serian las distintas sections-Recibirian childrens*/}
      <div className="w-full">
        <header className="bg-custom_mosaic flex justify-center pt-10 pb-5 px-10 sticky top-0 z-50">
          <NavPC />
        </header>
        <section id="profile" className="px-10">
          <Profile />
        </section>
        <section id="profile" className="px-10">
          <Technologies />
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
