import Header from "../Header";

export default function Banner() {
    return (
        <div className="px-40 bg-gray-100 dark:bg-gray-900">
            <Header />
            <div className="py-28">
                <h1 className="text-4xl font-bold mt-6">See Pricing Options</h1>
                <button className="mt-4 px-6 py-2">Text</button>
            </div>
        </div>
    )
}