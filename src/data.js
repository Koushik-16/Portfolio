import {
    IoCodeWorking,
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoFacebook,
    IoLogoInstagram,
  } from "react-icons/io5";
  import dropit from "./images/Dropit.png"
  import codepen from "./images/Codepen.png"
  import keeper from "./images/keeper.png"
  import news from "./images/News.jpg"
  import notes from "./images/Notes.jpg"
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

  
  export const Experience = [
    {
      id: 1,
      date: "2020 - Present",
      iconsSrc: <IoCodeWorking />,
      title: "B.Tech in Computer Science and Engineering",
      location: "Ramkrishna Mahato Government Engineering College, Purulia",
      description:
        "CGPA : 9.34",
    },
    {
      id: 2,
      date: "2020",
      iconsSrc: <IoCodeWorking />,
      title: "Class XII",
      location: "Midnapore Collegiate School, Midnapore",
      description:
        "Percentage : 86.6 %",
    },
    {
      id: 3,
      date: "2018",
      iconsSrc: <IoCodeWorking />,
      title: "Class X",
      location: "Midnapore Collegiate School, Midnapore",
      description:
        "Percentage : 85.5 %",
    }
    
  ];

  
  export const Projects = [
    {
      id: 1,
      name: "Drop-it",
      imageSrc: dropit,
      techs: "React Js, Firebase, Chakra UI",
      github: "https://github.com/Koushik-16/Drop-it",
      link : "https://dropit-9e59f.web.app/"
    },
    {
      id: 2,
      name: "Notes Application",
      imageSrc: notes,
      techs: "Android Studio, Firebase,Java",
      github: "https://github.com/Koushik-16/Notes-Application",
      link : "https://drive.google.com/file/d/1ogOIsaBqelbDst9-bHai607XcagxOlOI/view?usp=drivesdk"
    },
    {
      id: 3,
      name: "Codepen Clone",
      imageSrc: codepen,
      techs: "React Js, JavaScript",
      github: "https://github.com/Koushik-16/Codepen-Clone",
      link : "https://koushik-16.github.io/Codepen-Clone/"
    },
    {
      id: 4,
      name: "News Application",
      imageSrc: news,
      techs: "Android Studio, Java",
      github: "https://github.com/Koushik-16/NewsApp",
      link : "https://drive.google.com/file/d/1utrs_mUUmHkWO5zp_ajkP4039xEy0Bsi/view?usp=drivesdk"
    },
    {
      id: 5,
      name: "Keeper",
      imageSrc: keeper,
      techs: "React Js , JavaScript",
      github: "https://github.com/Koushik-16/Keeper",
      link : "https://koushik-16.github.io/Keeper/"
    }
  ];


  export const techs = () => [
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

];
  
  export const SocialLinks = [
    {
      id: 1,
      iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
      name: "GitHub",
      link: "https://github.com/Koushik-16",
    },
    
    {
      id: 2,
      iconSrc: (
        <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
      ),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/koushikdandapat/",
    },
    {
      id: 3,
      iconSrc: (
        <IoLogoFacebook className="text-blue-500 text-3xl cursor-pointer" />
      ),
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100028179691016",
    },
    {
      id: 4,
      iconSrc: (
        <IoLogoInstagram className="text-pink-500 text-3xl cursor-pointer" />
      ),
      name: "Instagram",
      link: "https://www.instagram.com/koushik.dandapat/",
    },
  ];