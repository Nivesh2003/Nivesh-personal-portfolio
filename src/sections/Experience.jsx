
const Experience = () => {
    const experience = [
  {
    period: "Jul 2025 - Aug 2025",
    role: "Software Developer Intern",
    company: "SoftPro India Pvt. Ltd.",
    description:
         "Improved website user interfaces, performance, and responsiveness across multiple college portals using HTML, CSS, Bootstrap, and React. Built the HealthNexus final project featuring dynamic dashboards for doctors and patients, efficient database management for user records, and integrated appointment and payment workflows.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "MySQL", "Git"],
    current: false,
  },
  {
    period: "2024 - 2025",
    role: "Full Stack Developer (MERN Projects)",
    company: "Personal Projects",
    description:
      "Built scalable MERN apking platform with secure JWT authentication and modular APIs.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Google OAuth"],
    current: false,
  },
  {
    period: "2022 - 2024",
    role: "Computer Science Student",
    company: "IIMT College of Engineering",
    description:
      "Focused on strengthening Data Structures & Algorithms, DBMS, and backend fundamentals while actively building real-world development projects.",
    technologies: ["Java", "Python", "SQL", "DSA", "OOP"],
    current: false,
  }
];

  return (
     <section id="experience" className="py-30 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-primary/70 text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-primary-foreground"
          >
            Experiences that shaped
            <span className="font-serif italic font-normal text-white">
              {" "} Me
              
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-primary/80 via-primary/40 to-primary/20
 md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0.5 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience