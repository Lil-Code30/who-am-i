import TextType from "../blocks/TextAnimations/TextType/TextType";

const Header = () => {
  return (
    <header className="flex relative min-h-[200px] md:min-h-[180px]">
      <div className="z-10 flex-1 pr-4 md:pr-48">
        <p className="text-3xl md:text-5xl font-bold">
          <span>Hi, I'm Loko Ismaël</span>{" "}
        </p>
        {"  "}
        <TextType
          text={["Full Stack Developer", "Content Creator", "Twitch Streamer"]}
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
    </header>
  );
};

export default Header;
