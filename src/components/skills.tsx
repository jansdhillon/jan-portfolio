import { FaReact, FaAws, FaPython } from "react-icons/fa";
import { SiPostgresql, SiGit, SiGo, SiTerraform } from "react-icons/si";

import { BiLogoTypescript } from "react-icons/bi";
import { Badge } from "@/components/ui/badge";
import { FaDocker, FaJava, FaLinux, FaUbuntu } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import Link from "next/link";

const SkillIcon = ({
  Icon,
  name,
  invert,
}: {
  Icon: IconType;
  name: string;
  invert?: boolean;
}) => (
  <div className="flex flex-col items-center gap-4">
    <Icon className={`h-10 w-10 ${invert ? "" : "text-primary"}`} />
    <span className="text-sm font-medium text-center">{name}</span>
  </div>
);

export const Skills = () => {
  const skills = [
    { Icon: FaPython, name: "Python" },
    { Icon: FaUbuntu, name: "Ubuntu" },
    { Icon: SiGo, name: "Go" },
    { Icon: SiTerraform, name: "Terraform" },
    { Icon: FaDocker, name: "Docker" },
    { Icon: SiGit, name: "Git" },
    { Icon: FaLinux, name: "Linux", invert: true },
    { Icon: BiLogoTypescript, name: "TypeScript" },
    { Icon: SiPostgresql, name: "PostgreSQL" },
    { Icon: FaAws, name: "AWS" },
    { Icon: FaReact, name: "React" },
    { Icon: FaJava, name: "Java" },
  ];

  return (
    <section className="py-12 md:py-24 lg:py-32 " id="skills">
      <div className="container mx-auto px-10">
        <div className="flex   flex-col items-center justify-center gap-4 space-y-6">
          <Link href="#skills">
            <Badge variant="secondary" className="space-x-2">
              <div>🎨</div> <p>Skills</p>
            </Badge>
          </Link>
          <h2 className="text-xl line-clamp-1 md:text-2xl font-semibold text-primary leading-loose">
            Technologies I Use
          </h2>

          <div className="grid w-2/3  grid-cols-2 gap-12 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <SkillIcon key={index} {...skill} />
            ))}
          </div>
          <p className="text-sm md:text-base font-medium  text-center text-muted-foreground pt-8">
            ...and more! Plus I&apos;m always learning new things ✨
          </p>
        </div>
      </div>
    </section>
  );
};
