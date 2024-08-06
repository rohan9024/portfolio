"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Inter, Manrope, Raleway } from 'next/font/google';
import { motion } from "framer-motion"
import spotify from "../../../assets/spotify.png"


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
            <div className='hidden bg-white dark:bg-black  w-full  md:flex fixed top-0 justify-center items-center'>

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

                <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center p-10 `} >Project Details</h1>
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
                    className='md:w-[400px] flex justify-center items-center w-full '
                >

                    <Image
                        src='/spotify.png'
                        width={1200}
                        height={1200}
                        alt="spotify logo"
                        className='w-[150px] md:w-[300px] md:h-[500px] h-[150px] object-cover md:object-contain'
                    />

                </motion.div>

                <div className='flex flex-col justify-center md:justify-normal md:items-start items-center space-y-2 md:space-y-5'>
                    <h1 className={`${manrope.className} text-3xl font-bold md:text-5xl text-center md:text-left`}>Spotify Clone</h1>
                    <h1 className={`${manrope.className} hidden md:flex font-semibold md:text-4xl text-center md:text-left`}>Harmonize Your Melodies</h1>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-xl text-center text-gray-600 md:text-left `}>Experience the Ultimate Music Streaming Journey</h1>
                </div>
            </div>

            {/* Features */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:space-y-5  lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Features</h1>

                {/* Description */}
                <div className='space-y-3'>
                    <h1 className={`${manrope.className} text-sm md:tracking-wide font-normal md:text-lg text-gray-600 `}>
                        • Used Spotify API for fetching user's playlists, liked songs, etc. <br />
                        • Implemented Spotify User Authentication. <br />
                        • Utilized React.js, Redux, Firebase. <br />
                    </h1>
                </div>
            </div>


            {/* project objectives */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Project Objectives</h1>

                {/* Description */}
                <div className='space-y-3'>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>
                        •	Develop a Spotify clone web application that replicates the core functionalities and user experience of the original Spotify platform. <br />
                        •	Integrate the Spotify API to fetch user-specific data, such as playlists, liked songs, and user profile information. <br />
                        •	Implement secure user authentication using Spotify's authentication system to ensure only authorized users can access their personalized music content. <br />
                        •	Utilize React.js and Redux to create a dynamic and responsive user interface with efficient state management for seamless navigation and interaction. <br />
                        •	Employ Firebase as the backend platform for data storage, real-time updates, and reliable deployment of the application. <br />
                    </h1>
                </div>
            </div>

            {/* Role */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
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
            <div className='flex flex-col ml-5  mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Project Challenges</h1>

                {/* Description */}
                <div className='space-y-5'>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>
                        •	Integration with Spotify API: Working with third-party APIs can pose challenges, such as understanding the API documentation, handling authentication, and managing rate limits. <br />
                        •	User Authentication: Implementing a secure and reliable user authentication system can be complex, especially when integrating with an external service like Spotify. <br />
                        •	Data Management: Handling and organizing large amounts of user-specific data, such as playlists and liked songs, requires efficient data management strategies to ensure optimal performance. <br />
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
                        src={spotify}
                        width={800}
                        height={457}
                        alt="Spotify Clone Image"
                        className='object-contain  '
                    />
                </div>
            </div>

            {/* Tech Stack */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96 md:mt-32'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Tech Stack</h1>

                {/* Description */}
                <div className='space-y-3'>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>React, Redux, Firebase</h1>
                </div>
            </div>


            {/* Github Repository */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96 md:mt-10'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Github Repository</h1>

                {/* Description */}
                <div className='space-y-3 '>
                    <a href="https://github.com/rohan9024/spotify-clone" className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}>https://github.com/rohan9024/spotify-clone</a>
                </div>
            </div>


            {/* Deployment */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96 md:mt-10'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Deployment</h1>

                {/* Description */}
                <div className='space-y-3'>
                    <a href="https://spotify-21c2b.firebaseapp.com/" className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}>https://spotify-21c2b.firebaseapp.com/</a>
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
                    href="/codeshastra"
                    className='hidden md:flex flex-col md:flex-row justify-center items-center p-2 dark:space-x-5'>
                    <h1 className={`${raleway.className} text-md font-bold md:text-3xl  `} >Ettarra Cafe</h1>
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
                    href="/codeshastra"
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

                    <h1 className={`${raleway.className} text-md font-bold md:text-3xl  `} >Ettarra Cafe</h1>
                </Link>
            </div>



        </div >
    )
}

export default page