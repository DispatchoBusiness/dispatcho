"use client"
import styles from './Banner.module.css';
import dynamic from 'next/dynamic';

interface BannerProps {
    bgImage: string;
    title: string;
    description: string;
    onClick: string;
    isDark: boolean;
}

// Dynamically import Header with SSR disabled
const Header = dynamic(() => import('../Header'), {
    ssr: false,
    loading: () => <div>Loading header...</div> // Optional loading component
});

export default function Banner({ bgImage, title, description, onClick, isDark }: BannerProps) {
    var colorToUse = isDark ? styles.textColorLight : styles.textColorDark;

    return (
        <>
            <div className="px-40 bg-gray-100 dark:bg-gray-900" style={{ backgroundImage: bgImage }}>
                <Header colorToPass={`${colorToUse}`} />
                <div className="py-28">
                    <h1 className={`text-4xl font-bold mt-6`}>{title}</h1>
                    <p>{description}</p>
                    <button className="mt-4 px-6 py-2">{onClick}</button>
                </div>
            </div>
        </>
    )
}