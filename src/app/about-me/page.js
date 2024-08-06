"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Inter, Manrope, Raleway } from 'next/font/google';
import Image from 'next/image';
import { motion } from 'framer-motion';


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
    <div className='flex flex-col justify-center items-center dark:bg-black dark:text-white p-6 h-screen'>
      <div className='hidden md:flex justify-center items-center'>

        <Link
          href="/"
          className='object-contain rounded-full cursor-pointer p-4 transition hover:bg-gray-300 dark:bg-white hover:duration-150 '>
          <Image
            src='/back.png'
            width={25}
            height={25}
            alt="back icon"
            className=''
          />
        </Link>

        <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center p-10 `} >About Me</h1>
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

        <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center p-10 `} >About Me</h1>
      </div>

      <div className='flex flex-col justify-center items-center md:flex-row md:justify-evenly md:items-center md:space-x-10 md:my-10'>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className='md:w-1/2 flex justify-center items-center w-full'

        >
          <Image
            src='/me.jpg'
            width={1200}
            height={1200}
            alt="my image"
            className='w-[500px] md:h-[500px] h-[350px] object-cover rounded-full'
          />
        </motion.div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className='md:w-1/2 space-y-4 w-full my-10 '
        >
          <h1 className={`${raleway.className} text-xl tracking-wide font-bold md:text-3xl text-center    `} >Hey everyone👋 I'm Rohan Wandre</h1>
          <h1 className={`${raleway.className} text-sm tracking-wide font-normal md:text-xl  text-center   `} >React Native Developer | Full Stack Developer | Open Source</h1>
        </motion.div>

      </div>



    </div>
  )
}

export default page