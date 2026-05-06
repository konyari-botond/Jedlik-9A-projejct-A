type SearchParams = {
  V1?: string;
  V2?: string;
  s?: string;
  t1?: string;
  t2?: string;
};

export default function KetAuto({ searchParams }: { searchParams: SearchParams }) {
  const V1 = searchParams.V1 ? Number(searchParams.V1) : 10;
  const V2 = searchParams.V2 ? Number(searchParams.V2) : 15;
  const s = searchParams.s ? Number(searchParams.s) : 20;

  const t1 = searchParams.t1 ? Number(searchParams.t1) : s / V1;
  const t2 = searchParams.t2 ? Number(searchParams.t2) : s / V2;

  return (
    <div className="flex min-h-screen justify-center bg-blue-100">
      <h1 className=""> Üdvözlünk a Project munkánk</h1>
    </div>
  );
}
