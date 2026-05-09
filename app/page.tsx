"use client";

import Image from "next/image";
import Link from "next/link";

type LinkType = {
  href: string;
  label: string;
};

const links: LinkType[] = [{ href: "/szamolas", label: "Két autó mozgása egymással szemben" }];

const jobbKartya = {
  image: "/images/ket_auto.jpg",
  title: "Számolás oldal",
  description: "Itt találod a projekt számolási részét, ahol két autó mozgását vizsgáljuk.",
  href: "/szamolas",
  buttonLabel: "Megnyitás",
};

const members = [
  {
    name: "Farkas Réka",
    description:
      "Győri Jedlik Ányos Technikumban végzem tanulmányaim, jelenleg Typescript oldal fejlesztéssel foglalkozok, hobbiaim a programozás, edzés és a zenehallgatás.",
    image: "/images/253047430.jpg",
    github: "https://github.com/farkas-reka",
  },
  {
    name: "Konyári Botond Bátor",
    description:
      "Győri Jedlik Ányos Technikumban végzem tanulmányaim, jelenleg Typescript oldal fejlesztéssel foglalkozok, hobbiaim a programozás és kézilabdázás.",
    image: "/images/253048736.jpg",
    github: "https://github.com/konyari-botond",
  },
];

export default function KezdoOldal() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-100 p-5">
      {/* Fejléc */}
      <div className="m-5 flex flex-col items-center rounded-xl bg-indigo-400 p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-white">
          Üdvözlünk a TypeScript Project munkánk kezdő oldalán!!!
        </h1>
      </div>

      {/* Két oszlop */}
      <div className="flex flex-1 flex-col gap-10 lg:flex-row">
        {/* Bal oldal */}
        <div className="flex flex-1 flex-col items-center">
          {/* Cím */}
          <div className="mt-5 flex h-20 w-125 items-center justify-center rounded-3xl bg-indigo-300 font-semibold shadow-md">
            <h3 className="p-3 text-3xl">Kicsit rólunk:</h3>
          </div>

          {/* Kártyák */}
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {members.map((member, index) => (
              <div
                className="flex w-80 flex-col items-center rounded-3xl bg-white p-6 shadow-xl transition hover:scale-105"
                key={index}
              >
                {/* Profilkép */}
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-indigo-400">
                  <Image
                    alt={member.name}
                    className="object-cover"
                    fill
                    loading="lazy"
                    src={member.image}
                  />
                </div>

                {/* Név */}
                <h2 className="mt-5 text-2xl font-bold text-gray-800">{member.name}</h2>

                {/* Leírás */}
                <p className="mt-3 text-center text-gray-600">{member.description}</p>

                {/* GitHub */}
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

        {/* Jobb oldal */}
        <div className="flex flex-1 items-start justify-center">
          <div className="flex w-80 flex-col items-center rounded-3xl bg-white p-6 shadow-xl transition hover:scale-105">
            {/* Kép */}
            <div className="fill relative h-40 w-full overflow-hidden rounded-xl bg-gray-200">
              <Image
                alt={jobbKartya.title}
                className="object-cover"
                fill
                loading="eager"
                src={jobbKartya.image}
              />
            </div>

            {/* Cím */}
            <h2 className="mt-5 text-xl font-bold text-gray-800">{jobbKartya.title}</h2>

            {/* Leírás */}
            <p className="mt-2 text-center text-gray-600">{jobbKartya.description}</p>

            {/* Link */}
            {links.map((link, index) => (
              <Link
                className="mt-5 rounded-full bg-indigo-500 px-5 py-2 font-semibold text-white transition hover:bg-indigo-700"
                href={link.href}
                key={index}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
