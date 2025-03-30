"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Next.js alternative to useLocation

export default function Header() {
    const pathname = usePathname();  // Next.js way to get current path
    const isActive = (path: string) => pathname === path;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="px-10 relative flex justify-between items-center">
            {/* Indenting */}
            <div className="flex-1 bg-cover bg-center h-32"></div>

            {/* Right side: Links */}
            <div className="relative">
                {/* Hamburger button for mobile */}
                <button
                    className="block md:hidden p-2 rounded border border-gray-300 w-11"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="block w-6 h-0.5 bg-black mb-1"></span>
                    <span className="block w-6 h-0.5 bg-black mb-1"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                </button>

                {/* Links - dropdown for mobile, horizontal for desktop */}
                <div
                    className={`${isOpen ? "block" : "hidden"
                        } absolute right-0 top-12 bg-white shadow-lg rounded-md p-4 md:static md:flex md:gap-4 md:bg-transparent md:shadow-none`}
                >
                    <ul className="flex flex-col items-start md:flex-row md:items-center md:gap-4 md:justify-end">
                        <li>
                            <Link
                                href="/" // Changed from 'to' to 'href'
                                className={
                                    isActive("/")
                                        ? "text-green-500 font-bold"
                                        : "text-green-800"
                                }
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about" // Changed from 'to' to 'href'
                                className={
                                    isActive("/about")
                                        ? "text-green-500 font-bold"
                                        : "text-green-800"
                                }
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/pricing" // Changed from 'to' to 'href'
                                className={
                                    isActive("/pricing")
                                        ? "text-green-500 font-bold"
                                        : "text-green-800"
                                }
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/login" // Changed from 'to' to 'href'
                                className={
                                    isActive("/login")
                                        ? "text-green-500 font-bold"
                                        : "text-green-800"
                                }
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}