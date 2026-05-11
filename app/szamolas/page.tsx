type SearchParams = {
  V1?: string;
  V2?: string;
  s?: string;
  t1?: string;
  t2?: string;
};

import Image from "next/image";

export default function KetAuto({ searchParams }: { searchParams: SearchParams }) {
  const V1 = searchParams.V1 ? Number(searchParams.V1) : 10;
  const V2 = searchParams.V2 ? Number(searchParams.V2) : 15;
  const s = searchParams.s ? Number(searchParams.s) : 20;

  const t1 = searchParams.t1 ? Number(searchParams.t1) : s / V1;
  const t2 = searchParams.t2 ? Number(searchParams.t2) : s / V2;

  return (
    <div>
    <div className="mt-5 flex h-30 w-155 items-center justify-center rounded-3xl bg-indigo-300 font-semibold shadow-md m-auto text-xl">
      <h1> Üdvözlünk a Project munkánk számolásos oldalán</h1>
      </div>
    <div>
       <Image
        src="/images/ket_auto.jpg"
        alt="Autó"
        width={1200}
        height={500}
        className="mt-4 rounded-xl m-auto"
      />
    </div>
    <div className="mt-6 flex flex-col items-center gap-4">
        <input
          defaultValue={V1}
              id="V1"
              name="V1"
              required
          className="border rounded-lg p-2 w-60"
        />

        <input
          type="number"
          value={V2}
          className="border rounded-lg p-2 w-60"
        />

        <input
          type="number"
          value={s}
          className="border rounded-lg p-2 w-60"
        />
      </div>

      {/* Eredmények */}
      <div className="mt-6 text-center text-lg">
        <p>V1: {V1}</p>
        <p>V2: {V2}</p>
        <p>s: {s}</p>
        <p>t1: {t1.toFixed(2)}</p>
        <p>t2: {t2.toFixed(2)}</p>
      </div>
      </div>
  );
}
