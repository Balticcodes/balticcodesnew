import { Container } from "@/components/ui/container";
import { Code2, Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { id: 'facebook', icon: Facebook, href: "#facebook" },
  { id: 'twitter', icon: Twitter, href: "#twitter" },
  { id: 'instagram', icon: Instagram, href: "#instagram" },
  { id: 'linkedin', icon: Linkedin, href: "#linkedin" },
  { id: 'github', icon: Github, href: "#github" },
];

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <Container>
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-8">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold text-primary">BalticCodes</span>
          </div>
          <p className="text-muted-foreground text-center mb-8">
            Empowering Businesses in the Digital Age
          </p>
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
          <div className="mt-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} BalticCodes. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}