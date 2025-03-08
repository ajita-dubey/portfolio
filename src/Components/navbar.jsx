import { Link, Element } from 'react-scroll';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

function Navbar(){
   const[isHamOpen,setisHamOpen]= useState(false)

    return(
        <nav className="flex border justify-between  py-5 px-10 font-outfit w-full z-20 fixed 
         bg-white bg-opacity-80 shadow-lg top-0 shadow-black/[0.03] 
         backdrop-blur-[0.5rem] border-opacity-30">
          <span className="text-xl font-medium uppercase cursor-pointer">Ajita Dubey</span>
          <div className="hidden sm:block">
            <div className="flex items-center justify-center gap-x-8">
                <Link className="text-base cursor-pointer hover:bg-[#fafafa]" 
                to="home" smooth={true} duration={500}>Home</Link>
                <Link to="about" smooth={true} duration={500} className='cursor-pointer'>About</Link>
                <Link to='experience' smooth={true} duration={500} className='cursor-pointer'>Experience</Link>
                {/* <Link>Project</Link> */}
                <Link to='contact'smooth={true} duration={500} className='cursor-pointer'>Contact</Link>
            </div>
          </div>
          <Link  to="contact" smooth={true} duration={500} className="hidden sm:block cursor-pointer">Lets Talk</Link> 
          <div className="sm:hidden flex">{isHamOpen===false?<RxHamburgerMenu size={30}  onClick={()=>setisHamOpen(!isHamOpen)}/>
          :<IoClose   size={30} onClick={()=>setisHamOpen(!isHamOpen)}  />}</div>
          {isHamOpen===true?<div className='flex items-center justify-center flex-col absolute top-[66px] sm:hidden
           bg-white w-32 right-0 rounded-lg
           bg-opacity-80 shadow-lg  shadow-black/[0.03] 
         backdrop-blur-[0.5rem] border-opacity-30'>
          <Link className="text-base cursor-pointer py-3 hover:bg-[#fafafa]  border-b text-center border-black " 
          to="home" smooth={true} duration={500}>Home</Link>
                <Link to="about" smooth={true} duration={500}
                 className='cursor-pointer py-3 text-center border-b border-black '>About</Link>
                <Link to='experience' smooth={true} duration={500}
                 className='cursor-pointer py-3 text-center border-b border-black'>Experience</Link>
                {/* <Link>Project</Link> */}
                <Link to='contact'smooth={true} duration={500} className='cursor-pointer py-3 '>Contact</Link>
          </div>:null}
        </nav>

    )
}
export default Navbar