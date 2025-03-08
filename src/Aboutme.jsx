import React from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa6";
import { Element } from 'react-scroll';
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
function Aboutme() {
  return (
    <Element name='about'>
    <section className='flex justify-center items-center bg-zinc-50 w-full h-full mt-32 font-outfit'>
      <div className='flex justify-center items-center flex-col max-w-3xl py-24 px-4'>
        <h1 className='text-2xl font-semibold w-full text-center mb-4'>A BIT ‘BOUT MY JOURNEY </h1>
       
        <p className='text-base font-light text-center'>I am from Sultanpur. I am currently in the final year of my B.Tech in 
          Computer Science & Engineering,
           which will be completed in May. Before this, 
           I completed my diploma in CSE with 76% and secured 83% in my 10th grade.</p>
        <p className='text-base pt-4 font-light  text-center'>
        I have done a 3-month training in HTML, CSS, and JavaScript, at Dizi Global solutions pvt Ltd in Varansi and currently,
         I am working on a weather application to improve my skills. 
        I enjoy learning new things and always try to give my best in any work I do.
        </p>
        <div className=' flex flex-col pt-4 text-justify w-full'>
          <p className='text-base   text-center font-semibold '>
          Here's some tech and frameworks I love and work with:
          </p>
          <div className=' flex flex-wrap gap-3 justify-center items-center pt-4'>
            <div className='flex items-center justify-center p-2 rounded border gap-x-3 w-fit'>
            <IoLogoJavascript />
             <span>JavaScript</span>
            </div>
            <div className='flex items-center justify-center p-2 rounded border gap-x-3 w-fit '>
            <FaReact />
            <span>React</span>
            </div>
            <div className='flex items-center justify-center p-2 rounded border gap-x-3 w-fit ' >
            <RiTailwindCssFill />
            <span>Tailwind CSS</span>
            </div>
            <div className='flex items-center justify-center p-2 rounded border gap-x-3 w-fit '>
            <FaFigma />
            <span>Figma</span>
            </div>
            <div className='flex items-center justify-center p-2 rounded border gap-x-3 w-fit '>
            <IoLogoHtml5 />
            <span>HTML</span>
            </div>
            <div className='flex items-center justify-center p-2 rounded border gap-x-3 w-fit '>
            <FaCss3Alt />
            <span>CSS</span>
            </div>
            <div className='flex items-center justify-center p-2 rounded border gap-x-3 w-fit '>
            <FaJava />
            <span>Java</span>
            </div>
            <div>
              <p className='text-base font-light text-center'>
               I have strong leadership skills and can manage tasks well.
               My only weakness is that I take a little extra time to complete tasks because I focus on doing them perfectly. 
              Apart from academics, I love singing and dancing.</p>
            </div>
            <div>
              <p className='text-base font-light'>
              I am looking forward to starting my career in the corporate sector, where I can learn and grow. 
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </section>
    </Element>
  )
}

export default Aboutme
