"use client";

import Link from 'next/link';
import { jobListings } from '@/app/data/jobs';
import styles from './Career.module.css';
import Banner from '../components/Banner';
import Contact from '../components/Contact';

// Company information
const companyInfo = {
  location: "Canada/Europe",
  email: "test@test.com",
  workingHours: "Vary from client-to-client"
};

export default function Career() {
  return (
    <>
      <Banner bgImage="url('/img/banners/loginbanner.png')" title="Want to learn more about our prices?" description="Learn more about what we offer." onClick="See Features" />
      <Contact />

      <div className="min-h-screen bg-gray-50">
        {/* Main content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className={`text-3xl font-bold mb-8 ${styles.textColor}`}>Careers</h1>

          {/* Company info section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h2 className={`uppercase font-medium mb-2 ${styles.titleStyle}`}>LOCATION</h2>
              <p className="text-gray-700">{companyInfo.location}</p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm">
              <h2 className={` uppercase font-medium mb-2 ${styles.titleStyle}`}>EMAIL</h2>
              <p className="text-gray-700">{companyInfo.email}</p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm">
              <h2 className={`uppercase font-medium mb-2 ${styles.titleStyle}`}>WORKING HOURS</h2>
              <p className="text-gray-700">{companyInfo.workingHours}</p>
            </div>
          </div>

          {/* Job listings section */}
          <div className="space-y-4">
            {jobListings.map(job => (
              <div key={job.id} className="bg-gray-100 p-6 rounded-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    <p className="text-gray-600">{job.type}</p>
                    {/* Added brief description */}
                    <p className="text-gray-500 mt-2">{job.description}</p>
                  </div>
                  <Link
                    href={`/career/${job.slug}`} // Dynamic path construction
                    className="mt-4 md:mt-0"
                  >
                    <button className={`text-white font-medium py-2 px-8 rounded-full transition-colors`}>
                      VIEW DETAILS
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Repeat company info at the bottom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div>
              <h2 className={`uppercase font-medium mb-2 ${styles.titleStyle}`}>LOCATION</h2>
              <p className="text-gray-700">{companyInfo.location}</p>
            </div>

            <div>
              <h2 className={`uppercase font-medium mb-2 ${styles.titleStyle}`}>EMAIL</h2>
              <p className="text-gray-700">{companyInfo.email}</p>
            </div>

            <div>
              <h2 className={`uppercase font-medium mb-2 ${styles.titleStyle}`}>WORKING HOURS</h2>
              <p className="text-gray-700">{companyInfo.workingHours}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}