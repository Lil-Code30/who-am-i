import { motion } from "framer-motion";
import { Home, Youtube, Github } from "lucide-react";

const Dock = () => {
  const dockItems = [
    {
      icon: <Home size={24} />,
      label: "Home",
      href: "#home",
      onClick: () => {
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      icon: <Youtube size={24} />,
      label: "YouTube",
      href: "https://youtube.com/@your-channel", // Replace with your YouTube channel
      onClick: () => window.open("https://youtube.com/@your-channel", "_blank"),
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com/Lil-Code30",
      onClick: () => window.open("https://github.com/Lil-Code30", "_blank"),
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
        </svg>
      ),
      label: "Twitch",
      href: "https://twitch.tv/your-channel", // Replace with your Twitch channel
      onClick: () => window.open("https://twitch.tv/your-channel", "_blank"),
    },
  ];

  return (
    <motion.div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center gap-1 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border border-border rounded-lg px-3 py-2 shadow-lg">
        {dockItems.map((item, index) => (
          <motion.button
            key={index}
            onClick={item.onClick}
            className="relative group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
            whileHover={{
              scale: 1.5,
              y: -8,
              transition: { type: "spring", stiffness: 400, damping: 17 },
            }}
            whileTap={{ scale: 0.95 }}
            title={item.label}
          >
            {item.icon}

            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded-md border opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
              {item.label}
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default Dock;
