"use client";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
import { Raleway } from "next/font/google";
import netflix from "../../assets/netflix.png";
import spotify from "../../assets/spotify.png";
import firebase from "../../assets/firebase.png";
import react from "../../assets/react.png";
import postman from "../../assets/postman.png";
import ganache from "../../assets/ganache.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import mail from "../../assets/mail.png";
import newsfetcher from "../../assets/newsfetcher2.png";
import mockup from "../../assets/mockup.png";
import nextjs from "../../assets/nextjs.png";
import aws from "../../assets/aws.png";
import fastapi from "../../assets/fastapi.png";
import smm from "../../assets/smm.png";
import ig from "../../assets/ig.png";
import fb from "../../assets/fb.png";
import smm2 from "../../assets/smm2.jpg";
import d3 from "../../assets/d3.jpg";
import bustrackingMockup from "../../assets/bustrackingMockup.png";
import moviesdbapi from "../../assets/moviesdbapi.svg";
import { easeOut, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

const raleway = Raleway({
  weight: ["400", "700"],
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

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  const [scrollProgress, setScrollProgress] = useState(true);
  const [menu, setMenu] = useState(false);
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
    <>
      <div className="w-screen dark:bg-black dark:text-white p-10">
        <Head>
          <title>My Portfolio</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta property="og:title" content="My page title" key="title" />
        </Head>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className=" flex md:justify-center justify-evenly items-center  mt-10 md:p-10 md:ml-20 md:mr-20 md:space-x-20"
        >
          <div
            className={`${raleway.className}  text-lg md:text-3xl cursor-pointer transition ease-in-out  hover:-translate-y-2 hover:scale-105 duration-300`}
          >
            <h1 className="text-center">ROHAN WANDRE</h1>
          </div>
          {darkMode ? (
            <div
              onClick={() => {
                darkMode ? setDarkMode(false) : setDarkMode(true);
              }}
              className="md:hidden flex transition ease-in  hover:text-gray-300  text-gray-500 duration-150cursor-pointer hover:scale-105 hover:-translate-y-3"
            >
              <Image
                src="/darkMode.png"
                width={40}
                height={40}
                alt="darkMode icon"
                className="object-contain md:w-auto md:h-auto w-10 h-10 "
              />
            </div>
          ) : (
            <div
              onClick={() => {
                darkMode ? setDarkMode(false) : setDarkMode(true);
              }}
              className="md:hidden flex transition ease-in  hover:text-gray-300  text-gray-500 duration-150cursor-pointer hover:scale-105 hover:-translate-y-3"
            >
              <Image
                src="/lightMode.png"
                width={40}
                height={40}
                alt="lightMode icon"
                className="object-contain md:w-auto md:h-auto w-10 h-10 "
              />
            </div>
          )}
          {menu ? (
            <motion.div
              whileTap={{ scale: 0.97 }}
              className="md:hidden object-contain rounded-full p-4 dark:p-2 dark:bg-gray-300"
              onClick={() => setMenu(false)}
            >
              <Image
                src="/close.png"
                width={20}
                height={20}
                alt="close icon"
                className="object-contain"
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0.6 }}
              whileHover={{
                scale: 2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              whileInView={{ opacity: 1 }}
              className="md:hidden object-contain rounded-full p-4 dark:p-2 dark:bg-gray-300"
              onClick={() => setMenu(true)}
            >
              <Image
                src="/menu.png"
                width={20}
                height={20}
                alt="menu icon"
                className="object-contain  md:w-auto md:h-auto w-5 h-5"
              />
            </motion.div>
          )}
          <div
            className={`${manrope.className} hidden md:flex md:justify-evenly md:items-center md:font-medium md:w-92 space-x-12`}
          >
            <a
              href="https://drive.google.com/file/d/1-aYazGEtQyGtNaLtDeo3a1TWTvDnlPqL/view?usp=sharing"
              className="transition ease-in  hover:text-gray-300 text-gray-500 duration-150cursor-pointer "
            >
              Resume
            </a>
            <Link
              href="/experience"
              className=" transition ease-in  hover:text-gray-300  text-gray-500 duration-150cursor-pointer"
            >
              Experience
            </Link>
            <Link
              href="/achievements"
              className=" transition ease-in  hover:text-gray-300  text-gray-500 duration-150cursor-pointer"
            >
              Achievements
            </Link>
            <Link
              href="/about-me"
              className=" transition ease-in  hover:text-gray-300  text-gray-500 duration-150cursor-pointer"
            >
              About me
            </Link>
            <a
              href="tel:9137244728"
              className=" transition ease-in  hover:text-gray-300  text-gray-500 duration-150cursor-pointer"
            >
              Contact
            </a>
            {darkMode ? (
              <div
                onClick={() => {
                  darkMode ? setDarkMode(false) : setDarkMode(true);
                }}
                className="transition ease-in  hover:text-gray-300  text-gray-500 duration-150cursor-pointer hover:scale-105 hover:-translate-y-3"
              >
                <Image
                  src="/darkMode.png"
                  width={40}
                  height={40}
                  alt="darkMode icon"
                  className="object-contain"
                />
              </div>
            ) : (
              <div
                onClick={() => {
                  darkMode ? setDarkMode(false) : setDarkMode(true);
                }}
                className="transition ease-in  hover:text-gray-300  text-gray-500 duration-150cursor-pointer hover:scale-105 hover:-translate-y-3"
              >
                <Image
                  src="/lightMode.png"
                  width={40}
                  height={40}
                  alt="lightMode icon"
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </motion.div>

        <motion.nav
          initial={false}
          animate={menu ? "open" : "closed"}
          className={menu ? "flex justify-center items-center" : "hidden"}
        >
          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: menu ? "auto" : "none" }}
            className="flex flex-col justify-center items-center my-10 space-y-12"
          >
            <motion.a
              href="https://drive.google.com/file/d/1-aYazGEtQyGtNaLtDeo3a1TWTvDnlPqL/view?usp=sharing"
              variants={itemVariants}
              className="text-xl "
            >
              Resume
            </motion.a>
            <Link href="/experience">
              <motion.li variants={itemVariants} className="text-xl p-2">
                Experience
              </motion.li>
            </Link>
            <Link href="/achievements">
              <motion.li variants={itemVariants} className="text-xl p-2">
                Achievements
              </motion.li>
            </Link>
            <Link href="/about-me">
              <motion.li variants={itemVariants} className="text-xl p-2">
                About Me
              </motion.li>
            </Link>
            <motion.a
              href="tel:9137244728"
              variants={itemVariants}
              className="text-xl p-2"
            >
              Contact
            </motion.a>
          </motion.ul>
        </motion.nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className={`${manrope.className} flex flex-col space-y-8 md:ml-44 md:mr-44 md:mt-52 mt-36 ml-4 mr-4 `}
        >
          <h1 className="font-medium md:text-2xl text-2xl text-gray-500">
            Hi, I'm Rohan,
          </h1>
          <h1 className="font-bold md:text-4xl text-3xl m-auto">
            {" "}
            A Software Engineer based in Mumbai. I develop applications that
            help us get more out of life and work.
          </h1>
          <h1 className="font-medium md:text-2xl text-blue-500 text-xl w-64 md:w-full ">
            Currently studying at SIES Graduate School of Technology
          </h1>
        </motion.div>
        <div
          className={`${manrope.className} flex flex-col justify-center items-center space-y-12 md:ml-44 md:mr-44 md:mt-64 mt-20 `}
        >
          <h1 className="font-bold text-4xl">Latest Work</h1>

          {/* PharmaLink  */}
          <Link href="/pharmalink">
            <motion.div
              initial={{ opacity: 0, y: -120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="md:flex md:flex-row flex flex-col border border-gray-100 dark:border-gray-600 dark:hover:border-blue-600 transition ease-in-out duration-150 dark:hover:border-2 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[370px] "
            >
              <Image
                src="/pharmalink-banner.png"
                width={1200} // should match or exceed your largest rendered width
                height={800}
                alt="PharmaLink"
                quality={100}
                priority
                className="object-cover w-full md:w-3/4"
                sizes="(max-width: 768px) 100vw, 75vw"
              />

              <div
                className={`${raleway.className} flex flex-col md:w-1/4 justify-center space-y-4 w-full mx-6 my-4`}
              >
                <h1
                  className={`${raleway.className} font-medium text-sm md:text-lg text-blue-500`}
                >
                  ML | Google Cloud | ReactJS | NextJS
                </h1>
                <h1 className="font-medium text-xl md:text-4xl">PharmaLink</h1>
                <div className="flex justify-start space-x-4">
                  <Image
                    src={firebase}
                    width={30}
                    height={30}
                    alt="firebase icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={react}
                    width={30}
                    height={30}
                    alt="react icon"
                    className="object-contain rounded-full"
                  />

                  <Image
                    src="/google-cloud.svg"
                    width={30}
                    height={30}
                    alt="google-cloud icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src="/fast-api.png"
                    width={60}
                    height={60}
                    alt="fast-api icon"
                    className="object-contain "
                  />
                </div>
              </div>
            </motion.div>
          </Link>
          {/* Finserve  */}
          <Link href="/finserve">
            <motion.div
              initial={{ opacity: 0, y: -120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="md:flex md:flex-row flex flex-col border border-gray-100 dark:border-gray-600 dark:hover:border-blue-600 transition ease-in-out duration-150 dark:hover:border-2 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[370px] "
            >
              <div className="relative w-[400px] h-[300px] md:min-h-[488px] md:w-3/4">
                <Image
                  src="/finserve-banner.png"
                  alt="Finserve"
                  fill
                  quality={100}
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
              </div>
              <div
                className={`${raleway.className} flex flex-col md:w-1/4 justify-center space-y-4 w-full mx-6 my-4`}
              >
                <h1
                  className={`${raleway.className} font-medium text-sm md:text-lg text-blue-500`}
                >
                  ML | ReactJS | NextJS | AWS | Fast API{" "}
                </h1>
                <h1 className="font-medium text-xl md:text-4xl">Finserve</h1>
                <div className="flex justify-start space-x-4">
                  <Image
                    src="/aws.svg"
                    width={30}
                    height={30}
                    alt="aws icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={react}
                    width={30}
                    height={30}
                    alt="react icon"
                    className="object-contain rounded-full"
                  />

                  <Image
                    src="/fast-api.png"
                    width={60}
                    height={60}
                    alt="fast-api icon"
                    className="object-contain "
                  />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* News Fetcher */}
          <Link href="/hackniche">
            <motion.div
              initial={{ opacity: 0, y: -120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="md:flex md:flex-row flex flex-col border border-gray-100 dark:border-gray-600 dark:hover:border-blue-600 transition ease-in-out duration-150 dark:hover:border-2 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[370px] "
            >
              <Image
                src={newsfetcher}
                alt="Newsfetcher"
                className="object-cover w-[400px] h-[300px] md:min-h-[488px]  md:w-3/4 "
              />
              <div
                className={`${raleway.className} flex flex-col mx-6 my-4 md:w-1/4 justify-center space-y-4`}
              >
                <h1 className="font-medium text-sm md:text-lg text-blue-500">
                  {" "}
                  WEB DEVELOPMENT
                </h1>
                <h1 className="font-medium text-xl md:text-4xl">
                  News Fetcher
                </h1>
                <div className="flex justify-start space-x-4">
                  <Image
                    src={fastapi}
                    width={90}
                    height={100}
                    alt="fastapi icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={react}
                    width={30}
                    height={30}
                    alt="react icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={aws}
                    width={30}
                    height={30}
                    alt="AWS icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={postman}
                    width={30}
                    height={30}
                    alt="postman icon"
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* SIES GST ERP */}
          <Link href="/SIES-ERP">
            <motion.div
              initial={{ opacity: 0, y: -120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="md:flex md:flex-row flex flex-col border border-gray-100 dark:border-gray-600 dark:hover:border-blue-600 transition ease-in-out duration-150 dark:hover:border-2 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[370px] "
            >
              <Image
                src="/examcell.png"
                alt="ERP SYSTEM"
                width={2500}
                height={2500}
                className="object-cover w-[400px] h-[300px] md:min-h-[488px]  md:w-3/4 "
              />
              <div
                className={`${raleway.className} flex flex-col mx-6 my-4 md:w-1/4 justify-center space-y-4 `}
              >
                <h1 className="font-medium text-sm md:text-lg text-blue-500">
                  FULL STACK DEVELOPMENT
                </h1>
                <h1 className="font-medium text-xl md:text-4xl">
                  ERP System for SIES GST
                </h1>
                <div className="flex justify-start space-x-2">
                  <Image
                    src={firebase}
                    width={30}
                    height={30}
                    alt="firebase icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={react}
                    width={30}
                    height={30}
                    alt="react icon"
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Social Media Manager */}
          <Link href="/social-media-manager">
            <motion.div
              initial={{ opacity: 0, y: -120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="md:flex md:flex-row flex flex-col border border-gray-100 dark:border-gray-600 dark:hover:border-blue-600 transition ease-in-out duration-150 dark:hover:border-2 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[370px] "
            >
              <Image
                src={smm2}
                alt="Social Media Manager"
                className="object-cover w-[400px] h-[300px] md:min-h-[488px]  md:w-3/4 "
              />
              <div
                className={`${raleway.className} flex flex-col md:w-1/4 justify-center space-y-4 mx-6 my-4 `}
              >
                <h1 className="font-medium text-sm md:text-lg text-blue-500">
                  {" "}
                  WEB DEVELOPMENT
                </h1>
                <h1 className="font-medium text-xl md:text-4xl">
                  Social Media Manager
                </h1>
                <div className="flex justify-start space-x-4">
                  <Image
                    src={firebase}
                    width={30}
                    height={30}
                    alt="firebase icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={react}
                    width={30}
                    height={30}
                    alt="react icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={fb}
                    width={30}
                    height={30}
                    alt="Facebook API"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={ig}
                    width={30}
                    height={30}
                    alt="Graph API"
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Social Media Manager App*/}
          <Link href="/social-media-manager">
            <motion.div
              initial={{ opacity: 0, y: -120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="md:flex md:flex-row flex flex-col border border-gray-100 dark:border-gray-600 dark:hover:border-blue-600 transition ease-in-out duration-150 dark:hover:border-2 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[370px] "
            >
              <Image
                src={smm}
                alt="Social Media Manager App"
                className="object-cover w-[400px] h-[300px] md:min-h-[488px]  md:w-3/4 "
              />
              <div
                className={`${raleway.className} flex flex-col mx-6 my-4 md:w-1/4 justify-center space-y-4 `}
              >
                <h1 className="font-medium text-sm md:text-lg text-blue-500">
                  APP DEVELOPMENT
                </h1>
                <h1 className="font-medium text-xl md:text-4xl">
                  Social Media Manager App
                </h1>
                <div className="flex justify-start space-x-4">
                  <Image
                    src={firebase}
                    width={30}
                    height={30}
                    alt="firebase icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={react}
                    width={30}
                    height={30}
                    alt="react icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={fb}
                    width={30}
                    height={30}
                    alt="Facebook API"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={ig}
                    width={30}
                    height={30}
                    alt="Graph API"
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Donation Box*/}
          <Link href="/donation-box">
            <motion.div
              initial={{ opacity: 0, y: -120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="md:flex md:flex-row flex flex-col border border-gray-100 dark:border-gray-600 dark:hover:border-blue-600 transition ease-in-out duration-150 dark:hover:border-2 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[370px] "
            >
              <Image
                src={d3}
                alt="Donation Box"
                className="object-cover w-[400px] h-[300px] md:min-h-[488px]  md:w-3/4 "
              />
              <div
                className={`${raleway.className} flex flex-col mx-6 my-4 md:w-1/4 justify-center space-y-4`}
              >
                <h1 className="font-medium text-sm md:text-lg text-blue-500">
                  {" "}
                  WEB DEVELOPMENT
                </h1>
                <h1 className="font-medium text-xl md:text-4xl">
                  Donation Box
                </h1>
                <div className="flex justify-start space-x-4">
                  <Image
                    src={firebase}
                    width={30}
                    height={30}
                    alt="firebase icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={nextjs}
                    width={60}
                    height={60}
                    alt="next js icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={fb}
                    width={30}
                    height={30}
                    alt="Facebook API"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={ig}
                    width={30}
                    height={30}
                    alt="Graph API"
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Spotify Clone*/}
          <Link href="/spotify-clone">
            <motion.div
              initial={{ opacity: 0, y: -120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="md:flex md:flex-row flex flex-col border border-gray-100 dark:border-gray-600 dark:hover:border-blue-600 transition ease-in-out duration-150 dark:hover:border-2 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[370px] "
            >
              <Image
                src={spotify}
                alt="Spotify Clone"
                className="object-cover w-[400px] h-[300px] md:min-h-[488px]  md:w-3/4 "
              />
              <div
                className={`${raleway.className} flex flex-col mx-6 my-4 md:w-1/4 justify-center space-y-4 `}
              >
                <h1 className="font-medium text-sm md:text-lg text-blue-500">
                  API | WEB DEVELOPMENT
                </h1>
                <h1 className="font-medium text-xl md:text-4xl">
                  Spotify Clone
                </h1>
                <div className="flex justify-start space-x-4">
                  <Image
                    src={firebase}
                    width={30}
                    height={30}
                    alt="firebase icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={react}
                    width={30}
                    height={30}
                    alt="react icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src="/spotify.png"
                    width={30}
                    height={30}
                    alt="spotify API"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={postman}
                    width={30}
                    height={30}
                    alt="postman icon"
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Ettara */}
          <Link href="/codeshastra">
            <motion.div
              initial={{ opacity: 0, y: -120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="md:flex md:flex-row flex flex-col border border-gray-100 dark:border-gray-600 dark:hover:border-blue-600 transition ease-in-out duration-150 dark:hover:border-2 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[370px] "
            >
              <Image
                src={mockup}
                alt="Ettarra Cafe"
                className="object-cover w-[400px] h-[300px] md:min-h-[488px]  md:w-3/4 "
              />
              <div
                className={`${raleway.className} flex flex-col mx-6 my-4 md:w-1/4 justify-center space-y-4 `}
              >
                <h1 className="font-medium text-sm md:text-lg text-blue-500">
                  APP DEVELOPMENT
                </h1>
                <h1 className="font-medium text-xl md:text-4xl">
                  Ettarra Cafe
                </h1>
                <div className="flex justify-start space-x-2">
                  <Image
                    src={firebase}
                    width={30}
                    height={30}
                    alt="firebase icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={nextjs}
                    width={60}
                    height={60}
                    alt="next js icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={ganache}
                    width={100}
                    height={100}
                    alt="ganache icon"
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Bus Tracking Application */}
          <Link href="/bus-tracking">
            <motion.div
              initial={{ opacity: 0, y: -120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="md:flex md:flex-row flex flex-col border border-gray-100 dark:border-gray-600 dark:hover:border-blue-600 transition ease-in-out duration-150 dark:hover:border-2 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[370px] "
            >
              <Image
                src={bustrackingMockup}
                alt="Bus Tracking Application "
                className="object-cover w-[400px] h-[300px] md:min-h-[488px]  md:w-3/4 "
              />
              <div
                className={`${raleway.className} flex flex-col mx-6 my-4 md:w-1/4 justify-center space-y-4 `}
              >
                <h1 className="font-medium text-sm md:text-lg text-blue-500">
                  APP DEVELOPMENT
                </h1>
                <h1 className="font-medium text-xl md:text-4xl">
                  Bus Tracking Application
                </h1>
                <div className="flex justify-start space-x-2">
                  <Image
                    src={firebase}
                    width={30}
                    height={30}
                    alt="firebase icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={react}
                    width={30}
                    height={30}
                    alt="react icon"
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Netflix clone */}
          <Link href="/netflix-clone">
            <motion.div
              initial={{ opacity: 0, y: -120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="md:flex md:flex-row flex flex-col border border-gray-100 dark:border-gray-600 dark:hover:border-blue-600 transition ease-in-out duration-150 dark:hover:border-2 rounded-lg shadow-2xl md:w-[1140px] md:h-[489px] w-[300px] h-[370px] "
            >
              <Image
                src={netflix}
                width={667}
                height={457}
                alt="Netflix Clone"
                className="object-cover w-[400px] h-[300px] md:min-h-[488px] md:w-3/4 "
              />
              <div
                className={`${raleway.className} flex flex-col md:w-1/4 justify-center space-y-4 w-full mx-6 my-4`}
              >
                <h1
                  className={`${raleway.className} font-medium text-sm md:text-lg text-blue-500`}
                >
                  API | WEB DEVELOPMENT
                </h1>
                <h1 className="font-medium text-xl md:text-4xl">
                  Netflix Clone
                </h1>
                <div className="flex justify-start space-x-4">
                  <Image
                    src={firebase}
                    width={30}
                    height={30}
                    alt="firebase icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={react}
                    width={30}
                    height={30}
                    alt="react icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={moviesdbapi}
                    width={30}
                    height={30}
                    alt="movies db api icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={postman}
                    width={30}
                    height={30}
                    alt="postman icon"
                    className="object-contain rounded-full"
                  />
                  <Image
                    src={youtube}
                    width={30}
                    height={30}
                    alt="youtube icon"
                    className="object-contain "
                  />
                </div>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* <Footer /> */}
        <div className=" my-20 ">
          <Link
            href="/achievements"
            className="flex justify-center items-center "
          >
            <h1
              className={`${raleway.className} text-xl rounded-full border border-gray-600 px-6 py-2 transition ease-in-out  hover:bg-gray-300 dark:hover:bg-gray-900 duration-150cursor-pointer`}
            >
              Browse achievements
            </h1>
          </Link>
        </div>
      </div>

      <div className="flex flex-col bg-blue-700 dark:bg-black dark:text-white border-t-2 border-blue-600">
        <section className="flex flex-col md:mt-36 mt-14">
          <h1
            className={`${manrope.className} md:text-6xl text-3xl font-bold text-white  text-center my-2`}
          >
            Let's work together
          </h1>
          <h1
            className={`${raleway.className} md:text-2xl md:my-10 text-sm text-white mx-4 text-center my-2`}
          >
            If you have an idea or project you want to discuss, feel free to
            contact me.
          </h1>
          {/* Mail */}
          <section className="flex justify-center items-center my-4  ">
            <button
              onClick={() => router.push("mailto:rohanwandre24@gmail.com")}
              className={`${manrope.className} md:text-2xl text-lg font-bold rounded-full bg-yellow-400 dark:bg-blue-800 dark:hover:bg-blue-600 md:px-10 md:py-4 px-6 py-2 text-gray-800 dark:text-gray-400 transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-150`}
            >
              Send me an Email
            </button>
          </section>
          {/* Links */}
          <section className="flex space-x-10 items-center mt-20 justify-center">
            <Image
              src={mail}
              width={40}
              height={40}
              alt="mail icon"
              onClick={() => router.push("mailto:rohanwandre24@gmail.com")}
              style={{ filter: "invert(1)", cursor: "pointer" }}
              className="object-contain transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-150cursor-pointer shadow-2xl"
            />
            <a href="https://github.com/rohan9024">
              <Image
                src={github}
                width={40}
                height={40}
                alt="github icon"
                style={{ filter: "invert(1)", cursor: "pointer" }}
                className="object-contain  transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-150cursor-pointer"
              />
            </a>
            <a href="https://www.linkedin.com/in/rohan-wandre-3796641b1/">
              <Image
                src={linkedin}
                width={40}
                height={40}
                alt="linkedin icon"
                style={{ filter: "invert(1)", cursor: "pointer" }}
                className="object-contain transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-150cursor-pointer"
              />
            </a>
          </section>
          <section
            className={`${manrope.className} md:text-xl text-sm my-2 md:my-6 text-center text-gray-800 `}
          >
            <h1>Made with 💖 by Rohan Wandre</h1>
          </section>
        </section>
      </div>
    </>
  );
}
