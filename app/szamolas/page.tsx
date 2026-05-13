import Image from "next/image";

type SearchParams = {
  V1?: string;
  V2?: string;
  s?: string;
  t?: string;
};

export default async function KetAuto({ searchParams }: { searchParams: SearchParams }) {
  const params: SearchParams = await searchParams;
  const V1 : number = Number(params.V1) || 10;
  const V2 : number = Number(params.V2) || 15;
  const s : number = Number(params.s) || 20;
  const t : number = Number(params.t) || s / (V1 + V2);

  return (
    <div className="bg-blue-100">
    <div className="flex h-20 w-150 items-center justify-center rounded-3xl bg-indigo-300 font-semibold shadow-md m-auto">
            <h3 className="p-3 text-3xl">Üdvözlünk a számolásos oldalunkon!</h3>
          </div>
  <div className="flex mt-10 flex-col items-center justify-center">
      <div className="flex w-100 flex-col rounded-lg bg-white p-3 shadow-xl">
        <form className="flex flex-col gap-4">
          <p className="text-xl text-center font-semibold">Adatok</p>
          <div className="m-auto">
            <label htmlFor="V1">V1 = </label>
            <input
              className="input input-primary w-20"
              defaultValue={V1}
              id="V1"
              name="V1"
              required
              type="text"
            />
            <span className="ml-1">m/s</span>
          </div>
          <div className="m-auto">
            <label htmlFor="V2">V2 = </label>
            <input
              className="input input-primary w-20"
              defaultValue={V2}
              id="V2"
              name="V2"
              required
              type="text"
            />
             <span className="ml-1">m/s</span>
          </div>
          <div className="m-auto">
            <label htmlFor="s">s = </label>
            <input
              className="input input-primary w-20"
              defaultValue={s}
              id="s"
              name="s"
              required
              type="text"
            />
             <span className="ml-1">m</span>
          </div>
          <div className="flex justify-center">
            <input className="btn btn-primary" type="submit" value="Számol" />
          </div>
          <div className="flex justify-around">
            <p>t = {t.toFixed(3)}s</p>
          </div>
        </form>
      </div>
    </div>
            <Image
          alt="Autó"
          className="m-auto mt-4 rounded-xl"
          height={500}
          src="/images/ket_auto-removebg-preview.png"
          width={1200}
        />
</div>
  );
}
