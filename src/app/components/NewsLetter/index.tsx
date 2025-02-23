"use client";

import useNewsLetterData from "../../database/components/useNewsLetterData";
import React from "react";

// The Contact component receives props and renders them
export default function NewsLetter() {
    const { email, loading, error, success, handleEmailChange, handleSubmit } = useNewsLetterData();

    return (
        <div className="w-full">
            <div className="px-0 md:px-40 py-8">
                <div className="flex gap-4 py-8 px-8 custom-dashed-border" style={{ padding: '20px' }}>
                    <div className="w-full">
                        <h2>Subscribe to our Newsletter</h2>
                        <form onSubmit={handleSubmit} className="flex items-center gap-4">
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
                </div>
            </div>
        </div>
    );
};