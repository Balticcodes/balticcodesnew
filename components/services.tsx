"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionImage } from "@/components/ui/section-image";
import { motion } from "framer-motion";
import { Globe, Search, Settings } from "lucide-react";

const services = [
  {
    title: "Website Creation",
    description: "Build modern, responsive, and user-friendly websites that captivate your audience and represent your brand.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    title: "SEO Optimization",
    description: "Enhance your online visibility with cutting-edge SEO techniques designed to boost traffic and engagement.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2374&auto=format&fit=crop"
  },
  {
    title: "System Integration",
    description: "Connect your business tools seamlessly with custom integrations to create powerful and efficient software solutions.",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop"
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <SectionImage
                  src={service.image}
                  alt={service.title}
                  className="h-[200px]"
                />
                <CardHeader>
                  <div className="mb-4 flex items-center justify-center">
                    <service.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}