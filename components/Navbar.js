import React from 'react'
import localFont from 'next/font/local'
import Link from 'next/link'

// Local font deathstar
const bebasFont = localFont({
    src: '../font/Bebas.ttf',
})


const Navbar = () => {
    return (
        <>
            <nav style={{ textShadow: '0 0 3px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.4)' }} className={` flex w-full justify-between px-2 md:px-10 py-4 ${bebasFont.className} text-xl`}>
                <div className="left flex">
                    <ul className='flex gap-2 md:gap-4'>
                        <li className='hover:scale-110'><Link href="/">Home</Link></li>
                        <li className='hover:scale-110'><Link href="/Profile">My Profile</Link></li>
                        <li className='hover:scale-110'><Link href="/Projects">My Projects</Link></li>
                    </ul>
                </div>
                <div className="right">
                    <h3 className='hover:scale-110'><Link href="/Contact">Contact Me</Link></h3>
                </div>
            </nav>
        </>
    )
}

export default Navbar
