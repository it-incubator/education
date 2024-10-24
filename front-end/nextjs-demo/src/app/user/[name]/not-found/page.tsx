import Link from 'next/link'

export default function Page() {
    return (
        <div>
            <h2>Pokemon not found</h2>
            <p>Could not find requested resource</p>
            <Link href="/user/pikachu">Return to pikachu</Link>
        </div>
    )
}