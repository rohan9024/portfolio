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
            <div className='hidden bg-white dark:bg-black w-full md:flex fixed top-0 justify-center items-center'>

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

                <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center p-10 `} >Social Media Manager</h1>
            </div>

            <div className='md:hidden bg-white dark:bg-black fixed top-0 w-full flex justify-center items-center p-5 space-x-3'>

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

                <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center  `} >Project Details</h1>
            </div>


            <div className='mt-20 flex md:flex-row flex-col justify-center items-center md:space-x-10 space-y-6 md:space-y-0 shadow-lg border border-gray-300 bg-gray-100 dark:bg-black dark:border-gray-800 md:border-none md:bg-transparent md:shadow-none px-4 mx-4  py-12   rounded-lg'>

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='md:w-[350px] flex justify-center items-center w-full'
                >
                    {/* <Image
                        src='/tce.png'
                        width={1200}
                        height={1200}
                        alt="tce logo"
                        className='w-[150px] md:w-[500px] md:h-[500px] h-[150px] object-cover '
                    /> */}
                    <Image
                        src='/tce.png'
                        width={1200}
                        height={1200}
                        alt="tce logo"
                        className='w-[150px] md:w-[300px] md:h-[500px] h-[150px] object-cover md:object-contain'
                    />

                </motion.div>

                <div className='flex flex-col justify-center items-center md:justify-normal md:items-start space-y-2 md:space-y-5'>
                    <h1 className={`${manrope.className} text-2xl font-bold md:text-3xl lg:text-5xl text-center`}>Social Media Manager</h1>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-xl text-center text-gray-600 `}>Manage your accounts effectively</h1>
                </div>
            </div>

            {/* Problem Statement */}
            <div className='flex flex-col ml-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Problem Statement</h1>

                {/* Description */}
                <div className='space-y-3'>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>
                        •	It becomes very difficult for a person with more than 100k followers to manage his Instagram account in order to boost his reach and is also hectic for the manager to use these Instagram API to view analytics and plan accordingly.<br />
                        •   For all of this complex procedure, we have decided make a web app and mobile application called Social Media Manager) which will make it easier for both.<br />
                        •	There are apps available in the market for managing and automating the profile but the functionalities are limited for only the creator. So, our project will be providing same and additional functionalities for more than one entity.
                    </h1>
                </div>
            </div>


            {/* project objectives */}
            <div className='flex flex-col ml-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Project Objectives</h1>

                {/* Description */}
                <div className='space-y-3'>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>
                        •	The Influencer can schedule post/story.<br />
                        •	The Influencer can view his account insights.<br />
                        •	There is also comments monitoring system.<br />
                        •	There is an auto posting functionality and lets the manager as well to upload stories and posts at a specific time.

                    </h1>
                </div>
            </div>

            {/* Role */}
            <div className='flex flex-col ml-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Role</h1>

                {/* Description */}
                <div className='space-y-5'>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>
                        Full Stack Developer
                    </h1>
                </div>
            </div>


            {/* Project Challenges */}
            <div className='flex flex-col ml-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Project Challenges</h1>

                {/* Description */}
                <div className='space-y-5'>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>
                        •	Making an account for Facebook Graph API [verification, connecting other accounts together]<br />
                        •	Limited Time for the project i.e only 1-2 months<br />
                        •	Schedule Posting<br />
                    </h1>
                </div>
            </div>

            {/* Approach */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Approach</h1>

                {/* Description */}
                <div className='space-y-5'>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>
                        Extreme Programming (XP): XP is an agile methodology that focuses on delivering high-quality software through practices such as test-driven development, pair programming, continuous integration, and frequent customer feedback.
                    </h1>
                </div>
            </div>

            {/* Implementation */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Implementation</h1>

                {/* Description */}
                <div className='space-y-5'>
                    <Image
                        src="/smm1.PNG"
                        width={667}
                        height={457}
                        alt="Social Media Manager Image"
                        className='object-contain  '
                    />
                    <Image
                        src="/smm2.PNG"
                        width={667}
                        height={457}
                        alt="Social Media Manager Image"
                        className='object-contain  '
                    />
                    <Image
                        src="/smm3.PNG"
                        width={667}
                        height={457}
                        alt="Social Media Manager Image"
                        className='object-contain  '
                    />
                    <Image
                        src="/smm4.PNG"
                        width={667}
                        height={457}
                        alt="Social Media Manager Image"
                        className='object-contain  '
                    />
                    <div className='flex flex-col lg:flex-row justify-center items-center lg:space-x-6'>
                    <Image
                        src="/smm5.jpeg"
                        width={200}
                        height={400}
                        alt="Social Media Manager Image"
                        className='object-contain  '
                    />
                    <Image
                        src="/smm6.jpeg"
                        width={667}
                        height={457}
                        alt="Social Media Manager Image"
                        className='object-contain  '
                    />
                    </div>
               

                </div>
            </div>

            {/* Tech Stack */}
            <div className='flex flex-col ml-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96 md:mt-32'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Tech Stack</h1>

                {/* Description */}
                <div className='space-y-3'>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>Web Application: React,Tailwind CSS, Graph API, Firebase</h1>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>Mobile Application: React Native, Expo Go, Tailwind CSS, Graph API, Firebase</h1>
                </div>
            </div>

            {/* Browse other projects */}
            <div className='flex justify-between items-center mx-5 mt-10 md:mr-5 lg:mx-10 xl:mx-96 md:mt-16'>

                <Link
                    href="/netflix-clone"
                    className='flex flex-col md:flex-row justify-center items-center p-2  md:dark:space-x-5 md:dark:space-y-0 dark:space-y-5'>
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
                <Link
                    href="/spotify-clone"
                    className='md:hidden flex flex-col md:flex-row justify-center items-center p-2 dark:space-y-5'>
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
            </div>


        </div >
    )
}

export default page