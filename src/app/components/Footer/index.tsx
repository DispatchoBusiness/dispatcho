import { Link, useLocation } from 'react-router-dom';


export default function Footer() {
    const location = useLocation();  // Get the current location (URL path)


    return (
        <div className="w-full">
            <footer style={{ backgroundColor: 'var(--footer)', color: 'var(--footerText)' }}>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center pt-8 pb-8">
                    <li className="pb-4">Home</li>
                    <li className="pb-4">About</li>
                    <li className="pb-4">
                        <Link to="/career">Career</Link>
                    </li>
                    <li>Pricing</li>
                </ul>
            </footer>
        </div>
    );
}