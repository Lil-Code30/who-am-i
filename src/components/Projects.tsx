import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with modern payment integration, inventory management, and real-time analytics.",
      image:
        "https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, and advanced filtering.",
      image:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with data visualization and automated reporting.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg",
      technologies: ["React", "D3.js", "Express.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Learning Management System",
      description:
        "Comprehensive LMS with course creation, student tracking, and interactive learning modules.",
      image:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
      technologies: ["Django", "React", "PostgreSQL", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Fitness Tracking App",
      description:
        "Mobile-first fitness application with workout tracking, nutrition logging, and social features.",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <Card
              key={project.title}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary">
                    <Eye className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="secondary">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            {otherProjects.map((project) => (
              <Card
                key={project.title}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech: string) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="flex-1">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Live
                    </Button>
                    <Button size="sm" variant="ghost" className="flex-1">
                      <Github className="h-3 w-3 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
