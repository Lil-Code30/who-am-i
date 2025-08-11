import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:john.doe@example.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-2">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold py-2">Get in Touch</h1>
        <p className="text-muted-foreground">
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat about technology and development.
        </p>
      </div>
      <div className="flex justify-center items-center mt-4 mb-2">
        <div className="flex gap-2 ">
          {socialLinks.map((social) => (
            <Button
              key={social.label}
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary"
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            </Button>
          ))}
        </div>
      </div>
      <Card className="w-fit mx-auto py-2 my-2">
        <CardContent className="p-3 text-center">
          <h3 className="font-semibold text-foreground mb-2">
            Currently Available
          </h3>
          <p className="text-muted-foreground text-sm mb-1">
            Open to freelance projects and full-time opportunities
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-green-600 dark:text-green-400 font-medium">
              Available for hire
            </span>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
