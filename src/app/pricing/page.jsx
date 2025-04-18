import Banner from "../components/Banner"
import Contact from "../components/Contact"
import Testimonial from "../components/Testimonial"
import NewsLetter from "../components/NewsLetter"
import Pricing from "../components/Pricing"

export default function Price() {
    var currentDate = new Date();
    return (
        <>
            <Banner bgImage="url('/img/banners/pricingbanner.png')" title="Learn More About Us!" description="See when the company started" onClick="Learn more" isDark={true} />
            <Contact />
            <main>
                <div className="flex gap-4 justify-center pt-12 pb-8">
                    <Pricing />
                </div>
            </main>
            <Testimonial image_link="test" message="test" created_at={currentDate} />
            <NewsLetter />
        </>
    )
}