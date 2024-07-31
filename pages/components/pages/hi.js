import Link from 'next/link';

export default function Ab() {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the about page.</p>
            <Link href="/">Go to Home Page</Link>
        </div>
    );
}
