"use client";

import useContactData from "@/app/database/components/useContactData";
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
            <div>
                <h1>Contact Information</h1>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
            </div>
        );
    }

    return <div>No contact data found.</div>;
};

export default Contact;