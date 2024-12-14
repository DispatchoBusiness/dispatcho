"use client";

import useNewsLetterData from "@/app/database/components/useNewsLetterData";
import React from "react";

// The Contact component receives props and renders them
export default function NewsLetter() {
    const { email, loading, error, success, handleEmailChange, handleSubmit } = useNewsLetterData();

    return (
        <div>
            <h2>Subscribe to our Newsletter</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Successfully subscribed!</p>}
        </div>
    );
};