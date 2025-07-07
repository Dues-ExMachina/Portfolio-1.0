"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import localFont from 'next/font/local'
import Link from "next/link";
import { useState } from "react";



// Local font deathstar
const deathFont = localFont({
  src: '../font/DeathStar.otf',
})












export default function Home() {
  // glow on hover
  const [glow, setGlow] = useState(false)
  const [glowp, setGlowp] = useState(false)
  const [glows, setGlows] = useState(false)
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[url('/image/bghome1.svg')] md:bg-cover bg-center">
      <Navbar />
      <Sidebar />

      {/* Center Welcome Message */}
      <div className={`container mx-auto flex justify-center items-center w-full px-4 ${deathFont.className}`}>
        <div className="pt-2 md:p-1 welcome flex flex-col gap-6 items-center justify-center w-fit text-white text-center">
          <div className="top flex gap-2 flex-col md:gap-0">
            <div className="flex justify-center items-center gap-1">
              <div style={{ boxShadow: '0 0 4px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.4)' }}
                className="border-[1px] border-[rgba(255,255,255,0.8)]  w-full h-3" >
              </div>
              <div
                // style={{textShadow: '0 0 4px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.4)'}} 
                className="tracking-widest h-fit text-nowrap text-xs w-fit text-[#ceb7ff] font-semibold">A message from earth</div>
            </div>
            <div style={{ textShadow: '0 0 4px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.4)' }}
              className="tracking-widest text-2xl text-[#2c0457] font-semibold">HELLO FELLOW GALAXY MEMBER</div>
            <div className="flex justify-center items-center gap-1">
              <div
                className="tracking-widest h-fit text-nowrap  text-xs w-fit text-[#ceb7ff] font-semibold "
              >
                A message from earth
              </div>
              <div style={{ boxShadow: '0 0 4px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.4)' }}
                className="border-[1px] border-[rgba(255,255,255,0.8)] w-full h-3" >
              </div>
            </div>
          </div>
          <div style={{ textShadow: '0 0 4px rgba(255,255,255,1), 0 0 6px rgba(255,255,255,1)' }} className="text-[#2c0457] bottom text-lg tracking-wider hover:ani">I am Anubhab</div>
        </div>
      </div>

      {/* Bottom Icons */}
      {/* <div className="hidden md:flex absolute bottom-10 w-full  justify-between px-4 sm:px-10 md:px-20 lg:px-40 z-10">
        <Link href="/Profile"><Image
          className="press hover:animate-ping"
          src="/image/press.svg"
          alt="Press"
          width={45}
          height={45}
        /></Link>
        <Image
          className="scroll hover:animate-bounce"
          src="/image/scroll.svg"
          alt="Scroll"
          width={45}
          height={45}
        />
      </div> */}

      {/* Half Earth Image */}
      <div className="hidden md:block absolute bottom-0 md:w-4xl md:bottom-0  md:left-1/2  md:transform  md:-translate-x-1/2  md:z-0">
        <Image
          className="w-4xl"
          src="/image/halfearth.svg"
          alt="Half earth"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      {/* full earth */}
      <div className="block md:hidden absolute -bottom-52 md:w-4xl md:bottom-0  md:left-1/2  md:transform  md:-translate-x-1/2  md:z-0">
        <Image
          className="w-4xl"
          src="/image/fullearth.svg"
          alt="Half earth"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>

      {/* Astronaut */}
      <div className="hidden md:block absolute left-1/2 bottom-40 md:bottom-56 lg:bottom-56 transform -translate-x-1/2 hover:animate-bounce">
        <Image
          className="h-10 w-10"
          src="/image/astronsught.svg"
          alt="Astronaut"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>

      {/* Click here */}
      <div className="z-50 group absolute flex flex-col items-center text-white left-1/2 bottom-56 md:bottom-20 transform -translate-x-1/2 w-fit">
        <div className="group flex items-center space-x-2 cursor-pointer">
          {/* Left SVG */}
          <Link href="/Projects"><svg
            className="transition-transform duration-500 transform translate-x-2 group-hover:-translate-x-1"
            width="54"
            height="54"
            viewBox="0 0 64 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1V55.4688H10.7351V10.7073H62.3854V1H1Z" stroke="white" strokeWidth="2" />
          </svg> </Link >

          {/* Text */}
          <Link href="/Projects">
            <p className="text-center text-base font-semibold leading-tight" style={{
              textShadow: glow
                ? '0 0 3px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.4)'
                : 'none',
            }}
              onMouseEnter={() => setGlow(true)}
              onMouseLeave={() => setGlow(false)}>
              CLICK HERE
            </p>
          </Link >

          {/* Right SVG */}
          <Link href="/Projects"><svg
            className="transition-transform duration-500 transform -translate-x-2 group-hover:translate-x-1"
            width="54"
            height="54"
            viewBox="0 0 64 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M63 55.5938V1.125H53.2649V45.8864H1.61458V55.5938H63Z" stroke="white" strokeWidth="2" />
          </svg></Link>
        </div>
      </div>

      {/* Meteor */}
      <div className="absolute left-[25vw] top-[35vh] md:top-[50vh]">
        <Link href={"/Projects"}>
          <div className="transform rotate-120">
            <Image
              className="meteor hover:animate-ping"
              src="/image/meteor.svg"
              alt="meteor"
              width={45}
              height={45}
            />
          </div>
          <p style={{
            textShadow: glowp
              ? '0 0 3px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.4)'
              : 'none',
          }}
            onMouseEnter={() => setGlowp(true)}
            onMouseLeave={() => setGlowp(false)}>Projects</p>
        </Link>
      </div>

      {/* Meteor 2*/}
      <div className="absolute left-3/4 ">
        <Link href={"/Profile"}>
          <div className="transform rotate-120">
            <Image
              className="meteor hover:animate-ping"
              src="/image/meteor.svg"
              alt="meteor"
              width={45}
              height={45}
            />
          </div>
          <p style={{
            textShadow: glows
              ? '0 0 3px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.4)'
              : 'none',
          }}
            onMouseEnter={() => setGlows(true)}
            onMouseLeave={() => setGlows(false)}>Skills</p>
        </Link>
      </div>

    </div >

  );
}
