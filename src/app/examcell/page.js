"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Inter, Manrope, Raleway } from 'next/font/google';
import { motion } from "framer-motion"
import NI from "../../../assets/netflix.png"

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


            <div className='mt-20 dark:mt-32 dark:space-x-10  md:mt-10 flex md:flex-row flex-col justify-center items-center space-y-6 md:space-y-0 shadow-lg border border-gray-300 bg-gray-100 dark:bg-black dark:border-gray-800 md:bg-transparent md:border-none md:shadow-none px-4 mx-4 py-12   rounded-lg'>

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='md:w-[360px] flex justify-center items-center w-full dark:bg-white '
                >

                    <Image
                        src='/siesLogo.png'
                        width={1200}
                        height={1200}
                        alt="siesLogo"
                        className='w-[150px] md:w-[300px] md:h-[500px] h-[150px] dark:h-44 object-cover md:object-contain'
                    />

                </motion.div>

                <div className='flex flex-col justify-center md:justify-normal md:items-start items-center space-y-2 md:space-y-5'>
                    <h1 className={`${manrope.className} text-3xl font-bold md:text-5xl text-center md:text-left`}>Examcell for SIES GST</h1>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-xl text-center text-gray-600 md:text-left `}>Simplify Exam Management, Elevate Education</h1>
                </div>
            </div>

            {/* Features */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:space-y-5  lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Features</h1>

                {/* Description */}
                <div className='space-y-3'>
                    <h1 className={`${manrope.className} text-sm md:tracking-wide font-normal md:text-lg text-gray-600 `}>
                        •	Implemented Firebase for seamless deployment and real-time updates. <br />
                        •	Dynamic hall ticket generation for students based on their department. <br />
                        •	Firebase integration for secure storage and retrieval of exam results. <br />
                        •	Intuitive interface for students to quickly view exam-related material <br />
                        •	Firebase Cloud Messaging for instant push notifications. <br />
                        •	Admin panel to broadcast important updates to students efficiently. <br />
                        •	Designed a user-friendly interface for students to easily access and view exam timetables. <br />
                        •	Firebase integration for efficient timetable updates. <br />
                        •	Secure authentication and authorization for staff using Firebase Authentication. <br />
                        •	Simple yet powerful admin dashboard for easy uploading and management of exam-related data. <br />
                        •	Utilized Next.js for a fast and responsive web application. <br />
                        •	Tailwind CSS for a modern and consistent design across devices. <br />
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
                        •	Provide students with a user-friendly platform to download hall tickets based on their department. <br />
                        •	Ensure a seamless and efficient process for accessing exam-related information.<br />
                        •	Implement a robust system for securely storing and retrieving exam results.<br />
                        •	Enable students to easily and transparently view their performance through an intuitive interface.<br />
                        •	Implement Firebase Cloud Messaging to deliver instant notifications to students.<br />
                        •	Facilitate quick and effective communication of important updates and announcements.<br />
                        •	Develop an accessible and user-friendly interface for students to view and download exam timetables.<br />
                        •	Utilize Firebase for efficient updates to the exam timetable.<br />
                        •	Create a secure admin panel with Firebase Authentication for staff members.<br />
                        •	Provide staff with a straightforward dashboard for the seamless uploading and management of exam-related data.<br />
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
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Major Challenges Solved</h1>

                {/* Description */}
                <div className='space-y-5'>
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>
                        •	Concurrent Users: This website is able to handle 10000 users and can support 500-1000 concurrent users. <br />
                        •	Cost-Effective Deployment and Lower Maintenance: Free of cost Deployment on Vercel and Firebase. <br />
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
                        src="/examcell.png"
                        width={800}
                        height={457}
                        alt="Examcell Image"
                        className='object-contain  '
                    />
                </div>
                <div className='space-y-5'>
                    <Image
                        src="/examcell-hall-tickets.png"
                        width={800}
                        height={457}
                        alt="Examcell Image"
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
                    <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>React JS, Next JS, Firebase</h1>
                </div>
            </div>



            {/* Github Repository */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96 md:mt-10'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Github Repository</h1>

                {/* Description */}
                <div className='space-y-3 '>
                    <a href="https://github.com/rohan9024/examcell" className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}>https://github.com/rohan9024/examcell</a>
                </div>
            </div>


            {/* Deployment */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96 md:mt-10'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Deployment</h1>

                {/* Description */}
                <div className='space-y-3'>
                    <a href="https://examcell.vercel.app/" className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}>https://examcell.vercel.app/</a>
                </div>
            </div>


            {/* Browse other projects */}
            <div className='flex justify-between items-center mx-5 mt-10 md:mr-5 lg:mx-10 xl:mx-96 md:mt-16'>

                <Link
                    href="/spotify-clone"
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

                    <h1 className={`${raleway.className} text-md font-bold md:text-3xl`} >Spotify Clone</h1>
                </Link>

                <Link
                    href="/social-media-manager"
                    className='hidden md:flex flex-col md:flex-row justify-center items-center p-2 dark:space-x-5'>
                    <h1 className={`${raleway.className} text-md font-bold md:text-3xl  `} >Social Media Manager</h1>

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
                    href="/social-media-manager"
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

                    <h1 className={`${raleway.className} text-md font-bold md:text-3xl  `} >Social Media Manager</h1>
                </Link>
            </div>



        </div >
    )
}

export default page