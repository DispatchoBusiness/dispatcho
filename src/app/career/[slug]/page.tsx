"use client"
import { notFound, useParams } from 'next/navigation';
import styles from './Default.module.css';
import Link from 'next/link';

interface Job {
    title: string;
    type: string;
    description: string;
    responsibilities: string[]; // Explicit string array type
    requirements: string[];     // Explicit string array type
}

// Mock data - should match your listing data
const jobDetails: Record<string, Job> = {
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

export default function JobDetailPage() {
    const params = useParams<{ slug: string }>();

    if (!params?.slug) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    const job = jobDetails[params.slug];

    if (!job) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <Link href="/career" className={`flex items-center mb-6 ${styles.textColor}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
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

                    <Link
                        href={`/apply?position=${encodeURIComponent(job.title)}`}
                        className="mt-8 inline-block text-white font-medium py-3 px-8 rounded-full"
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
        </div>
    );
}