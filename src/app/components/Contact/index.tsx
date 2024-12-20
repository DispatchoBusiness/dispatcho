"use client";
import Uppercase from '../../utils/uppercase';
import useContactData from '../../database/components/useContactData';
import React from "react";

// Define types for the props
type ContactProps = {
    email: string;
    phone: string;
};

// The Contact component receives props and renders them
const Contact = ({ email, phone }: ContactProps) => {

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
            <div className="flex justify-center items-center p-4">
                <div className="flex space-x-12"> {/* Vertical space between fields */}
                    <div className="flex flex-col items-center border-r-2 border-white pr-12">
                        <p className="text-lg font-semibold">{Uppercase("Email")}</p>
                        <p className="text-lg">{email}</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-lg font-semibold">{Uppercase("Phone")}</p>
                        <p className="text-lg">{phone}</p>
                    </div>
                </div>
            </div>
        );
    }

    return <div>No contact data found.</div>;
};

export default Contact;