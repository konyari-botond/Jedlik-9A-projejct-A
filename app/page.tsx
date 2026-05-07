"use client";

import Image from "next/image";
import Link from "next/link";

type LinkType = {
  href: string;
  label: string;
};

const links: LinkType[] = [{ href: "/szamolas", label: "Két autó mozgása egymással szembe" }];

const members = [
  {
    name: "Farkas Réka",
    description:
      "Győri Jedlik Ányos Technikumban végzem tanulmányaim, jelenleg Typescript oldal fejleszéssel foglalkozok, hobbiaim ",
    image: "/images/253047430.jpg",
    github: "https://github.com/farkas-reka",
  },
  {
    name: "Konyári Botond Bátor",
    description:
      "Győri Jedlik Ányos Technikumban végzem tanulmányaim, jelenleg Typescript oldal fejleszéssel foglalkozok, hobbiaim a programozas es kézilabdázás.",
    image: "/images/253048736.jpg",
    github: "https://github.com/konyari-botond",
  },
];

export default function KezdoOldal() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-blue-100 p-5">
      {/* Fejléc */}
      <div className="m-5 flex flex-col items-center rounded-xl bg-indigo-400 p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-white">
          Üdvözlünk a TypeScript Project munkánk kezdő oldalán!!!
        </h1>
      </div>

      {/* Projektek */}
      <div className="mt-5">
        <div className="flex h-20 w-125 items-center justify-center rounded-3xl bg-indigo-300 font-semibold shadow-md">
          <h3 className="p-3 text-3xl">Kicsit rólunk:</h3>
        </div>
      </div>

      <div>
        <ul className="mt-3">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className="rounded-full px-3 text-lg text-blue-600 transition hover:bg-gray-100 hover:text-red-500"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bemutatkozó kártyák */}
      <div className="mt-10 flex flex-wrap justify-center gap-8">
        {members.map((member, index) => (
          <div
            className="flex w-80 flex-col items-center rounded-3xl bg-white p-6 shadow-xl transition hover:scale-105"
            key={index}
          >
            {/* Profilkép */}
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-indigo-400">
              <Image alt={member.name} className="object-cover" fill src={member.image} />
            </div>

            {/* Név */}
            <h2 className="mt-5 text-2xl font-bold text-gray-800">{member.name}</h2>

            {/* Leírás */}
            <p className="mt-3 text-center text-gray-600">{member.description}</p>

            {/* GitHub link */}
            <a
              className="mt-5 rounded-full bg-indigo-500 px-5 py-2 font-semibold text-white transition hover:bg-indigo-700"
              href={member.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub profil
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
