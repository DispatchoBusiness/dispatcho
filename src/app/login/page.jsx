import Banner from "../components/Banner"
import Contact from "../components/Contact"
import Testimonial from "../components/Testimonial"
import NewsLetter from "../components/NewsLetter"
import LoggingIn from "../components/LoggingIn"

export default function Login() {
    var currentDate = new Date();
    return (
        <>
            <Banner bgImage="url('/img/banners/loginbanner.png')" title="Want to learn more about our prices?" description="Learn more about what we offer." onClick="See Features" />
            <Contact />
            <main>
                <div className="flex gap-4 justify-center pt-12 pb-8">
                    <LoggingIn />
                </div>
            </main>
            <Testimonial image_link="test" message="test" created_at={currentDate} />
            <NewsLetter />
        </>
    )
}