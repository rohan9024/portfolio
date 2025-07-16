"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Inter, Manrope, Raleway } from "next/font/google";
import { motion } from "framer-motion";
import NI from "../../../assets/netflix.png";

const raleway = Raleway({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
function page() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="w-screen h-auto flex flex-col dark:bg-black dark:text-white">
      <div className="hidden bg-white dark:bg-black w-full  md:flex fixed top-0 justify-center items-center">
        <Link
          href="/"
          className="object-contain rounded-full cursor-pointer p-4 transition hover:bg-gray-300 dark:bg-white hover:duration-150"
        >
          <Image src="/back.png" width={25} height={25} alt="back icon" />
        </Link>

        <h1
          className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center p-10 `}
        >
          Project Details
        </h1>
      </div>

      <div className="md:hidden bg-white dark:bg-black fixed top-0 w-full flex justify-center items-center p-5 space-x-3">
        <Link
          href="/"
          className="object-contain rounded-full cursor-pointer p-2 transition hover:bg-gray-300 dark:bg-white hover:duration-150"
        >
          <Image src="/back.png" width={20} height={20} alt="back icon" />
        </Link>

        <h1
          className={`${raleway.className} text-2xl tracking-wide font-semibold md:text-3xl text-center  `}
        >
          Project Details
        </h1>
      </div>

      <div className="md:space-x-10 md:mt-44 mt-20 flex md:flex-row flex-col justify-center items-center space-y-6 md:space-y-0 shadow-lg border border-gray-300 bg-gray-100 dark:bg-black dark:border-gray-800 md:bg-transparent md:border-none md:shadow-none px-4 mx-4 py-12   rounded-lg">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="w-[150px] h-[150px] md:w-[500px] md:h-[550px] flex justify-center items-center rounded-lg"
        >
          <Image
            src="/finserve.png"
            width={1200}
            height={1200}
            alt="finserve logo"
            quality={100}
            priority
            className="w-[150px] h-[150px] md:w-[500px] md:h-[550px] object-cover rounded-lg"
          />
        </motion.div>

        <div className="flex flex-col justify-center md:justify-normal md:items-start items-center space-y-2 md:space-y-5">
          <h1
            className={`${manrope.className} text-3xl font-bold md:text-5xl text-center md:text-left`}
          >
            Finserve
          </h1>
          <h1
            className={`${manrope.className} hidden md:flex font-semibold md:text-4xl text-center md:text-left`}
          >
            Revolutionize Banking Customer Experience
          </h1>
          <h1
            className={`${manrope.className} text-sm font-normal md:text-xl text-center text-gray-600 md:text-left`}
          >
            Your AI-Powered Banking Service Platform
          </h1>
        </div>
      </div>
      {/* Features */}
      <div className="flex flex-col ml-5 mr-5 mt-10 space-y-3 md:space-y-5 lg:mx-10 xl:mx-96">
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl`}>
          Features
        </h1>

        {/* Description */}
        <div className="space-y-3">
          <h1
            className={`${manrope.className} text-sm md:tracking-wide font-normal md:text-lg text-gray-600`}
          >
            • Implemented automatic allocation of live agents with AI-based
            priority system for HNIs and loyal customers <br />
            • Developed high-availability AI agents ensuring 24/7 customer
            support with minimal downtime <br />
            • Built comprehensive face authentication system for secure customer
            verification <br />
            • Created dynamic banking appointment services with intelligent
            scheduling and management <br />
            • Integrated video summarization and sentiment analysis for enhanced
            customer interaction insights <br />
            • Designed service ticket creation system with automated routing and
            priority handling <br />
          </h1>
        </div>
      </div>

      {/* Project Objectives */}
      <div className="flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96">
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl`}>
          Project Objectives
        </h1>

        {/* Description */}
        <div className="space-y-3">
          <h1
            className={`${manrope.className} text-sm font-normal md:text-lg text-gray-600`}
          >
            • Develop an AI-powered customer service platform that enhances
            banking customer experience through intelligent automation <br />
            • Implement face authentication technology to ensure secure and
            seamless customer verification processes <br />
            • Create dynamic insights dashboard providing real-time analytics on
            customer interactions and service performance <br />
            • Build flexible and reliable system architecture supporting
            high-volume banking operations <br />
            • Design comprehensive admin panel for efficient management of
            customer service operations <br />
            • Integrate video summarization and sentiment analysis to improve
            service quality and customer satisfaction <br />
          </h1>
        </div>
      </div>

      {/* Role */}
      <div className="flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96">
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>
          Role
        </h1>

        {/* Description */}
        <div className="space-y-5">
          <h1
            className={`${manrope.className} text-sm  font-normal md:text-lg text-gray-600 `}
          >
            Team Lead
          </h1>
        </div>
      </div>
      {/* Project Challenges */}
      <div className="flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96">
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl`}>
          Project Challenges
        </h1>

        {/* Description */}
        <div className="space-y-5">
          <h1
            className={`${manrope.className} text-sm font-normal md:text-lg text-gray-600`}
          >
            • Security Implementation: Ensuring robust face authentication while
            maintaining user privacy and preventing fraud attempts <br />•
            Real-time Processing: Implementing high-availability AI agents
            capable of handling multiple customer interactions simultaneously{" "}
            <br />
            • Integration Complexity: Seamlessly integrating multiple AI
            services including video analysis, sentiment detection, and priority
            algorithms <br />• Scalability: Building a system capable of
            handling high-volume banking operations while maintaining
            performance and reliability <br />
          </h1>
        </div>
      </div>

      {/* Implementation */}
      <div className="flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96">
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>
          Implementation
        </h1>

        <a
          href="https://drive.google.com/drive/u/0/folders/1fbxYffMKLsbFhDLAGn0qSX0RGC6U1cEh"
          className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}
        >
          https://drive.google.com/drive/u/0/folders/1fbxYffMKLsbFhDLAGn0qSX0RGC6U1cEh
        </a>
        <a
          href="https://www.canva.com/design/DAGh-zLfdpk/4gKOJusFWsjUeePSJwW8ow/edit?utm_content=DAGh-zLfdpk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}
        >
          https://www.canva.com/design/DAGh-zLfdpk/4gKOJusFWsjUeePSJwW8ow/edit?utm_content=DAGh-zLfdpk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
        </a>
      </div>
      {/* Tech Stack */}
      <div className="flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96">
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl`}>
          Tech Stack
        </h1>

        {/* Description */}
        <div className="space-y-3">
          <h1
            className={`${manrope.className} text-sm font-normal md:text-lg text-gray-600`}
          >
            React.js, FastAPI, MongoDB, Firebase, AI/ML, Face Recognition
            Technology, Video Processing, Sentiment Analysis, Real-time
            Analytics
          </h1>
        </div>
      </div>

      {/* Github Repository */}
      <div className="flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96 md:mt-10">
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl`}>
          Github Repository
        </h1>

        {/* Description */}
        <div className="space-y-3">
          <a
            href="https://github.com/rohan9024/finserve"
            className={`${manrope.className} text-sm font-normal md:text-lg text-blue-600 underline`}
          >
            https://github.com/rohan9024/finserve
          </a>
        </div>
      </div>

      {/* Browse other projects */}
      <div className="flex justify-between items-center mx-5 mt-10 md:mr-5 lg:mx-10 xl:mx-96 md:mt-16">
        <Link
          href="/spotify-clone"
          className="flex flex-col md:flex-row justify-center items-center p-2  md:dark:space-x-5 md:dark:space-y-0 dark:space-y-5"
        >
          <div className="object-contain rounded-full cursor-pointer p-4 transition hover:bg-gray-300 dark:bg-white hover:duration-150">
            <Image src="/left.png" width={25} height={25} alt="left icon" />
          </div>

          <h1 className={`${raleway.className} text-md font-bold md:text-3xl`}>
            Spotify Clone
          </h1>
        </Link>

        <Link
          href="/social-media-manager"
          className="hidden md:flex flex-col md:flex-row justify-center items-center p-2 dark:space-x-5"
        >
          <h1
            className={`${raleway.className} text-md font-bold md:text-3xl  `}
          >
            Social Media Manager
          </h1>

          <div className="object-contain rounded-full cursor-pointer p-4 transition hover:bg-gray-300 dark:bg-white hover:duration-150">
            <Image src="/right.png" width={25} height={25} alt="right icon" />
          </div>
        </Link>
        <Link
          href="/social-media-manager"
          className="md:hidden flex flex-col md:flex-row justify-center items-center p-2 dark:space-y-5"
        >
          <div className="object-contain rounded-full cursor-pointer p-4 transition hover:bg-gray-300 dark:bg-white hover:duration-150">
            <Image src="/right.png" width={25} height={25} alt="right icon" />
          </div>

          <h1
            className={`${raleway.className} text-md font-bold md:text-3xl  `}
          >
            Social Media Manager
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default page;
