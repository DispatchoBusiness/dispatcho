"use client";

import { useEffect, useState } from "react";
import { supabase } from '../index';

type PreBanner = {
    id: number;
    message: string;
    created_at: Date;
};

export default function usePreBannerDataData() {
    const [preBanner, setPreBanner] = useState<PreBanner | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getPreBanner();
    }, []);

    async function getPreBanner() {
        setLoading(true); // Set loading to true when fetching data
        const { data, error } = await supabase.from("prebanner").select();

        if (error) {
            setError('Error fetching prebanner data: ' + error.message); // Set the error state
            setLoading(false); // Set loading to false after error
            return;
        }

        // Check if data is valid
        if (data && data.length > 0) {
            const createdAt = new Date(data[0].created_at);
            setPreBanner({ id: data[0].id, message: data[0].message, created_at: createdAt });
        } else {
            setError('No prebanner data found');
        }

        setLoading(false); // Set loading to false after data is fetched
    }

    return { preBanner, loading, error };
}