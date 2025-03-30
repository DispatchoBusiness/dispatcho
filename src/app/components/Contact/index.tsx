"use client";
import Uppercase from '../../utils/uppercase';
import useContactData from '../../database/components/useContactData';
import React from "react";
import styles from './Contact.module.css';

// The Contact component receives props and renders them
export default function Contact() {

    const { contact, loading, error } = useContactData();

    // Handle loading state
    if (loading) {
        return <div>Loading...</div>;
    }

    // Handle error state
    if (error) {
        return <div>Error: {error}</div>;
    }

    // If contact is available, render it
    if (contact) {
        const { email, phone } = contact;
        return (
            <div className="flex justify-center items-center p-8">
                <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0">
                    <div className="flex flex-col items-center border-white">
                        <p className={`text-m font-semibold ${styles.textColor}`}>{Uppercase("Email")}</p>
                        <p className={`text-m  ${styles.textColor}`}>{email}</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className={`text-m font-semibold ${styles.textColor}`}>{Uppercase("Phone")}</p>
                        <p className={`text-m ${styles.textColor}`}>{phone}</p>
                    </div>

                </div>
            </div>
        );
    }

    return <div>No contact data found.</div>;
};