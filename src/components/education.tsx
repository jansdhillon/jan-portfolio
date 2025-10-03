import { Badge } from "@/components/ui/badge";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";

export const Education = () => {
  return (
    <section
      className="flex flex-col justify-center items-center mx-10  gap-4 py-12 md:py-24 lg:py-32 space-y-6"
      id="education"
    >
      <div className="flex flex-col items-center justify-center gap-7 text-center">
        <a href="#education">
          <Badge className="space-x-2 " variant={"secondary"}>
            <div>📚</div> <p>Education</p>
          </Badge>
        </a>
        <h2 className="text-xl line-clamp-1 md:text-2xl font-semibold text-primary tracking-wide">
          My Academic Journey
        </h2>
      </div>
      <Card className=" md:w-2/3  mx-auto  p-10 bg-card rounded-2xl  shadow-sm">
        <div className="flex flex-col justify-center item-center gap-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center  space-x-5">
              <img
                src="/ubc.png"
                alt="UBC"
                className="h-[30px] w-[30px] object-contain md:pt-1"
                loading="lazy"
              />

              <h3 className="text-base md:text-lg  font-medium text-center line-clamp-3">
                The University of British Columbia (UBC)
              </h3>
            </div>
            <div className="flex flex-col gap-4 font-medium text-muted-foreground text-center">
              <p className="line-clamp-2  ">
                Bachelor of Science, Major in Computer Science
              </p>
              <p>September 2020 - April 2024</p>
            </div>
          </div>
          <div className=" space-y-6 text-left pt-4 leading-loose">
            <p>
              I graduated from UBC with High Distinction this spring, earning my
              Bachelor of Science degree in Computer Science. Throughout my
              studies, I gained a solid foundation in software development,
              algorithms, and problem-solving, while also honing my skills
              through various projects and research opportunities. I am eager to
              apply this knowledge to my career, contributing meaningfully to
              innovative solutions and tackling real-world challenges.
            </p>
            <div className="space-y-4">
              <h4 className=" font-medium text-sm md:text-base  mb-2">
                Key Courses:
              </h4>
              <Separator />
              <ul className="grid grid-cols-2 gap-2 list-disc pl-5 font-normal">
                <li className="pl-1 pr-4">Software Engineering</li>
                <li className="pl-1">Algorithm Analysis</li>
                <li className="pl-1">Data Structures</li>
                <li className="pl-1">Human Computer Interaction</li>
                <li className="pl-1 pr-6">Data Analysis</li>
                <li className="pl-1">Databases</li>
                <li className="pl-1 pr-6">
                  Directed Studies in Software Development
                </li>
                <li className="pl-1">
                  Capstone Software Engineering Degree Course
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className=" font-medium text-sm md:text-base  mb-2">
                Acknowledgements:
              </h4>
              <Separator />
              <ul className="space-y-2 list-disc pl-5 leading-loose font-normal">
                <li className="pl-1">
                  Recognized by the UBC Cloud Innovation Centre, a collaboration
                  between AWS and UBC, as having the best project in our
                  hackathon-style Capstone Software Engineering Degree Course.
                </li>
                <li className="pl-1">
                  Graduated with High Distinction (GPA: 87%)
                </li>
                <li className="pl-1">Dean&apos;s List 2023-2024</li>
                <li className="pl-1">
                  Recipient of the Southern Interior Trust Development
                  Scholarship and the Alexander Rutherford Scholarship.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
