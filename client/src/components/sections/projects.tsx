import { FadeIn } from "@/components/ui/fade-in";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import streammatePng from "@assets/Screenshot_2026-03-06_at_1.53.30_PM_1773165399053.png";
import qkartPng from "@assets/Screenshot_2026-03-06_at_1.53.43_PM_1773165399054.png";
import bizpePng from "@assets/Screenshot_2026-03-11_at_1.27.50_PM_1773216024561.png";

export function Projects() {
  const projects = [
    {
      title: "BizPe – Antler-backed Fintech Startup",
      duration: "Dec 2024 – Present",
      description: "A fintech platform for SMBs in India, BizPe simplifies payment collection, reconciliation, and cash flow management with seamless ERP integration and a user-friendly mobile interface. Features integrated AI-powered voice billing using Speech-to-Text and LLM pipelines.",
      image: bizpePng,
      tags: ["Flutter", "React.js", "RESTful APIs", "GitHub Actions", "Shorebird", "Spring Boot", "Puppeteer", "Figma Integration", "AI Integration"],
      links: { github: "https://github.com/SanketMane17", live: "https://bizpe.onelink.me/dWcg/21k6wgyp" },
      featured: true,
    },
    {
      title: "StreamMate",
      duration: "2024",
      description: "Built real-time video conferencing app with Next.js and Stream SDK for WebRTC-based audio/video communication. Implemented OAuth authentication and protected routes using Clerk for secure session management.",
      image: streammatePng,
      tags: ["Next.js", "TypeScript", "Stream SDK", "Clerk", "Shadcn UI", "Tailwind CSS", "Vercel"],
      links: { github: "https://github.com", live: "#" },
      featured: true,
    },
    {
      title: "QKart",
      duration: "2023",
      description: "An e-commerce platform offering a variety of products with optimized performance and secure authentication. Optimized front-end performance through code splitting and bundle size reduction, achieving 10% improvement in page load times. Boosted app performance using debouncing to reduce API calls on search. Configured JWT tokens for secure user authentication across distributed systems. Developed robust APIs using Node and Express as the backbone of the platform's backend architecture.",
      image: qkartPng,
      tags: ["React JS", "JavaScript", "Node", "Express", "Material UI", "REST APIs"],
      links: { github: "https://github.com/SanketMane17/QKart", live: "https://sanket-qkart.netlify.app/" },
      featured: true,
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#00F5FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured <span className="text-gradient">Work</span></h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                A selection of my recent projects. I build products that are scalable, performant, and beautifully designed.
              </p>
            </div>
            <a href="https://github.com/SanketMane17" target="_blank" rel="noreferrer" className="text-[#00F5FF] hover:text-white transition-colors flex items-center gap-2 font-medium">
              View all on GitHub <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, idx) => (
            <FadeIn key={idx} delay={0.2} direction="up">
              <div className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>
                
                {/* Image Container */}
                <div className="w-full lg:w-3/5 group relative rounded-2xl overflow-hidden glass-card p-2">
                  <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: 'auto' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full lg:w-2/5 flex flex-col ${idx % 2 !== 0 ? 'lg:items-end lg:text-right' : 'items-start'}`}>
                  {project.featured && (
                    <span className="text-[#00F5FF] font-mono text-sm tracking-wider uppercase mb-3">Featured Project</span>
                  )}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display">{project.title}</h3>
                  <p className="text-[#00F5FF] text-sm mb-4">{project.duration}</p>
                  
                  <div className="glass-card p-6 rounded-2xl mb-6 relative z-20 hover:border-[#7C3AED]/30 transition-colors">
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <ul className={`flex flex-wrap gap-x-4 gap-y-2 mb-8 ${idx % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                    {project.tags.map(tag => (
                      <li key={tag} className="text-sm font-medium text-white/70">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4">
                    <a 
                      href={project.links.github} 
                      target="_blank" rel="noreferrer"
                      className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-[#00F5FF] hover:border-[#00F5FF]/50 transition-all hover:-translate-y-1"
                      title="View Source"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.links.live} 
                      target="_blank" rel="noreferrer"
                      className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-[#7C3AED] hover:border-[#7C3AED]/50 transition-all hover:-translate-y-1"
                      title="Live Preview"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
