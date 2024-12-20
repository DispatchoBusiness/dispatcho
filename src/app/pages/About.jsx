export default function About() {
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div className="w-full">
                <div className="flex gap-4 bg-red-500 justify-center pt-8 pb-8">
                    <h2>About PAge</h2>
                </div>
                <div className="px-40 pt-8 pb-8">
                    <div className="flex items-center">
                        <div className="mr-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, diam nec maximus suscipit, urna diam tempus dolor, in facilisis libero lorem non lorem. Ut facilisis lobortis commodo. Aliquam sodales sapien a neque dignissim tincidunt. </div>
                        <button className="ml-8">text</button>
                    </div>
                </div>
            </div>
            <Testimonial image_link="test" message="test" created_at={currentDate} />
            <NewsLetter />
        </main>
    )
}