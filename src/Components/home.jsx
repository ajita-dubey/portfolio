import { FaLinkedin } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";
import profileImg from "../assets/profile.jpeg";
import { Element, Link } from "react-scroll";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
function Home() {
  return (
    <Element name="home">
      <section className="flex items-center justify-center  h-full pt-[100px]   sm:pt-24">
        <div className="w-full max-w-[1120px] px-8 flex items-center justify-between gap-8 sm:flex-row flex-col-reverse">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-lg">Heyyo,I am</p>
              <p className="text-5xl font-medium uppercase bg-gradient-to-r from-yellow-50 to-rose-100 bg-no-repeat bg-bottom w-fit bg-[length:100%_14px]">
                Ajita Dubey
              </p>
            </div>

            <div>
              <p className="text-lg">
                A Curiosity driven frontend developer with design chops
              </p>
              <p className="text-lg">
                {" "}
                I believe its ok to be you ,you is dope..!
              </p>
            </div>

            <div className="flex gap-4 items-center flex-col justify-center sm:flex-row flex-wrap ">
              {/* <VscGithubAlt size={30} />
              <FaLinkedin size={30} /> */}
            {/* </div>
            <div> */}
              <Link
                to="contact"
                className="group dark:border bg-gray-900 text-white px-7 py-3 flex items-center font-outfit gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
              >
                Contact me here{" "}
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>

              <a
                className="group bg-white px-7 py-3  flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack font-outfit border"
                href="https://drive.google.com/file/d/1oCqlAa-Afx-Sn7zK8MVA8aSmN53aCmv-/view?usp=drivesdk"
                target="_blank"
                download
              >
                Download CV{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a>
              <div className="flex items-center justify-center gap-x-4">
             <a href="https://github.com/ajita-dubey" target="_blank">
             <VscGithubAlt size={30} />
              </a> 
              <a href=" https://www.linkedin.com/in/ajita-dubey-bb7361304/" target="_blank">
              <FaLinkedin size={30} />
              </a>
               </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-[105px] rounded-bl">
            <img
              src={profileImg}
              alt="ajita potrate"
              height="200"
              width="300"
              quality="95"
              priority={true}
            />
          </div>
        </div>
      </section>
    </Element>
  );
}
export default Home;
