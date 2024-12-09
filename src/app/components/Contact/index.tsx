import React from "react";

// Define types for the props
type ContactProps = {
    email: string;
    phone: string;
};

// The Contact component receives props and renders them
const Contact = ({ email, phone }: ContactProps) => {
    return (
        <div>
            <h1>Contact Information</h1>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
        </div>
    );
};

export default Contact;