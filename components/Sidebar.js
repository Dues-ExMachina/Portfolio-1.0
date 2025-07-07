import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className='flex absolute left-6 md:left-14 top-2/5 items-center'>
            <ul className='flex flex-col gap-4'>
                <li>
                    <Link href="https://github.com/Dues-ExMachina">
                        <Image
                            className="github hover:scale-110"
                            src="/image/github.svg"
                            alt="Github"
                            width={30}
                            height={30}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/anubhab-das45/">
                        <Image
                            className="Linkedin hover:scale-110"
                            src="/image/linkedin.svg"
                            alt="Linkedin"
                            width={30}
                            height={30}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="https://vercel.com/dues-exmachinas-projects">
                        <Image
                            className="Vercel hover:scale-110"
                            src="/image/vercel.svg"
                            alt="Vercel logomark"
                            width={30}
                            height={30}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/Profile">
                        <Image
                            className="profile hover:scale-110"
                            src="/image/profile.png"
                            alt="My profile"
                            width={30}
                            height={30}
                        />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
