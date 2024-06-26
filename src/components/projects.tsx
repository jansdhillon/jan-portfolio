import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import Image from "next/image";
import Link from "next/link";
import {
  LucideShieldHalf,
  Shield,
  ShieldCheck,
  ShieldOffIcon,
} from "lucide-react";

export const Projects = () => (
  <div className="p-4">
    <section className="w-full py-12 md:py-24 lg:py-32 rounded-lg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex flex-col justify-center items-center space-y-4 w-full">
            <Badge
              variant="outline"
              className="flex gap-2 justify-center w-[1/4] bg-accent rounded-full p-4 text-xs md:text-sm"
              id="projects"
            >
              <div>🚀</div>
              <div>Projects</div>
            </Badge>
            <div className="text-base md:text-2xl font-medium tracking-tighter pb-3">
              Projects I&apos;ve Contributed To
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <Card
              className="p-3 ring-card "
              data-aos="flip-left"
              data-aos-delay="100"
            >
              <CardContent className="flex flex-col items-start justify-between gap-4">
                <div className="p-4 flex flex-col gap-3">
                  <div className="text-sm md:text-lg font-bold flex w-full justify-center gap-3">
                    {" "}
                    <Image
                      src="/obscurus.svg"
                      alt="obscurus"
                      width={30}
                      height={50}
                    />{" "}
                    obscurus
                  </div>
                  <p className="text-xs md:text-sm pt-3 md:pb-10">
                    A open-source, serverless web app powered by AWS that
                    facilitates private online communication by allowing users
                    to request and submit videos with face-blurring applied
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col w-full justify-center gap-8">
                <div className="space-x-1 md:space-x-4 space-y-4">
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">FastAPI</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
                <div className="flex gap-4 items-center">
                  <Link href="https://github.com/COSC-499-W2023/year-long-project-team-9/tree/master">
                    <FaGithub size={20} />
                  </Link>
                  <Link href="https://youtu.be/4Sjj6J6F270">
                    <Button
                      variant={"default"}
                      className="text-xs md:text-base"
                    >
                      Demo
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>

            <Card
              className="p-3"
              data-aos="flip-left"
              data-aos-delay="200"
              data-aos-duration="750"
            >
              <CardContent className="flex flex-col items-start justify-between gap-4">
                <div className="p-4 flex flex-col gap-3">
                  <div className="text-sm md:text-lg font-bold flex w-full justify-center gap-3 items-center">
                    {" "}
                    <Image
                      src="/recycling.png"
                      alt="UBC Recycling App"
                      width={30}
                      height={50}
                      className="rounded-md"
                    />{" "}
                    UBC Recycling
                  </div>
                  <div className="text-xs md:text-sm pt-2 pb-1">
                    A cross-platform mobile app that uses a custom object
                    detection machine learning model and geolocation to classify
                    scanned items as recyclable, returnable, compostable, or
                    trash, and then direct the user to where they can properly
                    dispose of it.
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-8 w-full justify-center">
                <div className="space-x-1 md:space-x-4 space-y-4">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Flask</Badge>
                  <Badge variant="secondary">YOLO/PyTorch</Badge>
                </div>
                <Link href="https://www.youtube.com/watch?v=crK235Yaxlc">
                  <Button variant={"default"} className="text-xs md:text-base">
                    Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card
              className="p-3 ring-card "
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <CardContent className="flex flex-col items-start justify-between gap-4">
                <div className="p-4 flex flex-col gap-3">
                  <div className="text-sm md:text-lg font-bold flex w-full justify-center gap-3 items-center">
                    {" "}
                    <ShieldCheck className="text-blue-500" />
                    Defend Your Data
                  </div>
                  <div className="text-xs md:text-sm pt-3 md:pb-10 ">
                    An open source web app that raises awareness about
                    fundamental cybersecurity topics. Through various tips,
                    interactive quizzes to test understanding, and links to
                    additional resources, users can learn how to protect
                    themselves in today&apos;s complex digital landscape.
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col w-full justify-center gap-8">
                <div className="space-x-4 space-y-4">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TailwindCSS</Badge>
                </div>
                <div className="flex gap-4 items-center">
                  <Link href="https://github.com/jansdhillon/Defend-Your-Data">
                    <FaGithub size={20} />
                  </Link>
                  <Link href="https://youtu.be/v8NQ6yFvvkY?si=Bb-xsWkDyu9KaP-i">
                    <Button
                      variant={"default"}
                      className="text-xs md:text-base"
                    >
                      Demo
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </div>
);
