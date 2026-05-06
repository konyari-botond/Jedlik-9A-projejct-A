"use client"

import Link from "next/link"

type LinkType = {
    href: string;
    label: string;
}

const links: LinkType[] = [
    {href: "/szamolas", label: "Két autó mozgása egymással szembe"}
]


export default function KezdoOldal() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-blue-100">
        <div className="bg-indigo-400 flex items-center flex-col p-7.5 m-5 rounded-xl">
            <h1 className="flex font-bold text-2xl">Üdvözlünk a TypeScript Project munkánk kezdő oldalán!!!</h1>
        </div>
        <div>
                   <ul className="mt-3">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className="rounded-full px-3 text-blue-500 hover:bg-gray-100 hover:text-red-500"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        </div>
    </div>
  )
}