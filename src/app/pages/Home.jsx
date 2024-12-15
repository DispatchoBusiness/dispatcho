import Testimonial from "../components/Testimonial"
import NewsLetter
    from "../components/NewsLetter"
export default function Home() {
    var currentDate = new Date();

    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div>
                <h2>About</h2>
                <div>description</div>
                <button>text</button>
                <img src={'test'} alt={''} />
            </div>
            <div>
                <Testimonial image_link="test" message="test" created_at={currentDate} />
            </div>
            <div>
                <NewsLetter />
            </div>
        </main>
    )
}