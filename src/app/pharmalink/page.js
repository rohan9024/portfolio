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
          className="w-[150px] h-[150px] md:w-[500px] md:h-[350px] flex justify-center items-center rounded-lg"
        >
          <Image
            src="/pharmalink-1.jpg"
            width={1200}
            height={1200}
            alt="Pharmalink logo"
            className="w-[150px] h-[150px] md:w-[500px] md:h-[350px] object-cover rounded-lg"
          />
        </motion.div>

        <div className="flex flex-col justify-center md:justify-normal md:items-start items-center space-y-2 md:space-y-5">
          <h1
            className={`${manrope.className} text-3xl font-bold md:text-5xl text-center md:text-left`}
          >
            Pharmalink
          </h1>
          <h1
            className={`${manrope.className} hidden md:flex font-semibold md:text-4xl text-center md:text-left`}
          >
            Ensuring Timely Healthcare Access
          </h1>
          <h1
            className={`${manrope.className} text-sm font-normal md:text-xl text-center text-gray-600 md:text-left`}
          >
            Your Intelligent Drug Supply Chain Management System
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
            className={`${manrope.className} text-sm md:tracking-wide font-normal md:text-lg text-gray-600 `}
          >
            • Developed a unified system integrating AI for predictive analytics
            to optimize inventory levels and prevent drug shortages <br />
            • Implemented real-time tracking and automatic notifications for low
            stock, shipment delays, and expiring medications <br />
            • Built secure data storage system ensuring easy access and
            management for authorized healthcare users <br />
            • Created seamless integration between Admin, Institute, and
            Supplier panels for efficient collaboration <br />
            • Utilized modern web technologies including React.js, Node.js,
            MongoDB, and Firebase for scalable performance <br />
          </h1>
        </div>
      </div>

      {/* project objectives */}
      <div className="flex flex-col ml-5 mr-5 mt-10 space-y-3 md:mr-5 lg:mx-10 xl:mx-96">
        {/* title */}
        <h1 className={`${manrope.className} text-xl font-bold md:text-3xl `}>
          Project Objectives
        </h1>

        {/* Description */}
        <div className="space-y-3">
          <h1
            className={`${manrope.className} text-sm font-normal md:text-lg text-gray-600 `}
          >
            • Develop a comprehensive drug inventory management system that
            streamlines procurement and distribution processes <br />
            • Implement AI-powered predictive analytics to optimize inventory
            levels and prevent critical drug shortages <br />
            • Create real-time tracking capabilities with automated alerts for
            stock management and expiry monitoring <br />
            • Build secure, scalable architecture supporting multiple healthcare
            institutions and vendor integrations <br />
            • Design intuitive user interfaces tailored for different roles
            (Admin, Institute, Supplier) with role-based access control <br />
            • Ensure HIPAA compliance and robust data security for sensitive
            pharmaceutical information <br />
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
            • Legacy System Integration: Integrating with existing hospital
            management systems and vendor databases while maintaining data
            consistency and security protocols <br />
            • Real-Time Data Synchronization: Implementing real-time inventory
            tracking across multiple locations with minimal latency and ensuring
            data accuracy <br />
            • Scalability and Performance: Building a system capable of handling
            large volumes of pharmaceutical data while maintaining optimal
            performance across different institutions <br />
            • Compliance and Security: Ensuring HIPAA compliance and
            implementing robust encryption and access control measures for
            sensitive pharmaceutical data <br />
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
          href="https://drive.google.com/drive/folders/1xXIDcDL2sTSBWB1yOkDquQe-zpM-fy9r"
          className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}
        >
          https://drive.google.com/drive/folders/1xXIDcDL2sTSBWB1yOkDquQe-zpM-fy9r
        </a>
        <a
          href="https://drive.google.com/drive/folders/1UOfKPqqaaX3ULJNfL6ft4RLlzcQ8dWCa?usp=drive_link"
          className={`${manrope.className} text-sm  font-normal md:text-lg text-blue-600 underline`}
        >
          https://drive.google.com/drive/folders/1UOfKPqqaaX3ULJNfL6ft4RLlzcQ8dWCa?usp=drive_link
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
            className={`${manrope.className} text-sm font-normal md:text-lg text-gray-600 `}
          >
            React.js, Node.js, Express.js, MongoDB, Firebase, AI/ML for
            Predictive Analytics
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
            href="https://github.com/rohan9024/pharmalink"
            className={`${manrope.className} text-sm font-normal md:text-lg text-blue-600 underline`}
          >
            https://github.com/rohan9024/pharmalink
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
