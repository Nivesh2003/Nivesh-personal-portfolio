import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Skills = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const skillsData = [
  {
    title: "Frontend Development",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend & Databases",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
  },
  {
    title: "Tools & Fundamentals",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
    skills: ["Git", "GitHub", "Postman", "OOP", "DSA"],
  },
];

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % skillsData.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + skillsData.length) % skillsData.length
    );
  };

  return (
    <section id="skills" className="py-30 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-7">
          <span className="text-primary/70 text-sm font-medium tracking-wider uppercase animate-fade-in">
            Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            What I bring <span className="font-serif italic font-normal text-primary/70">{" "}to the table</span>
          </h2>
        </div>

        {/* Skills Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">

            {/* Main Card */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">

              {/* Image */}
              <img
                src={skillsData[activeIdx].image}
                alt={skillsData[activeIdx].title}
                className="w-full h-48 object-cover rounded-xl mb-7"
              />

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-5">
                {skillsData[activeIdx].title}
              </h3>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-3">
                {skillsData[activeIdx].skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 bg-surface text-sm rounded-full text-muted-foreground border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft/>
              </button>

              <div className="flex gap-2">
                {skillsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills