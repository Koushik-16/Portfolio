import React from 'react'
import leetcode from "./images/leetcode.png"
import codechef from "./images/codechef.png"
import codeforces from "./images/codeforces.png"
import koush from "./images/koush.jpg";
import { IoCloudDownload, IoCloudUpload, IoCodeWorking, IoDownload } from "react-icons/io5";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const Home = () => {
  return (
    <section
    className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
    id="about"
  >

    <div className="w-full h-420 flex items-center justify-center">
      <div className="w-275 h-340 relative bg-emerald-200 rounded-md">
        <img
          src={koush}
          alt=""
          className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
        />
      </div>
    </div>

    <div className="w-full h-420 flex flex-col items-center justify-center ">
      <p className="text-lg text-textBase text-center">
      I am a 4th year UG student at Ramkrishna Mahato Government Engineering College.
Currently I am learning Web Development (intermediate) using React.js and Node.js .
I have developed a online video blogging website and a real time chat application using react.js and firebase.
I am also active at Leetcode, Codechef, and Codeforces.
I have solved 1000+ questions on Leetcode and participated in 29 contests (rating - 1916)
I have attended 21 contests on Codechef (rating - 1750, 3 star).
I have participated in 12 contests on CodeForces ( rating - 1229, pupil). 
I also have knowledge about OOPS and OS.
      </p>

      <div className='flex flex-row  gap-7 my-5'>
        <a href="https://leetcode.com/Koushikdandapat/" target="_blank"> <div className='rounded-full background-white w-full md:w-auto px-5 md:px-5 py-5 border border-zinc-800  hover:border-zinc-600 duration-100 hover:scale-105 duration-500 ease-in-out cursor-pointer flex items-center justify-center'><img src={leetcode} /></div> </a>



        <a href="https://www.codechef.com/users/koushik16" target="_blank"> <div className='rounded-full background-white w-full md:w-auto px-5 md:px-5 py-5 border border-zinc-800  hover:border-zinc-600 duration-100 hover:scale-105 duration-500 ease-in-out cursor-pointer flex items-center justify-center'><img src={codechef} /></div> </a>
        <a href="https://codeforces.com/profile/Koushik16" target="_blank">  <div className='rounded-full background-white w-full md:w-auto px-5 md:px-5 py-5 border border-zinc-800  hover:border-zinc-600 duration-100 hover:scale-105 duration-500 ease-in-out cursor-pointer flex items-center justify-center'><img src={codeforces} /></div> </a>
      </div>


      <a href="https://drive.google.com/uc?export=download&id=1zhgWFTkXl_FO1Zdk2ssmpHbeXknhpnHj">
        <button className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
          <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <CloudDownloadIcon />  Download CV
          </span>
        </button>
      </a>

    </div>
  </section>
  )
}

export default Home