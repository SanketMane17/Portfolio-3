import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-[#0A0A0F]/80 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Sanket Mane. Built with React & Tailwind.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/SanketMane17" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white hover:-translate-y-1 transition-all duration-200">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/sanket-mane-016" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#00F5FF] hover:-translate-y-1 transition-all duration-200">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
