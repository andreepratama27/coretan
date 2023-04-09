import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4">
      <div className="relative flex items-center justify-center max-w-xl mx-auto">
        <p className="text-xl text-center text-gray-400">
          <Link href="/">Coretan</Link>
        </p>

        <div className="absolute right-0 profile-menu">
          <ul>
            <li>
              <p className="text-gray-400">
                <Link href="/account">Account</Link>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
