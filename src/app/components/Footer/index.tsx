export default function Footer() {
    return (
        <div className="w-full">
            <footer className="flex gap-4 justify-center pt-8 pb-8" style={{ backgroundColor: 'var(--footer)', color: 'var(--footerText)' }}>
                <ul className="pr-24">
                    <li>Home</li>
                    <li>About</li>
                </ul>
                <ul>
                    <li>Career</li>
                    <li>Pricing</li>
                </ul>
                <img src={'test'} alt={''} />
            </footer>
        </div>
    );
}