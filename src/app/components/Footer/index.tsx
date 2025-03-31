"use client"
import { usePathname } from 'next/navigation'; // For active link styling (optional)
import Link from 'next/link';

export default function Footer() {
    const pathname = usePathname();

    return (
        <div className="w-full">
            <footer style={{ backgroundColor: 'var(--footer)', color: 'var(--footerText)' }}>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center pt-8 pb-8">
                    <li className="pb-4">
                        <Link
                            href="/"
                            className={`link-style ${pathname === '/home' ? 'active' : ''}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="pb-4">
                        <Link
                            href="/about"
                            className={`link-style ${pathname === '/about' ? 'active' : ''}`}
                        >
                            About
                        </Link>
                    </li>
                    <li className="pb-4">
                        <Link
                            href="/career"
                            className={`link-style ${pathname === '/career' ? 'active' : ''}`}
                        >
                            Career
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/pricing"
                            className={`link-style ${pathname === '/pricing' ? 'active' : ''}`}
                        >
                            Pricing
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}