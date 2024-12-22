"use client";

import usePricingData from "../../database/components/usePricingData";
import React from "react";

export default function Pricing() {
    const { data, loading, error } = usePricingData();
    return (
        <div className="bg-gray-500">
            <div className="flex items-center justify-center w-full h-screen">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white">Pricing</h1>
                    <div className="flex flex-wrap justify-center gap-8 text-white">
                        {
                            data.map((item, index) => (
                                <div key={index} className="flex flex-col items-center p-4 border border-white rounded-lg">
                                    <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                                    <p className="text-lg text-white">{item.description}</p>
                                    <p className="text-lg text-white">${item.price}</p>
                                    <button>Buy</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}