import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {Experience} from "./data";

const Education = () => {
  return (
    <div>  <div className='flex items-center justify-center' >
    <p className='text-textBase text-4xl my-10 font-semibold '>Education</p>
    </div>

   

   <section className="w-full flex items-center justify-center">
     <VerticalTimeline>


       {Experience && Experience.map((n) => (
         <VerticalTimelineElement
           key={n.id}
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'rgb(8, 26, 43)', color: '#888' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(8, 26, 43)' }}
           date={n.date}
           iconStyle={{ background: 'rgb(8, 26, 43)', color: '#888' }}
           icon={n.iconsSrc}
         >
           <h3 className="vertical-timeline-element-title">{n.title}</h3>
           <h4 className="vertical-timeline-element-subtitle">{n.location}</h4>
           <p>
             {n.description}
           </p>
         </VerticalTimelineElement>
       ))}
     </VerticalTimeline>

     
   </section></div>
  )
}

export default Education