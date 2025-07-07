'use client';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full px-4 md:px-10 py-6 bg-white/10 backdrop-blur-sm text-white shadow-inner text-sm md:text-base border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Credits page */}
                <Link className="text-gray-300 text-xs md:text-sm" href={"/Credits"} target='_blank'>Credits</Link>
                {/* Left - Copyright */}
                <p className="text-gray-300 text-xs md:text-sm">
                    © {new Date().getFullYear()} Anubhab Das. All rights reserved.
                </p>

                {/* Right - Socials */}
                <div className="flex gap-4 text-lg">
                    <Link href="https://github.com/Dues-ExMachina" target="_blank" aria-label="GitHub">
                        <FaGithub className="hover:text-gray-300 transition" />
                    </Link>
                    <Link href="https://linkedin.com/in/anubhab-das45/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin className="hover:text-gray-300 transition" />
                    </Link>
                    <Link href="mailto:anubhabd45@gmail.com" aria-label="Email">
                        <FaEnvelope className="hover:text-gray-300 transition" />
                    </Link>
                    <Link href="/resume.pdf" target="_blank" aria-label="Resume">
                        <FaFileAlt className="hover:text-gray-300 transition" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;