"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Tilt from 'react-parallax-tilt';
import { motion, AnimatePresence } from 'framer-motion'
import useIsMobile from '@/components/IsMobile';
import Link from 'next/link';

const Page = () => {
    const data = [
        {
            title: `Get Me A Chai`,
            img: `/getmeachai.png`,
            desc: `This project is a "Get Me A Chai" platform, and it includes a section for supporters to leave memos.`,
            desc1: `Implemented Next.Auth for authentication and Mongodb Atlas for Database`,
            desc2: `Tech used - Next.js, Javascript, Next.Auth, Tailwind CSS, MongoDB`,
            icons: [
                { icon: "/image/github.svg", href: "https://github.com/Dues-ExMachina/Get-me-a-chai" },
                { icon: "/globe.svg", href: "https://get-me-a-chai-swart-eta.vercel.app/" }
            ]
        },
        {
            title: `PassOP-Password Manager`,
            img: `/passop.png`,
            desc: `Password organizing website with a Clean UI`,
            desc1: `Using local storage you can save, upload or delete your passwords`,
            desc2: `Created using React, Tailwind CSS & JavaScript`,
            icons: [
                { icon: "/image/github.svg", href: "https://github.com/Dues-ExMachina/PassOP-Password-manager" },
                { icon: "/globe.svg", href: "https://pass-op-password-manager-tau.vercel.app/" }
            ]
        },
        {
            title: `X(Twitter)- Clone`,
            img: `/x.png`,
            desc: `Visually accurate Clone of X(Twitter)`,
            desc1: `Only frontend`,
            desc2: `Vanilla project using only HTML & Tailwind CSS`,
            desc3: ``,
            icons: [
                { icon: "/image/github.svg", href: "https://github.com/Dues-ExMachina/Twitter-clone" },
                { icon: "/globe.svg", href: "https://twitter-clone-gray-three.vercel.app/" }
            ]
        },
    ]
    // const [direction, setDirection] = useState("next")
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
        // setDirection("prev");
        setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    };

    const handleNext = () => {
        // setDirection("next");
        setCurrentIndex((prev) => (prev + 1) % data.length);
    };





    const listVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15, // delay between icons
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };


    const isMobile = useIsMobile();

    // On hover or clicked the image open popup
    const [showModal, setShowModal] = useState(false);
    const [modalImg, setModalImg] = useState('');

    const openModal = (imgSrc) => {
        setModalImg(imgSrc);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalImg('');
    };


    return (
        <div className="w-full h-screen overflow-hidden bg-[url('/image/spacebg.svg')] bg-cover bg-center relative">
            <Navbar />


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
            <div className="absolute left-1/2 bottom-40 md:bottom-48 lg:bottom-56 transform -translate-x-1/2 hover:animate-bounce">
                <Image
                    className="h-10 w-10 hidden md:block"
                    src="/image/dab.svg"
                    alt="Astronaut"
                    width={40}
                    height={40}
                />
            </div>

            {/* Card Container */}

            <div className="mt-[10vh] md:mt-[15vh] cardContainer flex items-center justify-around relative z-10 gap-6 px-4">
                {/* Previous Button */}
                <button onClick={handlePrev} className="hidden md:block">
                    <Image
                        src="/image/prev.svg"
                        alt="Previous"
                        width={45}
                        height={45}
                    />
                </button>

                {/* Card */}

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        {isMobile ? (
                            //Mobile version:
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={(event, info) => {
                                    if (info.offset.x > 100) {
                                        handlePrev();
                                    } else if (info.offset.x < -100) {
                                        handleNext();
                                    }
                                }}
                                whileTap={{ scale: 0.97 }}
                                className="rounded-2xl"
                            >
                                <div className="rounded-2xl h-[65vh] w-[80vw] md:w-[60vw] bg-neutral-400/20 backdrop-blur-md border border-neutral-600/20 overflow-hidden flex flex-col md:flex-row gap-4 p-4 transition-all duration-500 ease-in-out">
                                    <div className="w-full md:w-1/2">
                                        <Image
                                            className="w-full h-full object-cover rounded-xl"
                                            src={data[currentIndex].img}
                                            alt="Slide image"
                                            width={500}
                                            height={300}
                                        />
                                    </div>

                                    <div className="flex flex-col justify-between w-full md:w-1/2 h-full">
                                        <div className=" space-y-3 bg-black/50 rounded-2xl shadow-2xl">
                                            <h2 className="ml-1 text-2xl font-extrabold text-white tracking-wide drop-shadow-md">
                                                {data[currentIndex].title}
                                            </h2>

                                            <p className=" ml-1 text-sm text-gray-100 leading-relaxed">
                                                {data[currentIndex].desc}
                                            </p>

                                            <p className="ml-1 text-sm text-gray-100 leading-relaxed">
                                                {data[currentIndex].desc1}
                                            </p>

                                            <p className="ml-1 text-sm text-gray-100 leading-relaxed">
                                                {data[currentIndex].desc2}
                                            </p>

                                            <p className="ml-1 text-sm text-purple-300 font-medium italic leading-relaxed">
                                                {data[currentIndex].desc3}
                                            </p>
                                        </div>
                                        <motion.ul
                                            className="flex gap-1 mt-[20%]"
                                            variants={listVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            {data[currentIndex].icons.map((item, i) => (
                                                <motion.li key={i} variants={itemVariants}>
                                                    <Link href={item.href} target="_blank" rel="noopener noreferrer">
                                                        <Image
                                                            className="w-10 mr-1"
                                                            src={item.icon}
                                                            alt={`icon-${i}`}
                                                            width={0}
                                                            height={0}
                                                            sizes="100vw"
                                                        />
                                                    </Link>
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            //Desktop Tilt version
                            <Tilt
                                glareEnable={true}
                                glareMaxOpacity={0.25}
                                scale={1.05}
                                transitionSpeed={1000}
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                className="rounded-2xl"
                            >

                                <div className="rounded-2xl h-[60vh] w-[80vw] md:w-[60vw] bg-neutral-400/20 backdrop-blur-md border border-neutral-600/20 overflow-hidden flex flex-col md:flex-row gap-4 p-4 transition-all duration-500 ease-in-out">
                                    <div className="w-full md:w-1/2">
                                        <Image
                                            onClick={() => openModal(data[currentIndex].img)}
                                            className="w-full h-full object-cover rounded-xl cursor-pointer transition-transform hover:scale-105"
                                            src={data[currentIndex].img}
                                            alt="Slide image"
                                            width={500}
                                            height={300}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between w-full md:w-1/2">
                                        <div className="space-y-3 bg-black/50 rounded-2xl shadow-2xl">
                                            <h2 className="ml-1 text-2xl font-extrabold text-white tracking-wide drop-shadow-md">
                                                {data[currentIndex].title}
                                            </h2>

                                            <p className=" ml-1 text-sm text-gray-100 leading-relaxed">
                                                {data[currentIndex].desc}
                                            </p>

                                            <p className="ml-1 text-sm text-gray-100 leading-relaxed">
                                                {data[currentIndex].desc1}
                                            </p>

                                            <p className="ml-1 text-sm text-gray-100 leading-relaxed">
                                                {data[currentIndex].desc2}
                                            </p>

                                            <p className="ml-1 text-sm text-purple-300 font-medium italic leading-relaxed">
                                                {data[currentIndex].desc3}
                                            </p>
                                        </div>
                                        <motion.ul
                                            className="flex gap-1 mt-2"
                                            variants={listVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            {data[currentIndex].icons.map((item, i) => (
                                                <motion.li key={i} variants={itemVariants}>
                                                    <Link href={item.href} target="_blank" rel="noopener noreferrer">
                                                        <Image
                                                            className="w-6 mr-1 hover:animate-spin duration-[10000ms]"
                                                            src={item.icon}
                                                            alt={`icon-${i}`}
                                                            width={0}
                                                            height={0}
                                                            sizes="100vw"
                                                        />
                                                    </Link>
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    </div>
                                </div>
                            </Tilt>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Next Button */}
                <button onClick={handleNext} className="hidden md:block">
                    <Image
                        src="/image/next.svg"
                        alt="Next"
                        width={45}
                        height={45}
                    />
                </button>
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {data.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            // setDirection(i > currentIndex ? "next" : "prev");
                            setCurrentIndex(i);
                        }}
                        className={`w-3 h-3 hover:cursor-pointer rounded-full transition-all duration-300 ${i === currentIndex ? "bg-white scale-125" : "bg-white/40"
                            }`}
                    />
                ))}
            </div>
            {/* on hover modal */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="relative max-w-3xl w-[90vw] p-4 bg-black/90 rounded-xl shadow-lg"
                    >
                        <Image
                            src={modalImg}
                            alt="Large preview"
                            width={1000}
                            height={600}
                            className="w-full h-auto rounded"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-3 text-white text-xl font-bold hover:text-gray-300"
                        >
                            ✕
                        </button>
                    </motion.div>
                </div>
            )}

        </div>
    )
}

export default Page
