
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
                <div className="absolute h-1.5 w-1.5 rounded-full opacity-60" style={{backgroundColor:"red" ,
                    left:`${Math.random()*100}%`,
                    top:`${Math.random()*100}%`,
                    animation:`slow-drift ${15 + Math.random()*20}s ease-in-out infinite`,
                    animationDelay:`${Math.random()*3}s`
                }}>
                </div>
            ))}
        </div>

        {/* Main content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center p-5"> 

                {/* LEft  */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                       <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary"> <span className="w-2 h-2 bg-primary/90 rounded-full animate-pulse"/>Full stack developer</span>
                    </div>

                    {/* Headline  */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                            Engineering Thoughtful <br /> <span className="text-primary/90 glow-text">Digital Products </span> That <br /> Grow with 
                            <span className="font-serif italic font-normal text-white"> you</span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in">
                            Hi I’m Nivesh, a Full-Stack JavaScript Developer passionate about crafting clean, scalable systems. I turn complex ideas into intuitive digital experiences — designed with intention and built for growth.
                        </p>
                    </div>
                </div>

                {/* Right image area  */}
            </div>
        </div>
    </section>
  )
}

export default Hero