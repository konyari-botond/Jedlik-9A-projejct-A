"use client";

import Link from "next/link";

type LinkType = {
  href: string;
  label: string;
};

const links: LinkType[] = [{ href: "/szamolas", label: "Két autó mozgása egymással szembe" }];

export default function KezdoOldal() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-blue-100">
      <div className="m-5 flex flex-col items-center rounded-xl bg-indigo-400 p-7.5">
        <h1 className="flex text-3xl font-bold">
          Üdvözlünk a TypeScript Project munkánk kezdő oldalán!!!
        </h1>
      </div>
      <div className="mt-5">
        <div className="flex h-20 w-100 items-center justify-center rounded-3xl bg-indigo-300 font-semibold">
          <h3 className="p-3 text-3xl">Kicsit rólunk:</h3>
        </div>
        {/* Két kártya a keszitokrol --- itt hagytam abba*/}
        <div>
          <div></div>
          <div></div>
        </div>
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
  );
}
