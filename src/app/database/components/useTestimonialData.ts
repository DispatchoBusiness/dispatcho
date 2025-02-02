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
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getTestimonial();
    }, []);

    async function getTestimonial() {
        setLoading(true); // Set loading to true when fetching data
        const { data, error } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false }); // Fetch all testimonials

        if (error) {
            setError('Error fetching testimonial data: ' + error.message); // Set the error state
            setLoading(false); // Set loading to false after error
            return;
        }

        // Check if data is valid
        if (data && data.length > 0) {
            setTestimonials(data); // Store all testimonials
        } else {
            setError("No testimonials found");
        }

        setLoading(false); // Set loading to false after data is fetched
    }

    return { testimonials, loading, error };
}