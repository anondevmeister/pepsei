import Link from "next/link";
import Header from "~/components/Header";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className=" custom-gradient h-screen w-screen">
      <Header />
      <div className="flex flex-col items-center gap-2 p-4 text-xl font-bold text-turquoise">
        <h1>The official mascot of SEI</h1>
        <Image
          width={200}
          height={200}
          alt={"logo"}
          src={"/pepsei.png"}
          className="rounded-lg"
        />

        <div className="flex-col flex gap-4 py-4 w-full items-center">
          <div className="flex items-center gap-4 w-2/5 md:w-1/5 justify-center py-1 px-2 rounded-md bg-black active:bg-black/80 cursor-pointer">
            <button className="text-xl flex w-fit flex-row items-center justify-between gap-4">
              Trade
            </button>

            <div>
              <Image
                width={32}
                height={32}
                alt={"logo"}
                src={"/astroport2.png"}
                className="rounded-full"
              />
          </div>
            </div>

          
            <div className="flex items-center gap-4 w-2/5 md:w-1/5 justify-center py-1 px-2 rounded-md bg-black active:bg-black/80 cursor-pointer">
            <button className="text-xl flex w-fit flex-row items-center justify-between gap-4 curo">
              Chart
            </button>

            <div>
              <Image
                width={32}
                height={32}
                alt={"logo"}
                src={"/coinhall.png"}
                className="rounded-full"
              />
          </div>
            </div>


        </div>
      </div>
    </main>
  );
}
