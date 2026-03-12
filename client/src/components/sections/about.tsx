import { FadeIn } from "@/components/ui/fade-in";
import { Code2, Database, Layout, Smartphone, GraduationCap } from "lucide-react";

export function About() {
  const skills = [
    { name: "Languages", desc: "JavaScript (ES6+), TypeScript, Java, Dart", color: "text-[#F59E0B]", icon: Code2 },
    { name: "Frontend", desc: "React.js, Next.js, Flutter, Progressive Web Apps (PWA), Tailwind CSS, Material UI, Shadcn UI", color: "text-[#00F5FF]", icon: Layout },
    { name: "Backend", desc: "Spring Boot, Node.js, RESTful APIs, Puppeteer", color: "text-[#7C3AED]", icon: Database },
    { name: "State Management", desc: "Riverpod, Redux, Zustand, Context API", color: "text-[#F59E0B]", icon: Code2 },
    { name: "Development Practices", desc: "Component-driven development, Design Systems, Code Reviews, Figma Integration", color: "text-[#00F5FF]", icon: Layout },
    { name: "AI Tools", desc: "GitHub Copilot, Windsurf", color: "text-[#7C3AED]", icon: Code2 },
    { name: "DevOps & Tools", desc: "Git, GitHub Actions, CI/CD, Firebase (FCM, Remote Config, App Distribution, Crashlytics), Postman, VS Code, Shorebird", color: "text-white", icon: Smartphone },
  ];

  const techStack = [
  // Frontend Development
  "React.js",
  "Next.js",

  // Frontend Architecture & System Design
  "Frontend System Design",
  "Design Systems",
  "Micro-Frontends",
  "Performance Optimization",
  "SSR",
  "Code Splitting",

  // Mobile Development
  "Flutter",

  // Backend Development
  "Node.js",
  "Spring Boot",

  // Languages
  "JavaScript",
  "TypeScript",
  "Dart",
  "Java",

  // State Management
  "Redux",
  "Zustand",
  "Riverpod",

  // Styling
  "Tailwind CSS",

  // Platforms
  "Firebase",
  "PWA",

  // Developer Tools
  "CI/CD",
  "GitHub Copilot",
  "Windsurf",
  "Shorebird"
];

  const stats = [
    { label: "Frontend heavy full stack", value: "Expertise", color: "text-[#00F5FF]" },
    // { label: "Products Shipped", value: "3", color: "text-[#7C3AED]" },
    { label: "Technologies", value: "15+", color: "text-[#F59E0B]" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">About & <span className="text-gradient">Skills</span></h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-12 lg:items-start">
          <FadeIn delay={0.2} className="lg:col-span-2 flex flex-col justify-start lg:justify-start">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Frontend heavy full stack engineer with 3+ years of experience building and scaling production-grade mobile and web applications using Flutter, React.js, Next.js, and Spring Boot. Experienced in shipping 0-to-1 products, integrating AI-powered features, and designing component-driven, scalable architectures.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {stats.map((stat, i) => (
                <div key={i} className="glass-card p-4 rounded-xl text-center">
                  <div className={`text-2xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {techStack.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 rounded-lg text-sm font-medium glass-card border-white/5 hover:border-[#00F5FF]/50 hover:text-[#00F5FF] transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>

          <div className="lg:col-span-3 space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <FadeIn key={index} delay={0.3 + (index * 0.1)} direction="up">
                  <div className="glass-card p-6 rounded-2xl h-full hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,245,255,0.15)] transition-all duration-300 group">
                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${skill.color}`}>
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{skill.name}</h3>
                    <p className="text-muted-foreground text-sm">{skill.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Education Section */}
            <FadeIn delay={0.7}>
              <div className="glass-card p-8 rounded-3xl border-[#F59E0B]/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">Education</h3>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">Bachelor's in Computer Science</h4>
                    <p className="text-lg text-white/70">Tuljaram Chaturchand College, Baramati</p>
                    <p className="text-muted-foreground">June 2019 – April 2022</p>
                  </div>
                  <div className="text-right">
                    <div className="inline-block px-4 py-2 rounded-xl glass-card border-[#F59E0B]/30 text-[#F59E0B] font-bold">
                      CGPA: 9.7
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
