"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionImage } from "@/components/ui/section-image";
import { motion } from "framer-motion";
import { Mail, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { sendEmail } from "@/lib/email-service";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await sendEmail(data);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SectionImage
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2374&auto=format&fit=crop"
              alt="Contact us"
              className="h-[500px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <Mail className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
                Let's Bring Your Vision to Life
              </h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <Input
                    placeholder="Name"
                    {...register("name")}
                    error={errors.name?.message}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    error={errors.email?.message}
                  />
                </div>
              </div>
              <div>
                <Input
                  placeholder="Business Name"
                  {...register("businessName")}
                  error={errors.businessName?.message}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Message"
                  className="min-h-[150px]"
                  {...register("message")}
                  error={errors.message?.message}
                />
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}