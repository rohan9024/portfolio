"use client"

import { Inter, Manrope, Raleway } from 'next/font/google';
import React, { useEffect, useState } from 'react'

import achievements from "../../../achievement.json"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"

const raleway = Raleway({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});
const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
});
const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});
function page() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme')
      if (theme === 'dark') setDarkMode(true)
    }

  }, [])


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark")
    }
    else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme", "light")
    }

  }, [darkMode])

  return (
    <div className='flex justify-center items-center dark:bg-black dark:text-white'>
      <div>
        {/* Back button */}
        <div className='hidden md:flex justify-center items-center'>

          <Link
            href="/"
            className='object-contain rounded-full cursor-pointer p-4 transition hover:bg-gray-300 dark:bg-white hover:duration-150'>
            <Image
              src='/back.png'
              width={25}
              height={25}
              alt="back icon"
            />
          </Link>

          <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center p-10 `} >Achievements</h1>
        </div>

        <div className='md:hidden flex justify-center items-center'>

          <Link
            href="/"
            className='object-contain rounded-full cursor-pointer p-2 transition hover:bg-gray-300 dark:bg-white hover:duration-150'>
            <Image
              src='/back.png'
              width={20}
              height={20}
              alt="back icon"
            />
          </Link>

          <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center p-10 `} >Achievements</h1>
        </div>

        <div class="flex flex-col space-y-14 justify-center items-center md:grid md:grid-rows-4 md:grid-flow-col md:gap-4 md:space-y-0 md:place-content-center">
          {
            achievements.map((achievement) => (
              <motion.div
                initial={{ opacity: 0, y: -120 }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                class="flex flex-col justify-center items-center lg:w-[700px] lg:h-[700px] self-center">
                <Image
                  src={achievement.banner}
                  width={400}
                  height={400}
                  className='object-cover max-h-[400px] mx-4 lg:w-[550px] lg:h-[500px] md:object-cover '
                />

                <h1 className={`${raleway.className} text-2xl font-semibold md:text-3xl mx-7 my-3 text-center `}>{achievement.name}</h1>
                <h1 className={`${raleway.className} text-lg  md:text-xl mx-7 my-3 text-center `}>{achievement.desc}</h1>
                {
                  achievement.route && (
                    <Link href={`/${achievement.route}`} className={`${raleway.className} text-xl rounded-full border border-gray-600 px-6 py-2 my-4 transition ease-in-out delay-150 hover:bg-gray-300 duration-150 cursor-pointer`}>More Info</Link>
                  )
                }

              </motion.div>
            ))
          }

        </div>



      </div>
    </div>
  )
}

export default page