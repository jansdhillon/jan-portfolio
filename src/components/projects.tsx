import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import kathrinBooksLogo from "../../public/kb2.svg";


const ProjectCard = ({
  logo,
  title,
  subtitle,
  description,
  technologies,
  githubLink,
  additionalLink,
  additionalLinkText,
}: any) => (
  <Card className="h-full flex flex-col rounded-2xl shadow-sm">
    <CardContent className="grow pt-6 px-6">
      <div className="flex flex-col space-y-6 ">
        <div className="flex items-center justify-center space-x-3 ">
          {typeof logo === "string" ? (
            <Image
              src={logo}
              alt={title}
              width={30}
              height={30}
              className="rounded-md"
            />
          ) : (
            logo
          )}
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <div className=" text-sm md:text-base  text-center line-clamp-1  font-medium text-muted-foreground">
          {subtitle}
        </div>
        <p className="text-sm md:text-base  text-left leading-loose">{description}</p>
      </div>
    </CardContent>
    <CardFooter className="flex flex-col items-center gap-6 px-6 pb-6">
      <div className="flex flex-wrap justify-center gap-2 lg:max-w-[75%]">
        {technologies.map((tech: any, index: any) => (
          <Badge key={index} variant={"secondary"}>
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        {githubLink && (
          <Link href={githubLink}>
            <FaGithub size={25} />
          </Link>
        )}
        {additionalLink && (
          <Link href={additionalLink}>
            <Button size={"sm"}>
              {additionalLinkText || "Demo"}
            </Button>
          </Link>
        )}
      </div>
    </CardFooter>
  </Card>
);

export const Projects = () => {
  const projects = [
    {
      logo: "/kb2.svg",
      title: "Kathrin's Books",
      subtitle: "Online Bookstore",
      description:
        "An online bookstore that allows users to browse and purchase a selection of rare and unique books curated by my mom, Kathrin. The app features a responsive, modern design and a smooth e-commerce flow. Kathrin's Books is powered by Next.js, Supabase, Stripe, Google Cloud Platform, and Google Analytics.",
      technologies: [
        "Next.js",
        "Google Analytics",
        "PostgreSQL",
        "TailwindCSS",
        "TypeScript",
        "Google Cloud",
        "Stripe",
        "React",
        "Docker",
      ],
      additionalLink: "https://kathrinsbooks.com",
      additionalLinkText: "Live Site",
    },
    {
      logo: "/obscurus.svg",
      title: "obscurus",
      subtitle: "Capstone Software Engineering Project",
      description:
        "A serverless, full-stack web app powered by AWS and infrastructure-as-code that facilitates private online communication by allowing users to request and submit videos with automatic face-blurring applied. Using a microservices architecture and cloud technologies, the app is highly performant and scalable.",
      technologies: [
        "AWS",
        "TypeScript",
        "Next.js",
        "Python",
        "OpenCV",
        "Tailwind CSS",
        "PostgreSQL",
        "Docker",
        "React",
      ],
      additionalLink: "https://youtu.be/4Sjj6J6F270",
      additionalLinkText: "Presentation",
    },
    {
      logo: "/recycling.png",
      title: "UBC Recycling",
      subtitle: "Directed Studies Project",
      description:
        "A cross-platform mobile app uses a custom object detection machine learning model and geolocation to classify scanned items as recyclable, returnable, compostable, or trash, and then direct the user to where they can properly dispose of it.",
      technologies: [
        "React Native",
        "Python",
        "TypeScript",
        "Flask",
        "YOLO",
        "Tailwind CSS",
        "PyTorch",
      ],
      additionalLink: "https://www.youtube.com/watch?v=crK235Yaxlc",
    },
    {
      logo: <ShieldCheck className="text-blue-500 w-8 h-8" />,
      title: "Defend Your Data",
      subtitle: "Digital Citizenship Project",
      description:
        "An open-source web app that raises awareness about fundamental cybersecurity topics. Through various tips, interactive quizzes to test understanding, and links to additional resources, users can learn how to protect themselves in today's complex digital landscape.",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "TypeScript",
        "PowerPoint",
        "Photoshop"
      ],
      githubLink: "https://github.com/jansdhillon/Defend-Your-Data",
      additionalLink: "https://youtu.be/v8NQ6yFvvkY?si=Bb-xsWkDyu9KaP-i",
      additionalLinkText: "Presentation",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <div className="container mx-auto px-10 max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center space-y-6">
          <Link href="#projects">
            <Badge variant={"secondary"} className="space-x-2 px-3 py-1">
              <div className="">🚀</div> <p>Projects</p>
            </Badge>
          </Link>

          <h2 className="text-xl md:text-2xl font-semibold line-clamp-1 text-primary leading-loose">
            Projects I&apos;ve Contributed To
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {projects.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
