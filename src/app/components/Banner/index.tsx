import Header from "../Header";

export default function Banner() {
    return <>
        <Header />
        <h1 className="text-4xl font-bold mt-6">See Pricing Options</h1>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Text</button>
    </>
}