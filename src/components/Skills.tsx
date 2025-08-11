import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Palette,
  Server,
  //   Smartphone,
  //   Cloud,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Angular",
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Microservices"],
    },
    {
      icon: Database,
      title: "Database & Storage",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Prisma ORM"],
    },
    // {
    //   icon: Cloud,
    //   title: "DevOps & Cloud",
    //   skills: [
    //     "AWS",
    //     "Docker",
    //     "Kubernetes",
    //     "CI/CD",
    //     "Vercel",
    //     "Netlify",
    //     "GitHub Actions",
    //   ],
    // },
    // {
    //   icon: Smartphone,
    //   title: "Mobile Development",
    //   skills: [
    //     "React Native",
    //     "Expo",
    //     "Flutter",
    //     "iOS",
    //     "Android",
    //     "Progressive Web Apps",
    //   ],
    // },
    {
      icon: Palette,
      title: "Design & Tools",
      skills: ["Figma", "Photoshop", "Git", "VS Code", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg">
            My expertise spans a wide range of technologies and tools that I
            leverage to build modern, scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-primary/10 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <Card className="inline-block">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Always Learning
              </h3>
              <p className="text-muted-foreground mb-4">
                Currently exploring and mastering new technologies
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["AI/ML", "Blockchain", "WebAssembly", "Rust", "Go"].map(
                  (tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
