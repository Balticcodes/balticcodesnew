"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export function About() {
  return (
    <section className="py-24 bg-muted/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center mb-8">
            <Users className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
            Your Partner in Digital Growth
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            At BalticCodes, we specialize in crafting professional websites for startups and small businesses. From engaging designs to powerful integrations, we ensure your online presence stands out and performs. With a focus on SEO optimization and tailored solutions, we help your business grow from day one.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}