"use client";

import { useState } from "react";
import { supabase } from '../index';

export default function useNewsLetterData() {
    const [email, setEmail] = useState<string>('');  // Track email input
    const [loading, setLoading] = useState<boolean>(false);  // Track loading state
    const [error, setError] = useState<string | null>(null);  // Track error message
    const [success, setSuccess] = useState<boolean>(false);  // Track success state

    // Handle email input change
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();  // Prevent default form submission behavior

        setLoading(true);
        setError(null);  // Clear any previous errors

        // Get the authenticated user (if any)
        //const { data, error } = await supabase.from("newsletter").select();

        try {
            const { data, error } = await supabase
                .from('newsletter')
                .insert([
                    {
                        email_from: email,  // Use the email entered by the user
                    },
                ]);

            if (error) {
                setError('Error inserting email: ' + error.message);  // Handle insertion error
            } else {
                setSuccess(true);  // Set success flag if email is inserted successfully
                setEmail('');  // Clear email input after successful submission
            }
        } catch (err) {
            setError('Unexpected error: ' + err);  // Handle unexpected errors
        } finally {
            setLoading(false);  // Stop loading spinner
        }
    };


    return { email, loading, error, success, handleEmailChange, handleSubmit };
}