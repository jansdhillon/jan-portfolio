import { Circle } from "lucide-react";
import BgGlowContainer from "./bg-glow-container";
import { Socials } from "./socials";
import { Separator } from "./ui/separator";
import Writer from "./writer";

const Terminal = () => {
  return (
    <div className=" bg-card rounded-2xl  border-2 shadow-sm   flex flex-col    font-mono md:min-h-[80px] w-[330px] md:w-[610px] text-3xl md:text-6xl tracking-tighter ">
      <div className="p-4 rounded-t-xl  rounded-b-none bg-secondary  flex gap-2.5 border-b ">

          <Circle className="h-3 w-3 md:h-4 md:w-4 text-red-500 fill-red-500  hover:fill-red-600 hover:text-red-600" />

        <button>
          <Circle className="h-3 w-3 md:h-4 md:w-4 text-yellow-500 fill-yellow-500 cursor-wait hover:fill-yellow-600 hover:text-yellow-600" />
        </button>
        <button>
          <Circle className="h-3 w-3 md:h-4 md:w-4 text-green-500 fill-green-500 cursor-pointer hover:fill-green-600 hover:text-green-600" />
        </button>
      </div>

      <div className="flex items-center ml-2 md:ml-5 lg:ml-7 gap-3 lg:gap-3.5 px-5 md:px-3 py-8 md:py-16">
        <div className=" text-secondary-foreground font-black">&gt;</div>
        <Writer text="Hey, I'm Jan!" />
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="w-full py-16">
      <div className=" flex justify-center md:pl-6">
        <Terminal />
      </div>
    </section>
  );
};
