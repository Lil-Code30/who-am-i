import { MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const interests: string[] = [
    "Full Stack Development",
    "Backend Architecture & APIs",
    "Problem-Solving & Algorithms",
    "Continuous Learning",
    "Open Source",
    "Entrepreneurship & Startups",
    "Photography",
    "Gaming",
    "Streaming",
  ];
  return (
    <section id="about" className="py-2">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-3">About Me</h2>
        <div className="flex items-center gap-4 text-muted-foreground pb-2">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Quebec, QC</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Available for work</span>
          </div>
        </div>
        <p className="text-md py-2">
          I’m a self-taught Full Stack Developer driven by curiosity,
          problem-solving, and continuous improvement. My toolkit evolves
          constantly, but my focus remains the same—creating digital experiences
          that are functional, scalable, and impactful.
        </p>
      </div>
      <div className="space-y-3">
        <h4 className="text-lg font-medium text-foreground">Interests</h4>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <Badge
              key={interest}
              variant="secondary"
              className="hover:text-white hover:bg-primary transition duration-500 ease-in-out"
            >
              {interest}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
