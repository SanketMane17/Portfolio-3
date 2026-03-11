import { FadeIn } from "@/components/ui/fade-in";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Founding Engineer",
      company: "BizPe – Antler-backed Fintech Startup",
      period: "December 2024 – Present",
      location: "Bengaluru, Karnataka",
      highlights: [
        "Architected full-stack fintech platform with Flutter, React.js, and RESTful APIs, scaling to 5,000+ users",
        "Built AI-powered voice billing using Speech-to-Text and LLM pipelines, reducing invoice creation time by ~80%",
        "Built cross-platform component library with Figma tokens and Google Material Design across web and mobile",
        "Owned CI/CD pipelines with GitHub Actions and Shorebird OTA for daily deployments and hotfixes without app store releases",
        "Designed secure payment workflows and API integrations meeting financial compliance standards",
        "Improved app startup time by ~35% via deferred initialization of non-critical services post-splash",
        "Built Spring Boot services for Slack, Zoho, and push notification integrations with Puppeteer PDF generation"
      ],
      tech: ["Flutter", "React.js", "RESTful APIs", "GitHub Actions", "Shorebird", "Spring Boot", "Puppeteer", "Figma Integration"]
    },
    {
      id: 2,
      role: "Frontend Engineer",
      company: "Multiply (Pidilite)",
      period: "December 2022 – December 2024",
      location: "Bengaluru, Karnataka",
      highlights: [
        "Joined as 2nd frontend engineer in a 0-to-1 startup, building core product across React.js, Next.js, and Flutter",
        "Owned multi-role RBAC dashboard serving as the primary revenue-driving business operations interface",
        "Built contractor attendance system from scratch covering attendance marking, salary, and leave management",
        "Led PWA to Flutter migration, resolving device-specific inconsistencies and improving native platform support",
        "Optimized React performance via memoization, code splitting, and lazy loading, reducing bundle size by ~35%",
        "Defined API contracts with internal and external teams, implementing robust error handling across the frontend"
      ],
      tech: ["React.js", "Next.js", "Flutter", "PWA", "Zustand"]
    },
    {
      id: 3,
      role: "Student Developer",
      company: "Crio.Do · Internship",
      period: "Jun 2022 - Sep 2022",
      location: "Bengaluru, Karnataka · Remote",
      highlights: [
        "Built and deployed real-world projects during an industry-oriented developer program.",
        "Gained hands-on experience with backend, frontend, and full-stack workflows, preparing for real-world engineering challenges."
      ],
      tech: ["Frontend", "Backend", "Full-Stack"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Work <span className="text-gradient">Experience</span></h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>
        </FadeIn>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <FadeIn key={exp.id} delay={0.2 + (idx * 0.1)} direction="left" className="relative pl-10 md:pl-16">
              {/* Timeline dot */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full glass-card flex items-center justify-center bg-[#0A0A0F] border-[#7C3AED]/50 shadow-[0_0_10px_rgba(124,58,237,0.3)]">
                <Briefcase className="w-3.5 h-3.5 text-[#00F5FF]" />
              </div>

              <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-white/20 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7C3AED]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-[#00F5FF] transition-colors">{exp.role}</h3>
                    <p className="text-lg font-medium text-white/80">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium glass-card text-[#F59E0B] border-[#F59E0B]/20 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-6 list-disc pl-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed text-sm">
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-white/60">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
