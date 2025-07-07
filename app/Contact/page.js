'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import localFont from 'next/font/local'
import Link from "next/link";
import Image from 'next/image';
import Footer from '@/components/Footer';



// Local font deathstar
const deathFont = localFont({
    src: '../../font/DeathStar.otf',
})

const page = () => {
    return (
        <div>
            <div className="relative h-screen flex flex-col justify-between bg-[url('/image/bghome1.svg')] bg-cover bg-center overflow-hidden">
                {/* Navbar at top */}
                <Navbar />

                {/* Center: Title + Form */}
                <div className="flex-grow flex flex-col justify-center items-center px-4">
                    {/* Title */}
                    <div className={`${deathFont.className} text-white text-center mb-4`}>
                        <h2 className="text-2xl tracking-widest text-[#2c0457] font-semibold" style={{ textShadow: '0 0 4px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.4)' }}>
                            CONTACT ME
                        </h2>
                    </div>

                    {/* Form (slightly smaller to fit) */}
                    <form
                        action="https://formspree.io/f/mzzgyyrl"
                        method="POST"
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg flex flex-col gap-3 w-full max-w-md"
                    >
                        <h3 className={`text-xl text-center text-white font-bold tracking-widest ${deathFont.className}`}>
                            Send a Message 🚀
                        </h3>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="px-4 py-2 rounded bg-white/10 text-white placeholder-white/60 border border-white/20 text-sm"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="px-4 py-2 rounded bg-white/10 text-white placeholder-white/60 border border-white/20 text-sm"
                        />

                        <textarea
                            name="message"
                            rows="3"
                            placeholder="Your Message"
                            required
                            className="px-4 py-2 rounded bg-white/10 text-white placeholder-white/60 border border-white/20 text-sm"
                        />

                        <button
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm"
                        >
                            Send
                        </button>
                    </form>
                </div>

                {/* Bottom: Social + Footer */}
                <div className="social">
                    <div className="flex justify-center gap-4 mb-2">
                        <Link href="https://github.com/Dues-ExMachina">
                            <Image src="/image/github.svg" alt="Github" width={24} height={24} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/anubhab-das45/">
                            <Image src="/image/linkedin.svg" alt="Linkedin" width={24} height={24} />
                        </Link>
                        <Link href="https://vercel.com/dues-exmachinas-projects">
                            <Image src="/image/vercel.svg" alt="Vercel" width={24} height={24} />
                        </Link>
                        <Link href="/Profile">
                            <Image src="/image/profile.png" alt="Profile" width={24} height={24} />
                        </Link>
                    </div>

                    <Footer />
                </div>
            </div>



        </div>
    )
}

export default page
