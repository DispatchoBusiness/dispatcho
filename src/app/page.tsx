import Testimonial from "./components/Testimonial"
import Banner from "./components/Banner"
import NewsLetter
    from "./components/NewsLetter"
import Contact from "./components/Contact";
import styles from './Home.module.css';

// This replaces your <Home /> component
export default function Home() {
    var currentDate = new Date();

    return (
        <>
            <Banner bgImage="url('/img/banners/homebanner.png')" title="For all your delivery needs!" description="Dispatcho is here to help with your delivery needs" onClick="See Prices" />
            <Contact />
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className="w-full">
                    <div className="flex gap-4 justify-center pt-12">
                        <h2>Home</h2>
                    </div>
                    <div className="px-4 md:px-40 pt-8 pb-8 md:pt-0 md:pb-0">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className={`pb-5 px-2 ${styles.textColor}`}>Dispatcho is an innovative software solution designed to streamline small business operations. Our platform offers comprehensive tools for inventory monitoring, delivery optimization, and operation coordination, empowering small businesses to enhance efficiency, reduce costs, and improve customer satisfaction. </div>
                            <button className="px-5">Buy</button>
                        </div>
                    </div>
                </div>
                <Testimonial />
                <NewsLetter />
            </main>
        </>
    )
}