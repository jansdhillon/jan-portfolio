import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import ubcLogo from "../../public/ubc.png";
import cseLogo from "../../public/cse.jpg";
import atLogo from "../../public/at-yellow.png";
import canonicalLogo from "../../public/canonical.jpg";

interface ExperienceItem {
  logo: string | StaticImageData;
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
    <Card className="h-full flex flex-col rounded-2xl shadow-sm">
      <CardContent className="grow pt-6 px-6">
        <div className="flex flex-col gap-8 ">
          <div className={`flex items-center justify-center space-x-5`}>
            <div className="relative h-[30px] w-[30px]">
              <Image
                fill
                src={logo}
                alt={`${companyLines[0]} Logo`}
                className="object-contain"
              />
            </div>
            <div className="text-base md:text-lg font-medium text-center line-clamp-3">
              {companyLines.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          </div>
          <div className="flex-col space-y-3 font-medium text-muted-foreground text-center text-sm md:text-base ">
            <div>{title}</div>
            <div>{description}</div>
          </div>
          <ul className="list-disc space-y-2 text-sm md:text-base text-left pl-5 leading-loose">
            {responsibilities.map((item, index) => (
              <li key={index} className="pl-1">
                <span className="inline-block align-top">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardContent className="grow px-6 pb-6">
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant={"secondary"}>
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      logo: canonicalLogo,
      title: "Associate Software Engineer (SaaS Engineering - Landscape)",
      company: "Canonical",
      description: "January 2025 - Current",
      responsibilities: [
        "Improved perfomance of client package reporting by up to 70%, which was highly requested from customers.",
      ],
      skills: [
        "Python",
        "Go",
        "Linux",
        "Debian",
        "PostgreSQL",
        "Git",
        "Bash",
        "LXD",
        "RabbitMQ",
        "HAProxy",
        "Terraform",
        "Juju",
      ],
    },
    {
      logo: cseLogo,
      title: "Software Engineer Co-op",
      company: "Communications Security Establishment (CSE)",
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
      logo: atLogo,
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
      logo: ubcLogo,
      title: "Student Support Analyst I",
      company: "The University of British Columbia (UBC)",
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
      <div className="container mx-auto px-10 max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center space-y-6">
          <Link href={"#experience"}>
            <Badge className="space-x-2" variant={"secondary"}>
              <div className=" ">💰</div> <p> Experience</p>
            </Badge>
          </Link>
          <h2 className="text-xl line-clamp-1 md:text-2xl font-semibold text-primary tracking-wide">
            Teams I&apos;ve Worked With
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
