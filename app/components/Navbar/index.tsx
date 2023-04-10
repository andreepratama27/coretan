import Link from "next/link";
import Image from 'next/image'
import UserIcon from 'public/user.svg'

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
                <Link href="/account">
                  <Image src={UserIcon} alt="User Icon" className="w-6 h-6" />
                </Link>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
