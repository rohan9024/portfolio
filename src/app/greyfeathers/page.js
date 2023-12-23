"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Inter, Manrope, Raleway } from 'next/font/google';
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
        <div className='w-screen h-auto flex flex-col dark:bg-black dark:text-white'>
            <div className='hidden bg-white dark:bg-black w-full  md:flex fixed top-0 justify-center items-center'>

                <Link
                    href="/experience"
                    className='object-contain rounded-full cursor-pointer p-4 transition hover:bg-gray-300 dark:bg-white hover:duration-150'>
                    <Image
                        src='/back.png'
                        width={25}
                        height={25}
                        alt="back icon"
                    />
                </Link>

                <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center p-10 `} >Project Details</h1>
            </div>

            <div className='md:hidden bg-white dark:bg-black fixed top-0 w-full flex justify-center items-center p-5 space-x-3'>

                <Link
                    href="/experience"
                    className='object-contain rounded-full cursor-pointer p-2 transition hover:bg-gray-300 dark:bg-white hover:duration-150'>
                    <Image
                        src='/back.png'
                        width={20}
                        height={20}
                        alt="back icon"
                    />
                </Link>

                <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center  `} >Project Details</h1>
            </div>


            <div className='mt-20 md:mt-10  dark:mt-32 flex md:flex-row flex-col justify-center items-center space-y-6 md:space-y-0 shadow-lg border border-gray-300 bg-gray-100 md:bg-transparent md:border-none md:shadow-none px-4 mx-4 py-12   rounded-lg'>

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='md:w-[360px] flex justify-center items-center w-full '
                >

                    <Image
                        src='/greyfeathers.jpeg'
                        width={1200}
                        height={1200}
                        alt="tce logo"
                        className='w-[150px] md:w-[300px] md:h-[500px] h-[150px] object-cover md:object-contain dark:rounded-full dark:w-auto dark:h-auto '
                    />

                </motion.div>

                <div className='flex flex-col justify-center md:justify-normal md:items-start items-center space-y-2 md:space-y-5'>
                    <h1 className={`${manrope.className} text-2xl font-bold md:text-5xl text-center md:text-left`}>Frontend Developer</h1>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-xl text-center text-gray-600 md:text-left `}>Built a Resource Management System for a brand</h1>
                </div>
            </div>

            {/* Features */}
            <div className='flex flex-col ml-5 mt-10 space-y-3 md:space-y-5  lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Features</h1>

                {/* Description */}
                <div className='space-y-3'>
                    <h1 className={`${manrope.className} text-sm md:tracking-wide font-normal md:text-lg text-gray-600 `}>
                        • Worked on development of Resource Management System. <br />
                        • Developed frontend Modules and integrated backend. <br />
                        • Managed the whole team and translated client requirements. <br />
                        • Leveraged Knowledge in FastAPI (Python), React.js, MongoDB, Design, UI/UX <br />
                    </h1>
                </div>
            </div>


            {/* Project Challenges */}
            <div className='flex flex-col ml-5 mt-10 space-y-3 md:space-y-5 lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Project Challenges</h1>

                {/* Description */}
                <div className='space-y-5'>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>
                        Faced no challenges since the employer was really amazing and taught me everything from scratch
                    </h1>
                </div>
            </div>

            {/* Implementation */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:space-y-5 lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>UI/UX Design</h1>

                {/* Description */}
                <a
                    href='https://www.figma.com/file/WCJwyXnqxiigqVSQl1wP2j/J%26JP?type=design&node-id=0-1&t=basHJayZ1u4oWUc8-0'
                    className='space-y-5'>
                    <Image
                        src="/greyfeathers-figma.png"
                        width={667}
                        height={457}
                        alt="figma Image"
                        className='object-contain  '
                    />
                </a>
            </div>


            {/* Browse other projects */}
            <div className='flex justify-between items-center mx-5 mt-10 md:mt-20 lg:mx-10 xl:mx-96 pb-10'>

                <Link
                    href="/netflix-clone"
                    className='flex flex-col md:flex-row justify-center items-center p-2 md:dark:space-x-5 md:dark:space-y-0 dark:space-y-5 '>
                    <div
                        className='object-contain rounded-full cursor-pointer p-4 transition hover:bg-gray-300 dark:bg-white hover:duration-150'>
                        <Image
                            src='/left.png'
                            width={25}
                            height={25}
                            alt="left icon"
                        />
                    </div>

                    <h1 className={`${raleway.className} text-md font-bold md:text-3xl`} >Netflix Clone</h1>
                </Link>

                <Link
                    href="/spotify-clone"
                    className='md:hidden flex flex-col justify-center items-center p-2 dark:space-y-5'>
                    <div
                        className='object-contain rounded-full cursor-pointer p-4 transition hover:bg-gray-300 dark:bg-white hover:duration-150'>
                        <Image
                            src='/right.png'
                            width={25}
                            height={25}
                            alt="right icon"
                        />
                    </div>
                    <h1 className={`${raleway.className} text-md font-bold md:text-3xl  `} >Spotify Clone</h1>
                </Link>

                <Link
                    href="/spotify-clone"
                    className='hidden md:flex flex-col md:flex-row justify-center items-center p-2 dark:space-x-5'>
                    <h1 className={`${raleway.className} text-md font-bold md:text-3xl  `} >Spotify Clone</h1>

                    <div
                        className='object-contain rounded-full cursor-pointer p-4 transition hover:bg-gray-300 dark:bg-white hover:duration-150'>
                        <Image
                            src='/right.png'
                            width={25}
                            height={25}
                            alt="right icon"
                        />
                    </div>
                </Link>
            </div>


        </div >
    )
}

export default page