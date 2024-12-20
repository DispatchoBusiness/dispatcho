import { FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

export default function PostFooter() {
    return (
        <div className="w-full">
            <div className="flex gap-4 justify-center pt-4" style={{ backgroundColor: 'var(--postFooter)', color: 'var(--postFooterText)' }}>
                <div className="text-sm text-white">copywrite 2025</div>
            </div>
            <div className="flex gap-4 justify-center " style={{ backgroundColor: 'var(--postFooter)', color: 'var(--postFooterText)' }}>
                <div className="text-sm">Terms of Use | Privacy Policy</div>
            </div>
            <ul className="flex gap-4  justify-center pt-4 pb-4" style={{ backgroundColor: 'var(--postFooter)', color: 'var(--postFooterText)' }}>
                <li><FaLinkedin /></li>
                <li><FaFacebookSquare /></li>
                <li><FaTwitterSquare /></li>
                <li><FaInstagramSquare /></li>
            </ul>
        </div>
    )
}