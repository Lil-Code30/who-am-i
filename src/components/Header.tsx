import TextType from "../blocks/TextAnimations/TextType/TextType";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Header = () => {
  return (
    <header>
      <div className="flex relative min-h-[200px] md:min-h-[180px]">
        <div className="z-10 flex-1 pr-4 md:pr-48">
          <p className="text-3xl md:text-5xl font-bold">
            <span>Hi, I'm Loko Ismaël</span>{" "}
          </p>
          {"  "}
          <TextType
            text={[
              "Full Stack Developer",
              "Content Creator",
              "Twitch Streamer",
            ]}
            typingSpeed={100}
            pauseDuration={1800}
            className=" font-bold text-2xl"
            textColors={["#FF5733", "#33FF57", "#3357FF"]}
            showCursor={true}
            cursorCharacter="_"
          />
          <p className="mt-4">
            I build modern, scalable web applications with a passion for clean
            design, performance, and user experience.
          </p>
        </div>
        <div className="absolute rounded-lg border-2 border-gray-200 top-0 right-0 mt-4 mr-4 z-5 hidden md:block rotate-12 -skew-y-6 transition-all duration-500 ease-in-out hover:rotate-0 hover:skew-y-0 hover:scale-105 cursor-pointer">
          <img
            src="./images/pp.jpg"
            alt="Profile"
            className="rounded-lg w-[150px] h-[150px] object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
        <Button size="lg" className="w-full sm:w-auto" asChild>
          <a href="mailto:lokoismael30@gmail.com">
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-full sm:w-auto"
          asChild
        >
          <a href="#projects">View My Work</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
