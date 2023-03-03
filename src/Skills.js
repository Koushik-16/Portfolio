import React from 'react'
import html from "./images/html.png"
import css from "./images/css.png"
import js from "./images/js.png"
import firebase from "./images/firebase.png"
import tailwind from "./images/tailwind.png"
import react from "./images/react.png"
import java from "./images/java.png"
import mongo from "./images/mongo.png"
import git from "./images/git.png"


const techs = () => [
    {
        id: 1,
        scr: html,
        title: 'HTML',
        style: 'shadow-orange-500'
    },
    {
        id: 2,
        scr: css,
        title: 'CSS',
        style: 'shadow-blue-500'
    },
    {
        id: 3,
        scr: js,
        title: 'Javascript',
        style: 'shadow-yellow-500'
    },
    {
        id: 4,
        scr: react,
        title: 'React.js',
        style: 'shadow-blue-600'
    },
    {
        id: 5,
        scr: tailwind,
        title: 'Tailwind',
        style: 'shadow-sky-500'
    },
    {
        id: 6,
        scr: firebase,
        title: 'Firebase',
        style: 'shadow-yellow-800'
    },
    {
        id: 7,
        scr: java,
        title: 'Java',
        style: 'shadow-red-600'
    },

    {
        id: 8,
        scr: mongo,
        title: 'Mongo DB',
        style: 'shadow-green-800'
    }
    ,
    {
        id: 9,
        scr: git,
        title: 'Git',
        style: 'shadow-red-600'
    }

]

const Skills = () => {
    return (
        <div name="skills" className=' text-white 
         w-full h-full'     style={{background :'rgb(0, 13, 26)'}}>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                {/* <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Experience</p>
                    <p className='py-6'>This are the technologies I've worked with</p>
                </div> */}
    
                <div className='w-full h-full grid grid-cols-1 text-center sm:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        techs().map(({ id, scr, title, style }) => (
    
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 flex flex-col justify-center items-center rounded-lg ${style}`}>
                        <img src={scr} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                        ))
                    }
                </div>
            </div>
        </div>
      )
}

export default Skills