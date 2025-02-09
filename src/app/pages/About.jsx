import Banner from "../components/Banner"
import Contact from "../components/Contact"
import Testimonial from "../components/Testimonial"
import NewsLetter from "../components/NewsLetter"

export default function About() {
    var currentDate = new Date();

    return (
        <>
            <Banner />
            <Contact />
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className="w-full">
                    <div className="flex gap-4 justify-center pt-12 pb-8">
                        <h2>About</h2>
                    </div>
                    <div className="px-40 pt-8 pb-8">
                        <div className="flex items-center">
                            <div className="mr-12"> We are a small team, making a simple, easy to use yet versatile and powerful software solution for those who need tool for their business daily need, whether you are a small business owner or intermediate size company. Our goal is to provide a user friendly application for your operation. </div>
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