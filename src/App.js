import React from 'react';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import styles from "./index.css"

import Footer from './Footer';
import Skills from './Skills';
import Home from './Home';
import Education from './Education';
import Project from './Project';
import Social from './Social';

function App() {

  const [isActive, setIsActive] = useState(false);


  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative  pb-20"
        style={{ background: 'rgb(0, 13, 26)' }}
      >
        <nav className="w-full px-6 z-50  fixed inset-x-0 top-2 flex justify-center items-center ">
          <div className=" w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
            <p className="text-lg text-slate-200 font-medium">Koushik Dandapat</p>
            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Home
              </a>

              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Projects
              </a>

              <a
                href="#skills"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Skills
              </a>
              <a
                href="#contacts"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Contact
              </a>
              <a
                href="https://drive.google.com/file/d/1zhgWFTkXl_FO1Zdk2ssmpHbeXknhpnHj/view?usp=share_link" target="_blank"
                className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
              >
                Resume
              </a>
            </div>

            <motion.div
              whileTap={{ scale: 0.6 }}
              className="block md:hidden  ml-auto cursor-pointer"
              onClick={() => { setIsActive(!isActive); }}
            >
              <IoMenu className="text-2xl text-textBase " />
            </motion.div>



            {isActive && (
              <motion.div
                // initial={{ opacity: 0, scale: 0.5 }}
                // animate={{ opacity: 1, scale: 1.1 }}
                // exit={{ opacity: 0, scale: 0.5 }}
                // transition={{ delay: "0.1s", type: "spring" }}
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>

                <a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>

                <a
                  href="#skills"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Skills
                </a>
                <a
                  href="#contacts"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>
                <a
                  href="https://drive.google.com/file/d/1zhgWFTkXl_FO1Zdk2ssmpHbeXknhpnHj/view?usp=share_link" target="_blank"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Resume
                </a>
              </motion.div>
            )}

          </div>
        </nav>

        <main className="w-[80%] mt-4" id='home' >

         
            <Home />
       

          <Education />



          <div id="projects">

            <div className='flex items-center justify-center'>
              <p className='text-textBase text-4xl mt-10 font-semibold'>Projects</p>
            </div>

            <Project />

          </div>


          <div id="skills">
            <div className='flex items-center justify-center'>
              <p className='text-textBase text-4xl my-10 font-semibold '>Skills</p>
            </div>
            <Skills />
          </div>



          <div id="contacts">
            <Social />
          </div>



        </main>

        <Footer />

      </div>

    </AnimatePresence>
  );
}

export default App;
