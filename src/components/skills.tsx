import { motion } from "framer-motion";
import { FaReact, FaAws, FaPython, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiLinux,
  SiGit,
  SiFlask,
  SiKubernetes,
  SiPhp,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { Badge } from "@/components/ui/badge";
import { FaDocker, FaFlask } from "react-icons/fa6";

const SkillIcon = ({ Icon, name }: any) => (
  <motion.div
    className="flex flex-col items-center gap-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="h-12 w-12 text-primary" />
    <span className="text-sm font-medium">{name}</span>
  </motion.div>
);

export const Skills = () => {
  const skills = [
    { Icon: FaReact, name: "React" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: FaDocker, name: "Docker" },
    { Icon: BiLogoTypescript, name: "TypeScript" },
    { Icon: SiPostgresql, name: "PostgreSQL" },
    { Icon: FaAws, name: "AWS" },
    { Icon: FaPython, name: "Python" },
    { Icon: FaNodeJs, name: "Node.js" },
    { Icon: SiTailwindcss, name: "Tailwind CSS" },
    { Icon: SiFlask, name: "Flask" },
    { Icon: SiLinux, name: "Linux" },
    { Icon: SiGit, name: "Git" },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 " id="skills">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div>
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 bg-indigo-500 text-white rounded-full px-4 py-2 text-sm"
            >
              <div>🎨</div> <p>Skills</p>
            </Badge>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-8">
            Technologies I Use
          </h2>
          <div className="grid w-full max-w-5xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <SkillIcon key={index} {...skill} />
            ))}
          </div>
          <p className="text-sm md:text-base text-muted-foreground mt-8">
            ...and more! Plus I&apos;m always learning new things ✨
          </p>
        </div>
      </div>
    </section>
  );
};