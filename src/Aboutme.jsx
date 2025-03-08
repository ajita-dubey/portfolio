import React from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa6";
import { Element } from 'react-scroll';

function Aboutme() {
  return (
    <Element name='about'>
    <section className='flex justify-center items-center bg-zinc-50 w-full h-full mt-32 font-outfit'>
      <div className='flex justify-center items-center flex-col max-w-3xl py-24 px-4'>
        <h1 className='text-2xl font-semibold w-full text-center mb-4'>A BIT ‘BOUT MY JOURNEY </h1>
       
        <p className='text-base font-light text-center'>I'm a freelance frontend developer based in Ahmedabad, India, with almost 6 years of experience. My journey started at an MNC, then I moved to a startup where I had the chance to build some cool projects that taught me a ton. I began with JavaScript, built apps using Angular, and then switched to React, where I had the opportunity to work on projects from scratch that really shaped my skills in JS and UI development. I don't dive into the back-end too often, but in case you're wondering, I know Node.js, Express & MongoDB. Just a peek behind the curtain!</p>
        <p className='text-base pt-4 font-light  text-center'>
        I've always been passionate about working on projects that push me to grow, learn new things, and collaborate with amazing people. This led me to take the leap into freelancing, where I've had the chance to work with awesome clients. Right now, I'm working with a startup, building sleek UIs with Next.js, Typescript, Tailwind and more.
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
            <div>
              <p className='text-base font-light text-center'><b>Fun fact:</b> I've been learning Figma just for fun, mainly to create templates and get a feel for how the tool works. It's been a great way to boost my creativity and help me design UIs more intuitively. One day, I thought, what better way to apply my Figma knowledge than by designing my own portfolio? And here it is - my very first Figma project!🧨</p>
            </div>
            <div>
              <p className='text-base font-light'>
              Learning advanced TypeScript is something I'm working on, and I try to dedicate time to it whenever I can.
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
