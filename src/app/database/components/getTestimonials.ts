"use client";

import { useEffect, useState } from "react";
import { supabase } from '../index';

type Testimonial = {
    id: number;
    message: string;
    img_url: string;
};

export default function useTestimonialData() {
    const [testimonial, setTestimonial] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getTestimonial();
    }, []);

    async function getTestimonial() {
        setLoading(true); // Set loading to true when fetching data
        const { data, error } = await supabase.from("testimonials").select();
        if (data) {
            console.log(data);  // This will print the entire data if it's not null
        }

        if (error) {
            setError('Error fetching testimonial data: ' + error.message); // Set the error state
            setLoading(false); // Set loading to false after error
            return;
        }

        // Check if data is valid
        if (data && data.length > 0) {
            console.log(data[0].img_url);
            setTestimonial([data]);
        } else {
            setError('No testimonial data found');
        }

        setLoading(false); // Set loading to false after data is fetched
    }
    return { testimonial, loading, error };
}