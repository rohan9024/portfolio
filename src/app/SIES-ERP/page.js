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
                    className='md:w-[360px] flex justify-center items-center w-full  '
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
                    <h1 className={`${manrope.className} text-3xl font-bold md:text-5xl text-center md:text-left`}>ERP System for SIES GST</h1>
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
                        • Simplify access to exam-related information for students. <br />
                        • Facilitate comprehensive feedback on faculty performance. <br />
                        • Streamline inventory management processes for staff. <br />
                        • Enable efficient item requests by lab assistants. <br />
                        • Ensure easy content management through an admin dashboard. <br />
                        • Enhance student engagement with exam-related functionalities. <br />
                        • Improve teaching quality through accessible feedback metrics. <br />
                        • Optimize resource allocation and tracking through inventory management.
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
                        •	Concurrent Users: This website is able to handle 2500 users and can support 500-1000 concurrent users. <br />
                        •	Cost-Effective Deployment and Lower Maintenance: Free of cost Deployment on Netlify and Firebase. <br />
                    </h1>
                </div>
            </div>

            {/* Examcell Implementation */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Examcell Implementation</h1>

                {/* Description */}
                <div className='space-y-5'>
                    <Image
                        src="/e1.png"
                        width={800}
                        height={457}
                        alt="Examcell Image"
                        className='object-contain  '
                    />
                    <Image
                        src="/e2.png"
                        width={800}
                        height={457}
                        alt="Examcell Image"
                        className='object-contain  '
                    />
                    <Image
                        src="/e3.png"
                        width={800}
                        height={457}
                        alt="Examcell Image"
                        className='object-contain  '
                    />
                    <Image
                        src="/e4.png"
                        width={800}
                        height={457}
                        alt="Examcell Image"
                        className='object-contain  '
                    />
                    <Image
                        src="/e5.png"
                        width={800}
                        height={457}
                        alt="Examcell Image"
                        className='object-contain  '
                    />
                    <Image
                        src="/e6.png"
                        width={800}
                        height={457}
                        alt="Examcell Image"
                        className='object-contain  '
                    />
                    <Image
                        src="/e7.png"
                        width={800}
                        height={457}
                        alt="Examcell Image"
                        className='object-contain  '
                    />
                </div>
            
            </div>

            {/* Feedback System Implementation */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Feedback System Implementation</h1>

                {/* Description */}
                <div className='space-y-5'>
                    <Image
                        src="/f1.png"
                        width={800}
                        height={457}
                        alt="Feedback Image"
                        className='object-contain  '
                    />
                    <Image
                        src="/f2.png"
                        width={800}
                        height={457}
                        alt="Feedback Image"
                        className='object-contain  '
                    />
                    <Image
                        src="/f3.png"
                        width={800}
                        height={457}
                        alt="Feedback Image"
                        className='object-contain  '
                    />
                    <Image
                        src="/f4.png"
                        width={800}
                        height={457}
                        alt="Feedback Image"
                        className='object-contain  '
                    />
                    <Image
                        src="/f5.png"
                        width={800}
                        height={457}
                        alt="Feedback Image"
                        className='object-contain  '
                    />
                    <Image
                        src="/f6.png"
                        width={800}
                        height={457}
                        alt="Feedback Image"
                        className='object-contain  '
                    />
                    <Image
                        src="/f7.png"
                        width={800}
                        height={457}
                        alt="Feedback Image"
                        className='object-contain  '
                    />
                    <Image
                        src="/f8.png"
                        width={800}
                        height={457}
                        alt="Feedback Image"
                        className='object-contain  '
                    />
                </div>
                
            
            </div>
            {/* Inventory System Implementation */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Inventory System Implementation</h1>

                {/* Description */}
                <div className='space-y-5'>
                    <Image
                        src="/i1.png"
                        width={800}
                        height={457}
                        alt="Inventory Image"
                        className='object-contain  '
                    />
              
                    <Image
                        src="/i2.png"
                        width={800}
                        height={457}
                        alt="Inventory Image"
                        className='object-contain  '
                    />
              
                    <Image
                        src="/i3.png"
                        width={800}
                        height={457}
                        alt="Inventory Image"
                        className='object-contain  '
                    />
              
                    <Image
                        src="/i4.png"
                        width={800}
                        height={457}
                        alt="Inventory Image"
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
                <div className='space-y-3 flex flex-col'>
                    <a href="https://github.com/rohan9024/examcell" className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}>https://github.com/rohan9024/examcell</a>
                    <a href="https://github.com/rohan9024/feedback-system" className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}>https://github.com/rohan9024/feedback-system</a>
                    <a href="https://github.com/rohan9024/inventory" className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}>https://github.com/rohan9024/inventory</a>
                </div>
            </div>


            {/* Deployment */}
            <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96 md:mt-10'>
                {/* title */}
                <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Deployment</h1>

                {/* Description */}
                <div className='space-y-3 flex flex-col'>
                    <a href="https://siesexamcell.netlify.app/" className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}>https://siesexamcell.netlify.app/</a>
                    <a href="https://siesfeedback.netlify.app/" className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}>https://siesfeedback.netlify.app/</a>
                    <a href="https://siesinventory.vercel.app/" className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}>https://siesinventory.vercel.app/</a>
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