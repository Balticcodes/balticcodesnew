import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Features } from "@/components/features";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Features />
      <ContactForm />
      <Footer />
    </main>
  );
}