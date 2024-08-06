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


      <div className='mt-20 flex md:flex-row flex-col justify-center items-center md:space-x-10 space-y-6 md:space-y-0 shadow-lg border border-gray-300 bg-gray-100 dark:bg-black dark:border-gray-800 md:border-none md:bg-transparent md:shadow-none px-4 mx-4  py-12   rounded-lg'>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className='md:w-[400px] flex justify-center items-center w-full '
        >

          <Image
            src='/ettarra.png'
            width={1200}
            height={1200}
            alt="spotify logo"
            className='w-[150px] md:w-[300px] md:h-[500px] h-[150px] object-cover md:object-contain'
          />

        </motion.div>

        <div className='flex flex-col justify-center md:justify-normal md:items-start items-center space-y-2 md:space-y-5'>
          <h1 className={`${manrope.className} text-3xl font-bold md:text-5xl text-center md:text-left`}>Ettarra Cafe</h1>
          <h1 className={`${manrope.className} hidden md:flex font-semibold md:text-4xl text-center md:text-left`}>Indulge in Rich Aromas and Flavors</h1>
          <h1 className={`${manrope.className} text-sm  font-normal md:text-xl text-center text-gray-600 md:text-left `}>Crafting the Perfect Coffee Experience</h1>
        </div>
      </div>


      {/* Problem statement */}
      <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Problem Statement</h1>

        {/* Description */}
        <div className='space-y-3'>
          <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>Develop a Blockchain-based Loyalty and Wallet program to increase
            repeat user purchases for a cafe or restaurant.</h1>
        </div>
      </div>

      {/* Description */}
      <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Description</h1>

        {/* Description */}
        <div className='space-y-3'>
          <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>A stand-alone coffee shop based out of Juhu has a large number of their
            audience between the age bracket of 15-35 (Refer to the brand deck for
            details of audience and design elements, brank deck: Link) and wants to
            do 2 key things, increase revenue through repeat purchases and reduce
            costs through better planning of resources and managing production
            requirements internally.</h1>
        </div>
      </div>

      {/* how we solved the problem */}
      <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>How we solved the problem?</h1>

        {/* Description */}
        <div className='space-y-3'>
          <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>We pay you for buying coffee. We provide coins for every purchase and using those coins the customer can redeem points, get access to exclusive offers, and much more. This is a blockchain-based application that the Attarra peer group uses in order to circulate the contracts.</h1>
        </div>
      </div>
      {/* features requested */}
      <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Features Requested</h1>

        {/* Description */}
        <div className='space-y-3'>
          <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>•	Blockchain-based Loyalty and Wallet program (NFT incorporation if possible) to increase repeat user purchases <br />
            •	Dashboard to upload new loyalty incentives and schemes, also to provide exclusive access to events by the coffee shop after the user has spent “x” amount in a particular time period (a week, a month or a quarter) <br />
            •	Create a user leaderboard based on beverage/category and try to gamify the coffee ordering process (menu provided in the brand deck) <br />
            •	Add push notifications for extremely important messages that need to be given to all users <br />
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
            •	Blockchain Integration: Integrate Ganache blockchain to store and manage customer points data securely. <br />
            •	Customer Registration: Allow customers to create accounts and link them to their blockchain wallet addresses. <br />
            •	Points Accumulation: Implement a system to track and accumulate points for each customer based on their coffee purchases. <br />
            •	Point Redemption: Provide a feature for customers to redeem their accumulated points for rewards or discounts on future coffee orders. <br />
            •	Rewards Catalog: Create a catalog of available rewards that customers can choose from when redeeming their points. <br />
            •	Points Balance Display: Show customers their current points balance in the app, allowing them to track their progress. <br />
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
          <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>We faced difficulty building a blockchain API to secure the app's storage.</h1>
        </div>
      </div>

      {/* Implementation */}
      <div className='flex flex-col  ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Implementation</h1>

        {/* Description */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 '>
          <Image
            src="/ettarra1.webp"
            width={200}
            height={200}
            alt="Ettarra Cafe Image"
            className='object-contain  '
          />
          <Image
            src="/ettarra2.webp"
            width={200}
            height={200}
            alt="Ettarra Cafe Image"
            className='object-contain  '
          />
          <Image
            src="/ettarra3.webp"
            width={200}
            height={200}
            alt="Ettarra Cafe Image"
            className='object-contain  '
          />
          <Image
            src="/ettarra4.webp"
            width={200}
            height={200}
            alt="Ettarra Cafe Image"
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
          <h1 className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}>Solidity,
            React,
            Typescript,
            Blockchain,
            Ganache,
            Node,
            Truffle,
            Next</h1>
        </div>
      </div>


      {/* Glimpses of the Hackathon */}
   
      <div className='flex flex-col  ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96'>
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Glimpses of the Hackathon</h1>
        <Image
          src="/codeshastra-logo.png"
          width={700}
          height={500}
          alt="Codeshastra highlights"
          className='object-contain mx-auto '
        />
        {/* Description */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 '>
          <Image
            src="/codeshastra-1.jpg"
            width={200}
            height={200}
            alt="Codeshastra highlights"
            className='object-contain  '
          />
          <Image
            src="/codeshastra-2.jpg"
            width={200}
            height={200}
            alt="Codeshastra highlights"
            className='object-contain  '
          />
          <Image
            src="/codeshastra-3.jpg"
            width={200}
            height={200}
            alt="Codeshastra highlights"
            className='object-contain  '
          />
          <Image
            src="/codeshastra-4.jpg"
            width={200}
            height={200}
            alt="Codeshastra highlights"
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
          <a href="https://github.com/Darshan4114/djcsi_team_one" className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}>https://github.com/Darshan4114/djcsi_team_one</a>
        </div>
      </div>


      {/* Devfolio Link */}
      <div className='flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96 md:mt-10'>
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>Devfolio Link</h1>

        {/* Description */}
        <div className='space-y-3'>
          <a href="https://devfolio.co/projects/attarra-3463" className={`${manrope.className} text-sm font-normal md:text-lg text-blue-600 underline`}>https://devfolio.co/projects/attarra-3463</a>
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
          href="/hackniche"
          className='hidden md:flex flex-col md:flex-row justify-center items-center p-2 md:dark:space-x-5'>
          <h1 className={`${raleway.className} text-md font-bold md:text-3xl  `} >Hackniche Hackathon</h1>
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
          href="/hackniche"
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

          <h1 className={`${raleway.className} text-md font-bold md:text-3xl  `} >Hackniche Hackathon</h1>
        </Link>
      </div>



    </div >
  )
}

export default page