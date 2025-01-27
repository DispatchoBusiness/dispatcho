import Testimonial from "../components/Testimonial"
import Banner from "../components/Banner"
import NewsLetter
    from "../components/NewsLetter"
import Contact from "../components/Contact";
export default function Home() {
    var currentDate = new Date();

    return (
        <>
            <Banner />
            <Contact />
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

                <div className="w-full">
                    <div className="flex gap-4 justify-center pt-12 pb-8">
                        <h2>Home</h2>
                    </div>
                    <div className="px-40 pt-8 pb-8">
                        <div className="flex items-center">
                            <div className="mr-12">Dispatcho is an innovative software solution designed to streamline small business operations. Our platform offers comprehensive tools for inventory monitoring, delivery optimization, and operation coordination, empowering small businesses to enhance efficiency, reduce costs, and improve customer satisfaction. </div>
                            <button className="ml-8">text</button>
                        </div>
                    </div>
                </div>
                <Testimonial image_link="test" message="test" created_at={currentDate} />
                <NewsLetter />
            </main>
        </>
    )
}