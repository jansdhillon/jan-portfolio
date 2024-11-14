"use client";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

const Page = () => {
  return (
    <div className="flex flex-1 w-full flex-col justify-center min-h-[100dvh] pt-24  ">
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
};

export default Page;
