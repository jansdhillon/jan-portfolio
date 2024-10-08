import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Separator } from "./ui/separator";

interface ExperienceItem {
  logo: string;
  title: string;
  company: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

const ExperienceCard: React.FC<ExperienceItem> = ({
  logo,
  title,
  company,
  description,
  responsibilities,
  skills,
}) => {
  const companyLines = company.split("|");

  return (
    <div>
      <Card className="h-full flex flex-col rounded-3xl shadow-sm">
        <CardContent className="flex-grow p-6">
          <div className="flex flex-col gap-8 ">
            <div
              className={`flex items-center justify-center ${
                company == "Communications Security Establishment"
                  ? "space-x-5 "
                  : "space-x-5 md:space-x-5"
              }`}
            >
              <Image
                src={logo}
                alt={`${companyLines[0]} Logo`}
                width={30}
                height={30}
                quality={100}
              />
              <div className="text-lg md:text-xl font-semibold text-center line-clamp-3">
                {companyLines.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            </div>

            <div className="flex-col space-y-3 font-medium text-muted-foreground text-center text-base">
              <div>{title}</div>
              <div>{description}</div>
            </div>
            <Separator />
            <ul className="list-disc space-y-2 text-base text-left pl-5 leading-loose">
              {responsibilities.map((item, index) => (
                <li key={index} className="pl-1">
                  <span className="inline-block align-top">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>

        <CardContent className="p-6 ">
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant={"secondary"}>
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      logo: "/cse.jpg",
      title: "Software Engineer Co-op",
      company: "Communications Security Establishment",
      description: "January 2024 - April 2024",
      responsibilities: [
        "Developed a CI/CD pipeline for a microservice deployment onto Kubernetes, promoting reliability and efficiency.",
        "Enhanced internal analytical software using Azure, Python, Linux, and SQL, leading to improved intelligence analysis.",
        "Engaged in continuous feedback loops to boost team productivity and facilitate professional development.",
      ],
      skills: [
        "Azure",
        "Python",
        "Kubernetes",
        "Docker",
        "SQL",
        "Linux",
        "Helm",
        "Git",
      ],
    },
    {
      logo: "/at-yellow.png",
      title: "Software Engineer Co-op",
      company: "Armilla Technology",
      description: "May 2023 - September 2023",
      responsibilities: [
        "Contributed to the development of an innovative sports tech product, promoting accessibility in athletics.",
        "Overhauled the command center web app with .NET, jQuery, and CSS, improving interactivity and accessibility.",
        "Improved Android app features with Kotlin and Java, resulting in an enriched experience for end users.",
      ],
      skills: [
        "JavaScript",
        ".NET",
        "Kotlin",
        "CSS",
        "jQuery",
        "Java",
        "Android",
        "Git",
      ],
    },
    {
      logo: "/ubc.png",
      title: "Student Support Analyst I",
      company: "The University of British Columbia",
      description: "September 2022 - April 2023",
      responsibilities: [
        "Streamlined student support by creating clear, accessible documentation, greatly reducing troubleshooting time.",
        "Provided technical troubleshooting with a high satisfaction rate, resolving 70% more issues than the previous year.",
        "Collaborated across teams to enhance on-campus support services, improving operational efficiency.",
      ],
      skills: [
        "ServiceNow",
        "Microsoft Office",
        "Confluence",
        "Windows",
        "MacOS",
        "Linux",
      ],
    },
  ];

  return (
    <section className="py-12 md:py-24 lg:py-32 " id="experience">
      <div className="container mx-auto px-10">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div>
            <Badge className="space-x-2" variant={"secondary"}>
              <div className=" ">💰</div> <p> Experience</p>
            </Badge>
          </div>
          <h2 className="text-xl line-clamp-1 md:text-3xl font-bold mb-10 text-primary tracking-wide">
            Teams I&apos;ve Worked With
          </h2>

          <div className="flex flex-col lg:flex-row gap-6 w-full">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
