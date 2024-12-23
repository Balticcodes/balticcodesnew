"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-[4.5rem]">
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Code2 className="h-12 w-12 text-primary" />
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              BalticCodes
            </h1>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Your Startup's Digital Launchpad
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Transforming Ideas into Reality with Cutting-Edge Web Solutions. At BalticCodes, we craft modern websites and seamless system integrations designed to fuel your business growth. From innovative designs to robust SEO strategies, we specialize in creating secure, scalable, and user-friendly solutions tailored for startups and small businesses.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="group">
              Get Started Now
              <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </Container>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
}