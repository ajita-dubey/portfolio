import React from "react";
import { Element } from "react-scroll";

function Experience() {
  return (
    <Element name="experience">
    <section className="bg-zinc-50 sm:h-screen h-full ">
      <div className="flex  flex-col justify-center items-center w-full">
        <h1 className=" uppercase text-2xl font-semibold w-full text-center ">
          MY Experience
        </h1>
        <div className="flex flex-wrap justify-center items-center  mt-10 gap-7">
          <div className="border shadow-md p-5 rounded-xl sm:w-[500px] w-[300px] max-w-full h-70">
            <h2 className="font-semibold text-lg ">B.Tech in Computer Science & Engineering</h2>
            <small>
              Kamla nehru institute of physical and social sciences (2022 -
              2025)
            </small>
            <p className="mt-2">
              A four-year bachelor's degree program emphasizing software
              development, algorithms, data structures, networking, artificial
              intelligence, and cybersecurity. It merges theoretical
              understanding with real-world applications, equipping students for
              professions in software engineering, data analysis, and
              information technology.
            </p>
          </div>
          <div className="border shadow-md p-5 rounded-xl sm:w-[500px] w-[300px] max-w-full h-70">
            <h2 className="font-semibold text-lg ">Diploma in Computer Science & Engineering</h2>
            <small>
             Government Girls Polytechnic Amethi (2019 - 2021)
            </small>
            <p className="mt-2">
            A three-year diploma course in Computer Science and Engineering (CSE) that focuses on software development, algorithms, data structures, networking. This program combines theoretical knowledge with practical experience, providing students with the skills required for careers in software development, IT support, and system administration.
            </p>
          </div>
          <div className="border shadow-md p-5 rounded-xl sm:w-[500px] w-[300px] max-w-full h-70">
            <h2 className="font-semibold text-lg ">High School Education</h2>
            <small>
             Indira Subhash Inter Collage (2019 - 2021)
            </small>
            <p className="mt-2">
            Finished high school education with a solid academic basis, showing skill in Mathematics, Science, and English. Enhanced critical thinking, problem-solving, and communication abilities. Involved in activities outside of academics, including athletics and community service.
            </p>
          </div>
          
        </div>
        
      </div>
    </section>
    </Element>
  );
}
export default Experience;
