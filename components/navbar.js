import Link from "next/link"

export default function Navbar() {
    return (
      <div className="flex justify-around h-9 w-full bg-slate-500">
        <nav>
            <ul>
                <li>
                    <Link href='/api/auth/signin'>
                        <a>Sign In</a>
                    </Link>
                </li>
                <li>
                    <Link href='/api/auth/signout'>
                        <a>Sign Out</a>
                    </Link>
                </li>
            </ul>
        </nav>
      </div>
    )
}