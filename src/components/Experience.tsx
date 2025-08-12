import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Link } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "DripCode Studio",
      location: "Quebec, Canada (Remote)",
      period: "Jun 2025 - Present",
      type: "Freelance",
      description:
        "Work closely with startups, creators, and entrepreneurs to bring digital projects to life — from initial design to final deployment, ensuring high performance and user-focused experiences.",
      achievements: [
        "Designed and developed responsive web applications using React.js and Tailwind CSS",
        "Built and optimized RESTful APIs with Node.js and Express",
        "Implemented PostgreSQL and MongoDB databases for scalable data management",
        "Improved web app performance and SEO for better search ranking and faster load times",
        "Delivered custom UI/UX designs tailored to client branding and needs",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "Prisma",
        "Figma",
        "SEO Optimization",
        "Git",
        "Vercel",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Applied Science (BASc), Computer Engineering",
      school: "UQAR, Campus Levis",
      link: "https://www.uqar.ca/",
      period: "2025 – present",
      location: "Levis, Quebec, Canada",
      description:
        "Comprehensive program covering embedded systems, software engineering, computer architecture, and cybersecurity. Completed hands-on projects involving full-stack development, network security, and system optimization. Developed strong problem-solving and analytical skills through team collaborations and real-world case studies.",
    },
    {
      degree: "Diploma of Vocational Studies (DVS), IT Support",
      school: "CFP Marie-Rollet",
      link: "https://cfpmr.com/",
      period: "2023 – 2024",
      location: "Quebec, Canada",
      description:
        "Training focused on technical support for software and hardware systems, including workstation assembly, server management, network troubleshooting, and customer service skills. Developed proficiency in Linux, Active Directory, Microsoft Windows, Office 365, and service desk operations.",
    },
    {
      degree: "High School Diploma",
      school: "G.B.H.S Etoug-Ebe",
      link: "https://vymaps.com/CM/Lycee-bilingue-d-toug-b-Yaound-560887280602481/",
      period: "2013 – 2020",
      location: "Yaoundé, Cameroon",
      description:
        "Completed a broad-based secondary education with strong foundations in mathematics, sciences, and computer studies, preparing for advanced technical education.",
    },
  ];

  const certifications = [
    {
      title: "Responsive Web Design Certification",
      link: "https://freecodecamp.org/certification/licode/responsive-web-design",
    },
    {
      title: "Learn React from Scrimba",
      link: "https://scrimba.com/certificate-cert24zAwPPowNSNPmz3Jk34mAKArgfzv7JPZdcue",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      link: "https://badgr.com/public/assertions/nKH2qzroS0ebWMrsssrRRw?identity__email=lokoismael30%40gmail.com",
    },
  ];
  return (
    <section id="experience" className="py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Experience Timeline */}
          <div className="">
            <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="px-6 py-3">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-lg text-primary font-medium mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                          <Badge variant="outline">{exp.type}</Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="font-medium text-foreground mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary ">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-foreground mb-2">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="py-1 border-0 shadow-none my-0.5">
                  <CardContent className="px-6 py-2 ">
                    <h4 className="font-semibold text-foreground text-lg mb-1">
                      {edu.degree}
                    </h4>
                    <a
                      href={edu.link}
                      target="_blank"
                      className="text-primary font-medium mb-2 hover:underline hover:decoration-wavy"
                    >
                      {edu.school}
                    </a>
                    <div className="flex  gap-y-1 gap-x-5 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                    {/* <p className="text-sm text-muted-foreground">
                      {edu.description}
                    </p> */}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Certifications
              </h3>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 p-1 bg-secondary/10 rounded-lg"
                  >
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    <div className="flex gap-x-1 ">
                      <span className="text-sm font-medium ">{cert.title}</span>{" "}
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <Link size={15} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                See{" "}
                <a
                  href="https://www.linkedin.com/in/loko-ismael/details/certifications/"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700"
                >
                  all certifications
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
