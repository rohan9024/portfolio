"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Inter, Manrope, Raleway } from 'next/font/google';
import { motion } from "framer-motion"
import NI from "../../../assets/netflix.png"
import Loader from '../../../components/Loader';
import bus from "../../../assets/bus.gif"

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
    const [loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        // Simulate loading delay
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

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
        <>

            <div className='w-screen h-auto flex flex-col dark:bg-black dark:text-white'>
                <div className='hidden bg-white dark:bg-black w-full  md:flex fixed top-0 justify-center items-center'>

                    <Link
                        href="/"
                        className='object-contain rounded-full cursor-pointer p-4 transition dark:bg-white hover:bg-gray-300 hover:duration-150'>
                        <Image
                            src='/back.png'
                            width={25}
                            height={25}
                            alt="back icon"
                        />
                    </Link>

                    <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center p-10 `} >Project Details</h1>
                </div>

                <div className='md:hidden bg-white dark:bg-black  fixed top-0 w-full flex justify-center items-center p-5 space-x-3'>

                    <Link
                        href="/"
                        className='object-contain rounded-full cursor-pointer p-2 transition dark:bg-white hover:bg-gray-300 hover:duration-150'>
                        <Image
                            src='/back.png'
                            width={20}
                            height={20}
                            alt="back icon"
                        />
                    </Link>

                    <h1 className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center  `} >Project Details</h1>
                </div>


                <div className=' mt-20 md:mt-10 flex md:flex-row flex-col justify-center items-center space-y-6 md:space-y-0 shadow-lg border border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-black md:bg-transparent md:border-none md:shadow-none px-4 mx-4 py-12   rounded-lg'>

                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 1 }}
                        className='md:w-[360px] flex justify-center items-center w-full '
                    >

                        <Image
                            src={bus}
                            width={1200}
                            height={1200}
                            alt="bus gif"
                            className='w-[150px] md:w-[300px] md:h-[500px] h-[150px] object-cover md:object-contain'
                        />

                    </motion.div>

                    <div className='flex flex-col justify-center md:justify-normal md:items-start items-center space-y-2 md:space-y-5'>
                        <h1 className={`${manrope.className} text-3xl font-bold md:text-5xl text-center md:text-left`}>Bus Tracking Application</h1>
                        <h1 className={`${manrope.className} hidden md:flex font-semibold md:text-4xl text-center md:text-left`}>Stay on Course, Know Your Bus's Force</h1>
                        <h1 className={`${manrope.className} text-sm  font-normal md:text-xl text-center text-gray-600 md:text-left `}>Track Your Journey, Arrive with Confidence</h1>
                    </div>
                </div>

                {/* Features */}
                <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:space-y-5  lg:mx-10 xl:mx-96'>
                    {/* title */}
                    <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Features</h1>

                    {/* Description */}
                    <div className='space-y-3'>
                        <h1 className={`${manrope.className} text-sm md:tracking-wide font-normal md:text-lg text-gray-600 `}>
                            <span className='font-bold'>•	Real-Time Bus Tracking: </span>Users can track the location of buses in real-time on the map. <br />
                            <span className='font-bold'>•   Bus Search: </span>Users can search for buses by their bus number to track their location. <br />
                            <span className='font-bold'>•   Route Planning: </span>Users can enter their source and destination locations to view the buses that operate on that route. <br />
                            <span className='font-bold'>•   Interactive Map: </span>The application provides an interactive map interface to display the bus locations and routes. <br />
                            <span className='font-bold'>•   Favorites: </span>Users can save their frequently used bus routes or buses as favorites for quick access. <br />
                            <span className='font-bold'>•   Notifications: </span>The application can send push notifications to users regarding bus arrivals, delays, or other relevant updates. <br />
                            <span className='font-bold'>•   User Authentication: </span>Users can create accounts and log in to personalize their bus tracking experience. <br />
                            <span className='font-bold'>•   Feedback and Ratings: </span>Users can provide feedback and ratings for buses, helping other users make informed decisions. <br />
                            <span className='font-bold'>•   Integration with Firebase: </span>The application utilizes Firebase for backend services, such as user authentication, data storage, and real-time updates. <br />
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
                            • The objective is to enhance the overall experience of using public transportation by providing users with an efficient and reliable bus tracking system. <br />
                            • Enable users to track the location of buses in real-time, allowing them to plan their journeys better and reduce waiting times. <br />
                            • Implement a search functionality that allows users to easily find buses by their bus number or search by source and destination to find relevant bus routes. <br />
                            • Design an intuitive and user-friendly interface that makes it easy for users to navigate, search for buses, view routes, and track bus locations. <br />
                            • Integrate with reliable data sources, such as Firebase and real-time APIs, to fetch and display accurate bus location and route information. <br />
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
                            •	Integrating React Native Maps was quite new. <br />
                        </h1>
                    </div>
                </div>

                {/* Implementation */}
                <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
                    {/* title */}
                    <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Implementation</h1>

                    {/* Description */}
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 '>
                        <Image
                            src='/bustracking-1.jpg'
                            width={800}
                            height={457}
                            alt="Bus tracking application"
                            className='object-contain  border border-gray-300 '
                        />
                        <Image
                            src='/bustracking-2.jpg'
                            width={800}
                            height={457}
                            alt="Bus tracking application"
                            className='object-contain  border border-gray-300'
                        />
                        <Image
                            src='/bustracking-3.jpg'
                            width={800}
                            height={457}
                            alt="Bus tracking application"
                            className='object-contain  border border-gray-300'
                        />
                        <Image
                            src='/bustracking-4.jpg'
                            width={800}
                            height={457}
                            alt="Bus tracking application"
                            className='object-contain  border border-gray-300'
                        />
                        <Image
                            src='/bustracking-5.jpg'
                            width={800}
                            height={457}
                            alt="Bus tracking application"
                            className='object-contain  border border-gray-300'
                        />
                        <Image
                            src='/bustracking-6.jpg'
                            width={800}
                            height={457}
                            alt="Bus tracking application"
                            className='object-contain  border border-gray-300'
                        />
                    </div>
                </div>

                {/* Tech Stack */}
                <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96 md:mt-32'>
                    {/* title */}
                    <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Tech Stack</h1>

                    {/* Description */}
                    <div className='space-y-3'>
                        <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>React Native, React Native Maps, Expo Go, Firebase</h1>
                    </div>
                </div>



                {/* Github Repository */}
                <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96 md:mt-10'>
                    {/* title */}
                    <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Github Repository</h1>

                    {/* Description */}
                    <div className='space-y-3 '>
                        <a href="https://github.com/rohan9024/bus-tracking-app" className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}>https://github.com/rohan9024/bus-tracking-app</a>
                    </div>
                </div>


                {/* Browse other projects */}
                <div className='flex justify-between items-center mx-5 mt-10 md:mr-5 lg:mx-10 xl:mx-96 md:mt-16'>

                    <Link
                        href="/spotify-clone"
                        className='flex flex-col md:flex-row justify-center items-center p-2 md:dark:space-x-5 md:dark:space-y-0 dark:space-y-5'>
                        <div
                            className='object-contain rounded-full cursor-pointer p-4 transition hover:bg-gray-300 dark:bg-white hover:duration-150'>
                            <Image
                                src='/left.png'
                                width={25}
                                height={25}
                                alt="left icon"
                            />
                        </div>

                        <h1 className={`${raleway.className} text-md font-bold md:text-3xl`} >Spotify Clone</h1>
                    </Link>

                    <Link
                        href="/social-media-manager"
                        className='hidden md:flex flex-col md:flex-row justify-center items-center p-2  md:dark:space-x-5'>
                        <h1 className={`${raleway.className} text-md font-bold md:text-3xl  `} >Social Media Manager</h1>

                        <div
                            className='object-contain rounded-full cursor-pointer p-4 transition dark:bg-white hover:bg-gray-300 hover:duration-150'>
                            <Image
                                src='/right.png'
                                width={25}
                                height={25}
                                alt="right icon"
                            />
                        </div>

                    </Link>
                    <Link
                        href="/social-media-manager"
                        className='md:hidden flex flex-col md:flex-row justify-center items-center p-2 dark:space-y-5 '>
                        <div
                            className='object-contain rounded-full cursor-pointer p-4 transition dark:bg-white  hover:bg-gray-300 hover:duration-150'>
                            <Image
                                src='/right.png'
                                width={25}
                                height={25}
                                alt="right icon"
                            />
                        </div>

                        <h1 className={`${raleway.className} text-md font-bold md:text-3xl  `} >Social Media Manager</h1>
                    </Link>
                </div>



            </div >



        </>
    )

}

export default page