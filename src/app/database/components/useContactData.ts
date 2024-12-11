"use client";

import { useEffect, useState } from "react";
import { supabase } from '../index';

type Contact = {
    id: number;
    email: string;
    phone: string;
};

export default function useContactData() {
    const [contact, setContact] = useState<Contact | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getContact();
    }, []);

    async function getContact() {
        setLoading(true); // Set loading to true when fetching data
        const { data, error } = await supabase.from("contact").select();

        if (error) {
            setError('Error fetching contact data: ' + error.message); // Set the error state
            setLoading(false); // Set loading to false after error
            return;
        }

        // Check if data is valid
        if (data && data.length > 0) {
            setContact({ id: data[0].id, email: data[0].email, phone: data[0].phone });
        } else {
            setError('No contact data found');
        }

        setLoading(false); // Set loading to false after data is fetched
    }

    return { contact, loading, error };
}