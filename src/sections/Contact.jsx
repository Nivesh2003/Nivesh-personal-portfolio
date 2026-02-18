import React, { useState } from 'react'
import { Mail, MapPin, Send } from "lucide-react";
import Button from '../components/Button';
const Contact = () => {

const [formData,setFormData] = useState({
    name:"",
    email:"",
    message:""
})
const [isLoading, setisLoading] = useState(false);
const [submitStatus, setsubmitStatus] = useState({
    type:null, //success or error
    message:""
})
const handleSubmit = async(e)=>{
    e.preventDefault();
    setisLoading(true);
    setsubmitStatus({type:null,message:""});
    try {
        
    } catch (error) {
        
    }
}
const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "nivesh.ch30@gmail.com",
    href: "mailto:nivesh.ch30@gmail.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Greater Noida, India",
    href: "#"
  }
];

  return (
    <section id="contact" className='relative py-30 overflow-hidden'>
        <div className="absolute top-0 left-0 h-full w-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/10 rounded-full blur-3xl"/>
        </div>

        <div className="container mx-auto px-6 relative z-10">
                    {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-7">
          <span className="text-primary/70 text-sm font-medium tracking-wider uppercase animate-fade-in">
            Contact Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Lets build<span className="font-serif italic font-normal text-primary/70">{" "}something great</span>
          </h2>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
            <div className='glass rounded-3xl p-8 border border-primary/30 animate-fade-in animation-delay-300'>
                <form className='space-y-6' onSubmit={handleSubmit}>
                    <div><label htmlFor="name" className='text-sm block font-medium mb-2'>Name</label>
                    <input id='name' type='text' required value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} placeholder='Your name...' className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all'/>
                    </div>
                    <div><label htmlFor="email" className='text-sm block font-medium mb-2'>Your Email</label>
                    <input id='email' type='email' required value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} placeholder='your@email.com' className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all'/>
                    </div>
                    <div><label htmlFor="message" className='text-sm block font-medium mb-2'>Message</label>
                    <textarea id='message' rows={5} required value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})} placeholder='Your message...' className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none'/>
                    </div>

                    <Button size='lg' className='w-full' type="submit">Send Message <Send/></Button>
                </form>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Contact