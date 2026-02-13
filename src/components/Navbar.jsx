import { useState } from 'react';
import Button from './Button'
import './Navbar.css'
import {Menu, X} from 'lucide-react'

const Navbar = () => {
    const [mobileMenuOpen, setmobileMenuOpen] = useState(false);
   const navItems = [
        {label:"About",href:"#"},
        {label:"Experience",href:""},
        {label:"Skills",href:""},
        {label:"Projects",href:""},
    ]
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-4 z-50">
        <nav className="container mx-auto px-6 flex items-center justify-between">

            {/* Logo  */}
            <div className="logo-container">
            <a href="#">
                <img src="logo2.png" alt="logo" className="logo"/>
            </a>
            </div>

            {/* Desktop only nav */}
            <div className='hidden md:flex items-center gap-1'>
                <div className='glass rounded-full px-3 py-1 flex items-center gap-2'>{navItems.map((item ,index)=>(
                    <a href={item.href} key={index} className='px-4 py-2 text-sm text-foreground hover:text-primary/80 rounded-full hover:font-bold hover:bg-surface'>{item.label}</a>
                ))}</div>
            </div>


            <div className='hidden md:block'><Button size='sm'>Contact me</Button></div>
            

            {/* Smaller screen menu button */}
            <button className='md:hidden p-2 text-foreground' onClick={()=>{setmobileMenuOpen((prev)=>!prev)}}>
                {mobileMenuOpen?<X/>:<Menu size={24}/>}
            </button>
        </nav>
        {/* Smaller screen menu list */}
       {mobileMenuOpen && <div className="md:hidden glass-strong animate-fade-in">
            <div className='container p-6 flex flex-col gap-3'>
                {navItems.map((item ,index)=>(
                    <a href={item.href} key={index} className='text-lg text-muted-foreground hover:text-foreground py-2'>{item.label}</a>
                ))}
                <Button>Contact me</Button>
            </div>
        </div>}
    </header>
  )
}

export default Navbar