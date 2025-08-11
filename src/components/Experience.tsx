import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description:
        "Lead development of scalable web applications serving 100k+ users. Mentor junior developers and drive technical decisions for the frontend team.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led migration to React 18 and Next.js 13",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored 3 junior developers and conducted technical interviews",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "AWS",
        "PostgreSQL",
      ],
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      type: "Full-time",
      description:
        "Built responsive web applications and collaborated with design team to create intuitive user interfaces for B2B SaaS platform.",
      achievements: [
        "Developed customer dashboard used by 50+ enterprise clients",
        "Improved mobile responsiveness across all platforms",
        "Implemented real-time data visualization features",
        "Collaborated with UX team to increase user engagement by 35%",
      ],
      technologies: [
        "React",
        "Redux",
        "CSS3",
        "JavaScript",
        "Chart.js",
        "REST APIs",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency Pro",
      location: "San Francisco, CA",
      period: "2019 - 2020",
      type: "Full-time",
      description:
        "Developed custom websites and web applications for various clients across different industries.",
      achievements: [
        "Successfully delivered 20+ client projects on time",
        "Maintained 98% client satisfaction rating",
        "Contributed to agency's first React-based project",
        "Learned and implemented modern development practices",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "PHP",
        "WordPress",
        "MySQL",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      period: "2015 - 2019",
      location: "Berkeley, CA",
      description:
        "Graduated with honors. Focused on web technologies, algorithms, and software engineering principles.",
    },
  ];
  const certifications = [
    {
      title: "Certified Full Stack Developer",
      link: "https://www.freecodecamp.org/certification/your-username/full-stack",
    },
    {
      title: "AWS Certified Solutions Architect",
      link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    },
  ];
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Experience Timeline */}
          <div className="">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
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
                            <span className="text-primary mt-1">•</span>
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
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium mb-2">
                      {edu.school}
                    </p>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Certifications
              </h3>
              <div className="space-y-3">
                {[
                  "AWS Certified Developer",
                  "Google Cloud Professional",
                  "MongoDB Certified Developer",
                  "Agile/Scrum Master Certified",
                ].map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 p-3 bg-secondary/10 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
