"use client";
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm';
import { MockInterview } from '@/utils/schema';
import { Progress } from '@/components/ui/progress';
import { useRouter } from 'next/navigation';


export const Header = () => {
    const path = usePathname();
    const { user } = useUser();
    const [progress, setProgress] = useState(0);
    const [length, setLength] = useState(0);
    const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility
   const router = useRouter();
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const navigate = (url) => {
      router.push(url);
    }
  

    useEffect(() => {
        if (user) {
            fetchInterviewCount();
        }
    }, [path, user]);

    const fetchInterviewCount = async () => {
        const result = await db.select()
            .from(MockInterview)
            .where(eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress));

        const count = result.length;
        const percentage = (count / 5) * 100; // Adjust to your needs

        setLength(count);
        setProgress(percentage);
    };

    return (
        <header className='flex flex-col md:flex-row p-4 items-center justify-between bg-transparent'>
            {/* Navbar */}
            <nav className="navbar fixed-top">
                <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
                    {/* Image Logo */}
                    <a
                        className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline"
                        href="index.html"
                    >
                        <Image
                            src="/images/logo1.png"
                            alt="alternative"
                            className="h-auto"
                            width={110}
                            height={110}
                            style={{ objectFit: 'contain' }}
                        />
                    </a>

                    {/* Toggle Button */}
                    <button
                        className="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden"
                        type="button"
                        onClick={toggleNavbar}
                    >
                        <span className="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
                    </button>

                    {/* Navbar Links */}
                    <div
                        className={`navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center ${isOpen ? 'open' : ''}`}
                        id="navbarsExampleDefault"
                    >
                        <ul className="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
                            <li>
                                <a className={`nav-link page-scroll cursor-pointer ${path === '/' ? 'active' : ''}`} onClick={() => navigate('/dashboard')}>
                                    Dashboard <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li>
                                <a className={`nav-link page-scroll cursor-pointer ${path === '#features' ? 'active' : ''}`} onClick={() => navigate('/dashboard/questions')}>
                                    Questions
                                </a>
                            </li>
                            <li>
                                <a className={`nav-link page-scroll ${path === '#pricing' ? 'active' : ''}`} href="/dashboard/upgrade">
                                    Upgrade
                                </a>
                            </li>
                            <li className="dropdown">
                                <a className="nav-link page-scroll cursor-pointer" onClick={() => navigate('/dashboard/contactus')}>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                        <span className="block lg:ml-3.5 flex items-center space-x-4 lg:space-x-6">
                            {/* Icons */}
                            <a className="no-underline" href="#your-link">
                                <i className="fab fa-apple text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200 mr-1.5"></i>
                            </a>
                            <a className="no-underline" href="#your-link">
                                <i className="fab fa-android text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200"></i>
                            </a>

                            {/* Progress and User Button */}
                            <Progress value={progress} className='w-24 md:w-32' />
                            <h5 className='text-xs md:text-sm'><strong>{length}</strong> Out of <strong>5</strong>&nbsp;<strong>FREE</strong>&nbsp; Interviews Created</h5>
                            <UserButton />
                        </span>
                        {isOpen && (
                            <button
                                className="absolute top-4 right-4 text-xl"
                                onClick={toggleNavbar}
                            >
                                Close
                            </button>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
