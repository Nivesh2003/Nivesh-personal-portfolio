import React, { useState } from 'react'
import { AlertCircle, CheckCircle, Linkedin, Mail, MapPin, Send } from "lucide-react";
import Button from '../components/Button';
import emailjs from '@emailjs/browser';
const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isLoading, setisLoading] = useState(false);
    const [submitStatus, setsubmitStatus] = useState({
        type: null, //success or error
        message: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        setisLoading(true);
        setsubmitStatus({ type: null, message: "" });
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICEID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATEID;
            const publicId = import.meta.env.VITE_EMAILJS_PUBLIK_KEY;

            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message
            }, publicId);

            setsubmitStatus({
                type: "success",
                message: "Message sent successfully, You will be receiving a reply soon"
            })
            setFormData({ name: "", email: "", message: "" })
        } catch (error) {
            console.error(error);
            setsubmitStatus({
                type: "error",
                message: error.text || "Message failed to send"
            })
        } finally {
            setisLoading(false);
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
            icon: Linkedin,
            label: "LinkedIn",
            value:"linkedin.com/in/nivesh-chaudhary",
            href:"https://www.linkedin.com/in/nivesh-chaudhary/"
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
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/10 rounded-full blur-3xl" />
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


                {/* Main form  */}
                <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    <div className='glass rounded-3xl p-6 border border-primary/30 animate-fade-in animation-delay-300'>
                        <form className='space-y-6' onSubmit={handleSubmit}>
                            <div><label htmlFor="name" className='text-sm block font-medium mb-2'>Name</label>
                                <input id='name' type='text' required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder='Your name...' className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all' />
                            </div>
                            <div><label htmlFor="email" className='text-sm block font-medium mb-2'>Your Email</label>
                                <input id='email' type='email' required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder='your@email.com' className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all' />
                            </div>
                            <div><label htmlFor="message" className='text-sm block font-medium mb-2'>Message</label>
                                <textarea id='message' rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder='Your message...' className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none' />
                            </div>

                            <Button size='lg' className='w-full' type="submit" disabled={isLoading}>{isLoading ? (<>Sending...</>) : (<>Send Message <Send /></>)}</Button>

                            {submitStatus.type && (
                                <div
                                    className={`flex items-center gap-3
                     p-4 rounded-xl ${submitStatus.type === "success"
                                            ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                            : "bg-red-500/10 border border-red-500/20 text-red-400"
                                        }`}
                                >
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle className="w-5 h-5 shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                    )}
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>
                    
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400 ">
            <div className="glass rounded-3xl p-8 border  border-primary/30">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contacts.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex flex-wrap items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
              </div>
              </div>
                </div>
            

            </div>
        </section>
    )
}

export default Contact