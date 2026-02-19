import { ChevronDown, Download, Github, Linkedin, Mail, SmileIcon } from "lucide-react"
import Button from "../components/Button"
import { TypeAnimation } from 'react-type-animation';
import SkillsList from "../components/SkillsList"
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background*/}
        <div className="absolute inset-0">
            <img src="/bg.png" alt="" 
            className="w-full h-full object-cover opacity-45"/>

            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/60 to-background"></div>
        </div>

        {/*Red dots */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(30)].map((_,i)=>(
                <div key={i} className="absolute h-1.5 w-1.5 rounded-full opacity-60" style={{backgroundColor:"red" ,
                    left:`${Math.random()*100}%`,
                    top:`${Math.random()*100}%`,
                    animation:`slow-drift ${15 + Math.random()*20}s ease-in-out infinite`,
                    animationDelay:`${Math.random()*3}s`
                }}>
                </div>
            ))}
        </div>

        {/* Main content */}
        <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center p-3.5"> 

                {/* LEft  */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                       <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary"> <span className="w-2 h-2 bg-primary/90 rounded-full animate-pulse"/><TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Full stack development',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Frontend development',
        1000,
        'Backend development',
        1000,
        'I love building',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{display: 'inline-block' }}
      repeat={Infinity}
    /></span>
                    </div>

                    {/* Headline  */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                            <span className="font-serif italic font-normal text-white"> Engineering</span> Thoughtful<br /> <span className="text-primary/90 glow-text">Digital Products </span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                            Hi I’m <span className="text-primary-foreground">Nivesh</span> , a Full-Stack JavaScript Developer passionate about crafting clean, scalable systems. I turn complex ideas into intuitive digital experiences — designed with intention and built for growth.
                        </p>
                    </div>

                    {/* Buttons for contact and resume */}
                    <div className="flex flex-wrap gap-3 animate-fade-in animation-delay-500">
                       <a href="#contact"><Button size='lg'>Get in Touch <SmileIcon className="w-5 h-5"/></Button></a> 
                        <a href="/Resume_Nivesh_FullStack.pdf" download><button className="p-5 flex items-center bg-primary-foreground/70 text-primary font-semibold rounded-full text-sm hover:bg-primary-foreground/90">Download Resume  <Download size={20}/></button> </a>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-500 px-2">
                        <span className="text-sm text-muted-foreground">Follow me</span>
                        {[
                            {icon:Github,href:"https://github.com/Nivesh2003"},
                            {icon:Linkedin,href:"https://www.linkedin.com/in/nivesh-chaudhary"},
                            {icon:Mail,href:"mailto:nivesh.ch30@gmail.com"}
                        ].map((social,idx)=>(
                            <a href={social.href} key={idx} target="_blank" className="rounded-full p-2 glass hover:bg-primary/10 hover:text-primary/70 transition-all duration-300">{<social.icon className="w-5 h-5"/>}</a>
                        ))}
                    </div>

                </div>

                {/* Right image area  */}
                <div className="relative animate-fade-in animation-delay-100">
                    {/* Profile image */}
                    <div className="relative max-w-md mx-auto">
                        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>

                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img src="/selfie.png" className="w-full aspect-4/5 object-cover rounded-2xl" alt="Nivesh Chaudhary" />
                            {/* Floaters */}
                            <div className="absolute -bottom-4 -right-4 rounded-xl glass backdrop-blur-sm px-4 py-3 animate-float">
                                <div className="flex items-center gap-3"> 
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                    <span className="text-sm font-medium">Available for work</span>
                                </div>
                            </div>

                            {/* Stats to be added later */}
                            {/* <div className="absolute -top-4 -left-4 rounded-xl px-4 py-3 glass animate-float">
                                <div className="text-2xl text-bold">0</div>
                                <div className="text-sm text-muted-foreground">Years Exp.</div>
                            </div> */}

                        </div>
                    </div> {/* pfp div end */}

                </div> {/*Right div end */}

            </div> {/* Grid container ends */}


        </div>

                {/* Scrolldown symbol div  */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 animate-fade-in animation-delay-400">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary/70"> 
        <span className="text-xs uppercase tracking-wider">Explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce"/>
        </a>
        </div>

    </section>
  )
}

export default Hero