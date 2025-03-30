import { notFound } from 'next/navigation';
import styles from './Default.module.css';
import Banner from '@/app/components/Banner';
import Contact from '@/app/components/Contact';
import Link from 'next/link';

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
        <>
            <Banner bgImage="url('/img/banners/loginbanner.png')" title="What to Learn More about us" description="Learn about how we started" onClick="See Features" isDark={false} />
            <Contact />
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <Link
                        href="/career"
                        className={`flex items-center mb-6 transition-colors ${styles.textColor}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Back to Careers
                    </Link>
                    <h1 className={`text-3xl font-bold mb-4 ${styles.textColor}`}>{job.title}</h1>
                    <p className="text-lg text-gray-600 mb-8">{job.type}</p>

                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className={`text-2xl font-semibold mb-4 ${styles.textColor}`}>Job Description</h2>
                        <p className={`mb-6 ${styles.textColor}`}>{job.description}</p>

                        <h3 className={`text-xl font-medium mb-3 ${styles.textColor}`}>Responsibilities</h3>
                        <ul className={`list-disc pl-5 mb-6 ${styles.textColor}`}>
                            {job.responsibilities.map((item, index) => (
                                <li key={index} className="mb-2">{item}</li>
                            ))}
                        </ul>

                        <h3 className={`text-xl font-medium mb-3 ${styles.textColor}`}>Requirements</h3>
                        <ul className={`list-disc pl-5 ${styles.textColor}`}>
                            {job.requirements.map((item, index) => (
                                <li key={index} className="mb-2">{item}</li>
                            ))}
                        </ul>

                        <button className={`mt-8 text-white font-medium py-3 px-8 rounded-full transition-colors`}>
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}