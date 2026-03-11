import { FadeIn } from "@/components/ui/fade-in";
import { Mail, MapPin, Send, Phone, Github, Linkedin, Copy, Check, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "emailjs-com";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "");
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        toast({
          variant: "destructive",
          title: "Configuration Error",
          description: "Email service is not properly configured.",
        });
        return;
      }

      await emailjs.send(serviceId, templateId, {
        name: data.name,
        email: data.email,
        message: data.message,
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        className: "bg-white/10 backdrop-blur-md border-white/20 text-white",
      });
      reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again later.",
      });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("msanket450@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: "Copied to clipboard",
      description: "Email address has been copied.",
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <FadeIn delay={0.2} direction="right">
            <div className="glass-card p-8 md:p-10 rounded-3xl h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#00F5FF]/10 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-white mb-8 font-display">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center group-hover:bg-[#00F5FF]/10 group-hover:border-[#00F5FF]/30 transition-all">
                    <Mail className="w-6 h-6 text-[#00F5FF]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground font-medium mb-1">Email</p>
                    <div className="flex items-center gap-3">
                      <a href="mailto:msanket450@gmail.com" className="text-lg font-medium text-white hover:text-[#00F5FF] transition-colors break-all">
                        msanket450@gmail.com
                      </a>
                      <button 
                        onClick={copyToClipboard}
                        className="p-2 rounded-lg glass-card hover:bg-white/10 transition-colors"
                        title="Copy to clipboard"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-white/50" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center group-hover:bg-[#F59E0B]/10 group-hover:border-[#F59E0B]/30 transition-all">
                    <Phone className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Phone</p>
                    <a href="tel:+919422555950" className="text-lg font-medium text-white hover:text-[#F59E0B] transition-colors">
                      +91-9422555950
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center group-hover:bg-[#7C3AED]/10 group-hover:border-[#7C3AED]/30 transition-all">
                    <MapPin className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Location</p>
                    <p className="text-lg font-medium text-white">
                      Bengaluru, Karnataka
                    </p>
                  </div>
                </div>

                <div className="pt-8 flex items-center gap-4">
                  <a href="https://github.com/SanketMane17" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-white hover:text-[#00F5FF] hover:border-[#00F5FF]/30 transition-all">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com/in/sanket-mane-016" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-white hover:text-[#00F5FF] hover:border-[#00F5FF]/30 transition-all">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="left">
            <form onSubmit={handleSubmit(onSubmit)} name="contact" method="POST" className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80 pl-1">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    {...register("name")}
                    className={`w-full px-5 py-4 rounded-xl bg-white/5 border text-white placeholder:text-white/30 focus:outline-none focus:ring-2 transition-all ${
                      errors.name 
                        ? "border-red-400/50 focus:ring-red-400/50 focus:border-red-400" 
                        : "border-white/10 focus:ring-[#00F5FF]/50 focus:border-[#00F5FF]"
                    }`}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-2 text-red-400 text-sm pl-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name.message}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80 pl-1">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    {...register("email")}
                    className={`w-full px-5 py-4 rounded-xl bg-white/5 border text-white placeholder:text-white/30 focus:outline-none focus:ring-2 transition-all ${
                      errors.email 
                        ? "border-red-400/50 focus:ring-red-400/50 focus:border-red-400" 
                        : "border-white/10 focus:ring-[#7C3AED]/50 focus:border-[#7C3AED]"
                    }`}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-2 text-red-400 text-sm pl-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email.message}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80 pl-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  disabled={isSubmitting}
                  {...register("message")}
                  className={`w-full px-5 py-4 rounded-xl bg-white/5 border text-white placeholder:text-white/30 focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message 
                      ? "border-red-400/50 focus:ring-red-400/50 focus:border-red-400" 
                      : "border-white/10 focus:ring-[#F59E0B]/50 focus:border-[#F59E0B]"
                  }`}
                />
                {errors.message && (
                  <div className="flex items-center gap-2 text-red-400 text-sm pl-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-bold text-[#0A0A0F] bg-gradient-to-r from-[#00F5FF] to-[#7C3AED] hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
