"use client";

import { useEffect, useState } from "react";
import { supabase } from '../index';

type Testimonial = {
    id: number;
    img_url: string;
    message: string;
    created_at: Date;
};

export default function useTestimonialData() {
    const [testimonial, setTestimonial] = useState<Testimonial | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getTestimonial();
    }, []);

    async function getTestimonial() {
        setLoading(true); // Set loading to true when fetching data
        const { data, error } = await supabase.from("testimonials").select();

        if (error) {
            setError('Error fetching testimonial data: ' + error.message); // Set the error state
            setLoading(false); // Set loading to false after error
            return;
        }

        // Check if data is valid
        if (data && data.length > 0) {
            setTestimonial({ id: data[0].id, img_url: data[0].img_url, message: data[0].message, created_at: data[0].date });
        } else {
            setError('No testimonial data found');
        }

        setLoading(false); // Set loading to false after data is fetched
    }

    return { testimonial, loading, error };
}