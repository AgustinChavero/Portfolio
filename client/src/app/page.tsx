"use client";
import NavPC from "@/components/nav/nav-pc";
import Aside from "@/components/aside/aside";
import Profile from "@/components/profile/profile";
import Resume from "@/components/resume/resume";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <main className="bg-custom_mosaic flex min-h-screen">
      <Aside />
      {/*Serian las distintas sections-Recibirian childrens*/}
      <section className="w-full lg:px-10">
        <header className="bg-custom_mosaic flex justify-center pt-10 pb-5 sticky top-0 z-50">
          <NavPC />
        </header>
        <Profile />
        <Resume />
        <Contact />
      </section>
    </main>
  );
}
