import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Drip On Drip - E-Commerce Website",
      description:
        "A React-based full-stack e-commerce platform for trendy clothing with product browsing, cart management, user authentication, and checkout features.",
      image:
        "https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Prisma",
        "JWT",
        "PostgreSQL",
        "Stripe",
        "NeonDB",
        "Tailwind CSS",
        "Nodemailer",
      ],
      liveUrl: "https://drip-on-drip-v1.vercel.app/shop",
      githubUrl: "https://github.com/Lil-Code30/drip-on-drip_e-com",
      featured: true,
    },
    {
      title: "Dev Quotes ",
      description:
        "A fullstack quotes application showcasing random developer quotes, with user authentication and the ability to save favorites and can also like quotes.",
      image:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg", // Placeholder, replace with your screenshot
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
        "Mongoose",
      ],
      liveUrl: "https://dev-quotes-v1.vercel.app/",
      githubUrl: "https://github.com/Lil-Code30/dev-quotes_fullstack-app",
      featured: true,
    },
    {
      title: "To-Do App",
      description:
        "A simple and intuitive to-do list app built with React, allowing users to add, edit, delete, and mark tasks as completed.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg", // Placeholder image
      technologies: ["React", "JavaScript", "Tailwind CSS", "DaisyUI"],
      liveUrl: "https://to-do-app-v2-ten.vercel.app/",
      githubUrl: "https://github.com/Lil-Code30/to-do-App",
      featured: true,
    },
    {
      title: "Cine Verse",
      description:
        "A movie browsing platform that displays popular and trending movies using an external API with search and filter functionalities.",
      image: "https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg", // Placeholder
      technologies: ["React", "Tailwind CSS", "TMDB API", "LocalStorage"],
      liveUrl: "https://cine-verse-seven.vercel.app/",
      githubUrl: "https://github.com/Lil-Code30/cine-verse",
      featured: true,
    },
  ];
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-8 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {featuredProjects.map((project) => (
            <Card
              key={project.title}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col p-0 pb-3"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-62 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-2"
                    >
                      <svg
                        width="24"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              <CardHeader className="pb-1">
                <CardTitle className="flex items-center justify-between p-0 m-0">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="h-full flex flex-col justify-between pt-0">
                <div>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-0">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mt-auto ">
                  <Button size="sm" variant="default" className="flex-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Live
                    </a>
                  </Button>
                  <Button size="sm" variant="ghost" className="flex-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-2"
                    >
                      <svg
                        width="24"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
