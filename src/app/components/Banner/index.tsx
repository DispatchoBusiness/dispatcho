"use client";

import { Link } from 'react-router-dom';
import React from "react";

// The Contact component receives props and renders them
export default function Banner() {
    return <div>
        <div>Image area</div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>Pricing</li>
            <li>Login</li>
        </ul>
        <h1>See Pricing Options</h1>
        <button>Text</button>
    </div>
};