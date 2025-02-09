export default function Footer() {
    return (
        <div className="w-full">
            <footer style={{ backgroundColor: 'var(--footer)', color: 'var(--footerText)' }}>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center pt-8 pb-8">
                    <li className="pb-4">Home</li>
                    <li className="pb-4">About</li>
                    <li className="pb-4">Career</li>
                    <li>Pricing</li>
                </ul>
                <img src={'test'} alt={''} />
            </footer>
        </div>
    );
}