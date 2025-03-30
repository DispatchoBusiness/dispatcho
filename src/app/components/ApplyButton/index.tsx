"use client";

export default function ApplyButton() {
    const handleClick = () => {
        // Handle apply logic
    };

    return (
        <button
            onClick={handleClick}
            className="mt-8 text-white font-medium py-3 px-8 rounded-full transition-colors"
        >
            Apply Now
        </button>
    );
}