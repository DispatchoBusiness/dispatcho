"use client";

import usePricingData from "../../database/components/usePricingData";
import React from "react";
import styles from './Pricing.module.css'

export default function Pricing() {
    const { data, loading, error } = usePricingData();

    return (
        <div className="p-8">
            <h1 className={`text-4xl font-bold text-center mb-8 ${styles.textColor}`}>Pricing</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data?.map((item, index) => (
                    <div key={index} className="border p-6 rounded-lg">
                        <h2 className={`text-2xl font-bold text-center ${styles.textColor}`}>{item.title}</h2>
                        <p className={`text-lg text-center ${styles.textColor}`}>{item.description}</p>
                        <p className={`text-lg text-center ${styles.textColor}`}>{item.description_line_2}</p>
                        <p className={`text-lg text-center ${styles.textColor}`}>{item.description_line_3}</p>
                        <p className={`text-lg text-center ${styles.textColor}`}>{item.description_line_4}</p>
                        <p className={`text-lg text-center ${styles.textColor}`}>{item.description_line_5}</p>
                        <p className={`text-lg text-center ${styles.textColor}`}>{item.description_line_6}</p>
                        <p className={`text-lg text-center ${styles.textColor}`}>{item.description_line_7}</p>
                        {
                            item.price ? <p className={`text-xl font-bold text-center ${styles.textColor}`}>${item.price}</p> : null
                        }
                        <p className={`text-xl font-bold text-center ${styles.textColor}`}>{item.price2}</p>
                        <button className={`mt-4 text-white px-4 py-2 rounded w-full`}>Buy</button>
                    </div>
                ))}
            </div>
        </div>
    );
}