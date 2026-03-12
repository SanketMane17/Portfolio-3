import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0F]/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          className="font-display font-bold text-xl tracking-tighter flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00F5FF] to-[#7C3AED] flex items-center justify-center text-[#0A0A0F] shadow-[0_0_15px_rgba(0,245,255,0.4)] group-hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] transition-all duration-300 font-bold">
            S
          </span>
          <span>Sanket<span className="text-[#00F5FF]">.</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00F5FF] transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="h-4 w-px bg-white/20"></div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="https://github.com/SanketMane17" target="_blank" rel="noreferrer" className="hover:text-white hover:-translate-y-1 transition-all duration-200">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/sanket-mane-016" target="_blank" rel="noreferrer" className="hover:text-[#00F5FF] hover:-translate-y-1 transition-all duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-6"
        >
          <ul className="flex flex-col gap-4 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-muted-foreground hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6 pt-4 border-t border-white/10">
            <a href="https://github.com/SanketMane17" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white"><Github /></a>
            <a href="https://linkedin.com/in/sanket-mane-016" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#00F5FF]"><Linkedin /></a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
