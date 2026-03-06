import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import profileImg from "@assets/WhatsApp_Image_2026-03-05_at_5.30.50_PM_1772712072520.jpeg";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Frontend Engineer", "Full-stack Engineer", "Flutter Developer"];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#7C3AED]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#00F5FF]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start z-10">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-sm font-medium text-[#00F5FF] mb-6 border-[#00F5FF]/30">
              <Terminal className="w-4 h-4" />
              <span>Available for work 🟢</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 font-display">
              Sanket <br />
              <span className="text-gradient">Mane</span>
            </h1>
            <div className="h-12 flex items-center mb-6">
              <p className="text-2xl md:text-3xl font-mono text-[#00F5FF]">
                {roles[roleIndex]}
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed font-body">
              Frontend heavy full stack engineer with years of experience building production-grade mobile & web apps.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#projects"
              className="px-8 py-4 rounded-xl font-semibold bg-[#00F5FF] text-[#0A0A0F] shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:shadow-[0_0_30px_rgba(0,245,255,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-4 rounded-xl font-semibold glass-card hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-white"
            >
              Download Resume
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.5} direction="left" className="relative hidden lg:block z-10">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full border border-white/10 border-dashed animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-[#00F5FF]/30 border-dashed animate-[spin_25s_linear_infinite_reverse]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/20 to-[#00F5FF]/20 rounded-full blur-2xl" />
            
            <img 
              src={profileImg} 
              alt="Sanket Mane" 
              className="absolute inset-8 rounded-full object-cover border-2 border-white/20 shadow-2xl w-[calc(100%-64px)] h-[calc(100%-64px)]"
            />
            
            {/* Floating Badges */}
            <div className="absolute top-12 -right-4 glass-card px-4 py-3 rounded-2xl flex items-center gap-3 animate-bounce shadow-xl" style={{ animationDuration: '3s' }}>
              <div className="w-3 h-3 rounded-full bg-[#00F5FF] shadow-[0_0_10px_#00F5FF]" />
              <span className="font-medium text-sm">Flutter</span>
            </div>
            <div className="absolute top-1/2 -right-12 glass-card px-4 py-3 rounded-2xl flex items-center gap-3 animate-bounce shadow-xl" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
              <div className="w-3 h-3 rounded-full bg-[#61DAFB] shadow-[0_0_10px_#61DAFB]" />
              <span className="font-medium text-sm">React</span>
            </div>
            <div className="absolute -bottom-4 right-12 glass-card px-4 py-3 rounded-2xl flex items-center gap-3 animate-bounce shadow-xl" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>
              <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_white]" />
              <span className="font-medium text-sm">Next.js</span>
            </div>
            <div className="absolute bottom-20 -left-8 glass-card px-4 py-3 rounded-2xl flex items-center gap-3 animate-bounce shadow-xl" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <div className="w-3 h-3 rounded-full bg-[#7C3AED] shadow-[0_0_10px_#7C3AED]" />
              <span className="font-medium text-sm">Full Stack</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
