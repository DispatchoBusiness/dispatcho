"use client";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Page from "./page";

export default function App() {
    return (
        <>
            <Router>
                <Page />
            </Router>
        </>
    );
}
