"use client";

import { useEffect, useState } from "react";
import { supabase } from '../index';

type Pricing = {
    id: number;
    title: string;
    description: string;
    price: number;
    created_at: Date;
};

export default function usePricingData() {
    const [data, setData] = useState<Pricing[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getPreBanner();
    }, []);

    async function getPreBanner() {
        setLoading(true); // Set loading to true when fetching data
        const { data, error } = await supabase.from("pricing").select();

        if (error) {
            setError('Error fetching pricing data: ' + error.message); // Set the error state
            setLoading(false); // Set loading to false after error
            return;
        }

        // Check if data is valid
        if (data && data.length > 0) {
            const createdAt = new Date(data[0].created_at);
            setData([data[0], data[1], data[2]]);
        } else {
            setError('No pricing data found');
        }

        setLoading(false); // Set loading to false after data is fetched
    }

    return { data, loading, error };
}