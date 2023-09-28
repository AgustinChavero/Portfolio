"use client";
import NavPC from "@/components/nav/nav-pc";
import Aside from "@/components/aside/aside";
import Profile from "@/components/profile/profile";

export default function Home() {
  return (
    <main className="bg-custom_mosaic flex h-screen">
      <Aside />
      {/*Serian las distintas sections-Recibirian childrens*/}
      <section className="w-full lg:px-10">
        <header className="flex justify-center py-10">
          <NavPC />
        </header>
        <section className="">
          <Profile />
        </section>
      </section>

      <section className=""></section>
    </main>
  );
}
