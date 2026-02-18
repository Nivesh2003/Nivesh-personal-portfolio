import { ArrowUpRight, Github } from "lucide-react";

const Projects = () => {
    const projects = [
  {
    title: "HealthNexus",
    desc: "A MERN-based healthcare platform with doctor and patient dashboards, secure authentication, and smooth appointment and payment workflows.",
    img: "/projects/healthnexus.png", 
    live:"#",
    github: "https://github.com/Nivesh2003/Healthnexus",
    tags:["React","Express","MongoDB","Stripe"]
  },
  {
    title: "LinkedIn Clone",
    desc: "A scalable social app built with the MERN stack featuring posts, likes, comments, and secure JWT-based authentication with Google OAuth integration.",
    img: "/images/social-platform.png", 
    live:"#",
    github: "https://github.com/Nivesh2003/Linkedin-Clone",
    tags:["MERN" ,"JWT", "Google OAuth"]
  }
];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
        {/* Glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-2xl"/>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-2xl"/>

        <div className="container mx-auto px-6 relative z-10">
            {/* Section header  */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-highlight/70 text-sm font-bold tracking-wider uppercase animate-fade-in">Featured Work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-primary-foreground">
                   <span className="font-serif italic">Thoughtfully </span>  
                    built projects
                </h2>
            </div>

            {/* Projects grid */}
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project,idx)=>(
                    <div className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{animationDelay:`${(idx+1)*100}ms`}} key={idx}>
                        {/* image div  */}
                        <div className="relative overflow-hidden aspect-video"><img src={project.img} alt="project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                        <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"/>
                        {/* overlaying links */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-70 transistion-opacity duration-600">
                            <a href={project.live} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transistion-all"><ArrowUpRight className="w-5 h-5"/></a>
                            <a href={project.github} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transistion-all"><Github className="w-5 h-5"/></a>
                        </div>
                        </div>

                        {/* content  div*/}
                    <div className="p-6 space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold group-hover:text-primary/90 transistion-colors ">{project.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            {project.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">{project.tags.map((tag,tagIdx)=>(
                            <span className="px-4 py-1 bg-surface/50 rounded-full text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 transistion-all duration-300">{tag}</span>
                        ))}</div>
                    </div>

                    </div> 
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects