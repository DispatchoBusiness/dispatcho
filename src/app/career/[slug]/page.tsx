import { notFound } from 'next/navigation';

// Mock data - should match your listing data
const jobDetails = {
    "technical-product-manager": {
        title: "Technical Product Manager",
        type: "Full-time",
        description: "Lead product development for technical products",
        responsibilities: ["Item 1", "Item 2", "Item 3"],
        requirements: ["Item 1", "Item 2", "Item 3"]
    },
    "nextjs-developer": {
        title: "Next.js Developer",
        type: "Full-time",
        description: "Develop and maintain Next.js applications",
        responsibilities: ["Item 1", "Item 2", "Item 3"],
        requirements: ["Item 1", "Item 2", "Item 3"]
    }
};

export default function JobDetailPage({ params }: { params: { slug: string } }) {
    const job = jobDetails[params.slug as keyof typeof jobDetails];

    if (!job) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <p className="text-lg text-gray-600 mb-8">{job.type}</p>

                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
                    <p className="mb-6">{job.description}</p>

                    <h3 className="text-xl font-medium mb-3">Responsibilities</h3>
                    <ul className="list-disc pl-5 mb-6">
                        {job.responsibilities.map((item, index) => (
                            <li key={index} className="mb-2">{item}</li>
                        ))}
                    </ul>

                    <h3 className="text-xl font-medium mb-3">Requirements</h3>
                    <ul className="list-disc pl-5">
                        {job.requirements.map((item, index) => (
                            <li key={index} className="mb-2">{item}</li>
                        ))}
                    </ul>

                    <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-colors">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
}