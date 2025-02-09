import Header from "../Header";

interface BannerProps {
    bgImage: string;
    title: string;
    description: string;
}

export default function Banner({ bgImage, title, description }: BannerProps) {
    return (
        <div className="px-40 bg-gray-100 dark:bg-gray-900" style={{ backgroundImage: bgImage }}>
            <Header />
            <div className="py-28">
                <h1 className="text-4xl font-bold mt-6">{title}</h1>
                <button className="mt-4 px-6 py-2">{description}</button>
            </div>
        </div>
    )
}