"use client";

import { Container } from "@/components/ui/container";
import { SectionImage } from "@/components/ui/section-image";
import { motion } from "framer-motion";
import { Rocket, Laptop, HeadphonesIcon } from "lucide-react";

const features = [
  {
    title: "Tailored for Startups",
    description: "We understand the unique challenges of new businesses and deliver solutions that fit your goals and budget.",
    icon: Rocket,
  },
  {
    title: "Future-Ready Designs",
    description: "Our websites are built with scalability and growth in mind.",
    icon: Laptop,
  },
  {
    title: "Expert Support",
    description: "We're here to assist every step of the way, ensuring a smooth and successful launch.",
    icon: HeadphonesIcon,
  },
];

export function Features() {
  return (
    <section id="why-us" className="py-24 bg-muted/50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mx-auto max-w-4xl mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-8">
                Why Choose Us
              </h2>
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SectionImage
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop"
              alt="Team collaboration"
              className="h-[500px]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}