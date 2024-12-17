"use client";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
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
