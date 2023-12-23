"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Inter, Manrope, Raleway } from 'next/font/google';
import { motion } from "framer-motion"
import spotify from "../../../assets/spotify.png"
import newsfetcher from "../../../assets/newsfetcher.png"
import newsfetcher2 from "../../../assets/newsfetcher2.png"


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
    <div className='w-screen h-auto flex flex-col dark:bg-black dark:text-white '>
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

      <div className='md:hidden bg-white  dark:bg-black fixed top-0 w-full flex justify-center items-center p-5 space-x-3'>

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
            src='/news.gif'
            width={1200}
            height={1200}
            alt="news gif"
            className='w-[150px] md:w-[300px] md:h-[500px] h-[150px] object-cover md:object-contain'
          />
        </motion.div>

        <div className='flex flex-col justify-center md:justify-normal md:items-start items-center space-y-2 md:space-y-5'>
          <h1 className={`${manrope.className} text-3xl font-bold md:text-5xl text-center md:text-left`}>News Fetcher</h1>
          <h1 className={`${manrope.className} hidden md:flex font-semibold md:text-4xl text-center md:text-left`}>Stay Connected, Stay Informed</h1>
          <h1 className={`${manrope.className} text-sm  font-normal md:text-xl text-center text-gray-600 md:text-left `}>Your Trusted Source for Breaking News and In-Depth Stories</h1>
        </div>
      </div>


      {/* Problem statement */}
      <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Problem Statement</h1>

        {/* Description */}
        <div className='space-y-3'>
          <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>Create an automated server that fetches News every
            day. (You can use any of the free apis like newsdata).
            The news is fetched and stored on the server. Create
            a UI (Can be a basic app, web, or any other basic UI)
            that fetches these news stored on the server.</h1>
        </div>
      </div>


      {/* features requested */}
      <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Features Requested</h1>

        {/* Description */}
        <div className='space-y-3'>
          <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>
            •	News to be fetched, stored, and served only on the Server. <br />
            •	You should use cloud services like Google Cloud, AWS, or similar to host the server you created. <br />
            •	Personalized News can be stored. <br />
            •	On UI you can make users select genres and based on that you can recommend personalized news. <br />
            •	You can use features like FCM or AWS SES to notify users. <br />
          </h1>
        </div>
      </div>
      {/* Features */}
      <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:space-y-5  lg:mx-10 xl:mx-96'>
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Features Provided By Us</h1>

        {/* Description */}
        <div className='space-y-3'>
          <h1 className={`${manrope.className} text-sm md:tracking-wide font-normal md:text-lg text-gray-600 `}>
            <span className='font-bold'>• Advanced Search Capability:</span>  Easily find the news you need with our robust search functionality. Our intelligent search algorithms quickly scan through the vast collection of news articles, ensuring you discover the most relevant information. <br />
            <span className='font-bold'>•	Topic Segregation:</span> Stay updated on your preferred subjects. Our system intelligently categorizes news articles into various topics, allowing you to effortlessly navigate through specific areas of interest and explore related content. <br />
            <span className='font-bold'>•	Seamless AWS Integration:</span> We leveraged the power of AWS services to enhance our platform. By utilizing AWS S3 storage, we ensure reliable and scalable storage for our vast collection of news data. AWS Lambda functions enable us to process data efficiently, delivering seamless performance and user experience. <br />
            <span className='font-bold'>•	Automated Data Fetching:</span> To keep our news database up to date, we implemented automated cron jobs. These jobs fetch news from trusted sources on a daily basis and store the data in a structured JSON format. This ensures that our users have access to the latest news articles at all times. <br />
            <span className='font-bold'>•	Served with Speed:</span> Our platform leverages the efficient retrieval capabilities of AWS S3 to deliver news articles to users swiftly. By storing the data in S3 and serving it directly to users, we eliminate unnecessary delays, providing a seamless and responsive news browsing experience. <br />
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
            Frontend Developer
          </h1>
        </div>
      </div>


      {/* Project Challenges */}
      <div className='flex flex-col ml-5  mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Project Challenges</h1>

        {/* Description */}
        <div className='space-y-5'>
          <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>We faced difficulty in setting up AWS Lambda functions and deployment.</h1>
        </div>
      </div>

      {/* Implementation */}
      <div className='flex flex-col  ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Implementation</h1>

        {/* Description */}
        <div className='flex flex-col '>
          <Image
            src={newsfetcher}
            width={800}
            height={600}
            alt="Newsfetcher Image"
            className='object-contain  '
          />
          <Image
            src={newsfetcher2}
            width={800}
            height={600}
            alt="Newsfetcher Image"
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
          <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>
            React,
            Fast API,
            AWS Lambda Functions,
            AWS S3 Storage,
            Tailwind CSS</h1>
        </div>
      </div>


      {/* Glimpses of the Hackathon */}

      <div className='flex flex-col  ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Glimpses of the Hackathon</h1>
        <Image
          src="/hackniche-logo.webp"
          width={700}
          height={500}
          alt="Hackniche highlights"
          className='object-contain mx-auto'
        />
        {/* Description */}
        <div className='flex flex-col space-y-4 md:flex-row md:justify-evenly md:items-center md:space-x-4'>
          <Image
            src="/hackniche-1.jpeg"
            width={300}
            height={400}
            alt="Hackniche highlights"
            className='object-contain  '
          />
          <Image
            src="/hackniche-2.jpeg"
            width={300}
            height={400}
            alt="Hackniche highlights"
            className='object-contain  '
          />
          <Image
            src="/hackniche-3.jpg"
            width={300}
            height={400}
            alt="Hackniche highlights"
            className='object-contain  '
          />
        </div>
      </div>

      {/* Github Repository */}
      <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96 md:mt-10'>
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Github Repository</h1>

        {/* Description */}
        <div className='space-y-3 '>
          <a href="https://github.com/Darshan2003/team-debuggers-djsce" className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}>https://github.com/Darshan2003/team-debuggers-djsce</a>
        </div>
      </div>


      {/* Deployment Link */}
      <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96 md:mt-10'>
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Deployment Link</h1>

        {/* Description */}
        <div className='space-y-3'>
          <a href="https://hackathon-2-0.vercel.app/" className={`${manrope.className} text-sm font-normal md:text-lg text-blue-600 underline`}>https://hackathon-2-0.vercel.app/</a>
        </div>
      </div>




      {/* Browse other projects */}
      <div className='flex justify-between items-center mx-5 mt-10 md:mr-5 lg:mx-10 xl:mx-72 md:mt-16 lg:space-x-6'>

        <Link
          href="/codeshastra"
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

          <h1 className={`${raleway.className} text-md font-bold md:text-3xl`} >Codeshastra Hackathon</h1>
        </Link>

        <Link
          href="/netflix-clone"
          className='hidden md:flex  flex-col md:flex-row justify-center items-center p-2 dark:space-x-5'>
          <h1 className={`${raleway.className} text-md font-bold md:text-3xl  `} >Netflix Clone</h1>
          <div className='object-contain rounded-full cursor-pointer lg:p-4 transition hover:bg-gray-300 dark:bg-white hover:duration-150'>
            <Image
              src='/right.png'
              width={25}
              height={25}
              alt="right icon"
            />
          </div>
        </Link>
        <Link
          href="/netflix-clone"
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
          <h1 className={`${raleway.className} text-md font-bold md:text-3xl `} >Netflix Clone</h1>
        </Link>
      </div>



    </div >
  )
}

export default page