import Button from './Button'
import './Navbar.css'
const Navbar = () => {
   const navItems = [
        {label:"About",href:"#about"},
        {label:"Experience",href:"#experience"},
        {label:"Skills",href:"#about"},
        {label:"Projects",href:"#about"},
    ]
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-4">
        <nav className="container mx-auto px-7 flex items-center justify-between">

            {/* Logo  */}
            <div className="logo-container">
            <a href="#">
                <img src="logo2.png" alt="logo" className="logo"/>
            </a>
            </div>

            {/* Desktop only nav */}
            <div className='flex items-center gap-1'>
                <div className='glass rounded-full px-3 py-1 flex items-center gap-2'>{navItems.map((item ,index)=>(
                    <a href={item.href} key={index} className='px-4 py-2 text-sm text-muted-foreground hover:text-primary/80 rounded-full hover:font-bold hover:bg-surface'>{item.label}</a>
                ))}</div>
            </div>


            <div><Button size='sm'>Contact me</Button></div>
            
        </nav>
    </header>
  )
}

export default Navbar