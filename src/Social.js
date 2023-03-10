import React from 'react'
import { motion } from "framer-motion";
import { SocialLinks } from './data';

const Social = () => {
  return (
    <div>
        <section
            className="flex flex-col items-center justify-evenly w-full my-24"
          >
            <p className="text-4xl text-gray-400 capitalize mb-5">Follow me on</p>
            <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4">
              {SocialLinks &&
                SocialLinks.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    href={n.link}
                    key={n.id}
                    className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {n.iconSrc}
                    <p className="text-lg text-textBase">{n.name}</p>
                  </motion.a>
                ))}
            </div>
          </section>
    </div>
  )
}

export default Social