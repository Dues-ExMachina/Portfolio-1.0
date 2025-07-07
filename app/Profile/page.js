"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bebas_Neue, Montserrat } from 'next/font/google';
import Navbar from "@/components/Navbar";

// Font imports
const bebas = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
});

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState("skills");

    return (
        <div className={`${montserrat.className} min-h-screen bg-[url('/image/bghome1.svg')] bg-cover text-white p-6 pt-0`}>
            <Navbar />

            <div className="max-w-4xl mx-auto space-y-10">

                {/* Profile Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6"
                >
                    <Image
                        src="/image/avatar.jpg"
                        alt="My photo"
                        width={120}
                        height={120}
                        className="rounded-full border-2 border-white object-cover transition-all duration-500 ease-in-out hover:border-purple-500 hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.6)]"
                    />
                    <div>
                        <h1 className={`text-4xl font-bold tracking-wide ${bebas.className}`}>Anubhab Das</h1>
                        <p className="text-sm text-white/80 mt-1">Full Stack Developer • MERN • Next.js Enthusiast</p>
                        <p className="mt-2 text-white/70">
                            I build responsive, interactive web apps with love for design and logic.
                        </p>
                    </div>
                </motion.div>

                {/* Tabs */}
                <div className="space-y-4">
                    {/* Tab Buttons */}
                    <div className="flex gap-4 border-b border-white/30 pb-2">
                        <button
                            className={`px-4 py-1 rounded-t font-semibold transition ${activeTab === "skills"
                                ? "bg-purple-600 text-white"
                                : "bg-white/10 text-white/70 hover:bg-white/20"
                                }`}
                            onClick={() => setActiveTab("skills")}
                        >
                            Skills
                        </button>
                        <button
                            className={`px-4 py-1 rounded-t font-semibold transition ${activeTab === "education"
                                ? "bg-purple-600 text-white"
                                : "bg-white/10 text-white/70 hover:bg-white/20"
                                }`}
                            onClick={() => setActiveTab("education")}
                        >
                            Education
                        </button>
                    </div>

                    {/* Tab Content */}
                    {activeTab === "skills" && (
                        <div className="flex flex-wrap gap-4 ">
                            {[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "React",
                                "Next.js",
                                "Node.js",
                                "MongoDB",
                                "Tailwind CSS",
                                "Framer Motion",
                            ].map((skill, i) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-md transition-all duration-500 ease-in-out hover:border-purple-500 hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.6)]"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {activeTab === "education" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4 text-white/90"
                        >
                            <div>
                                <h3 className="text-lg font-bold">🎓 B.Tech in Computer Science</h3>
                                <p className="text-sm">Elitte College of Engineering (2021 - Present)</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">🏫 Diploma (After 12th)</h3>
                                <p className="text-sm">Elitte institute of Engineering & Management (2019 - 2021)</p>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Social Links */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-white">Connect with Me</h2>
                    <div className="flex gap-4 items-center">
                        <Link href="https://github.com/yourusername" target="_blank">
                            <Image src="/image/github.svg" alt="GitHub" width={30} height={30} />
                        </Link>
                        <Link href="https://linkedin.com/in/yourusername" target="_blank">
                            <Image src="/image/linkedin.svg" alt="LinkedIn" width={30} height={30} />
                        </Link>
                        <Link href="/resume/Anubhab-Resume.pdf" target="_blank">
                            <button className="px-4 py-2 backdrop-blur-[1px] bg-purple-600/80 hover:bg-purple-700 rounded text-white font-semibold">
                                Resume
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
