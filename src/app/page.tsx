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

        <div className="flex w-full flex-col items-center gap-4 py-4">
          <div className="flex w-2/5 cursor-pointer items-center justify-center gap-4 rounded-md bg-black px-2 py-1 active:bg-black/80 md:w-1/5">
            <a
              href="https://app.astroport.fi/swap?to=usei&from=sei1ugvzw3ge7le6s3wk7yg4nqvxx9njps0x8ekjtn6z7vg8wv9pkj3smapzd0"
              target="_blank"
            >
              <button className="flex w-fit flex-row items-center justify-between gap-4 text-xl">
                Trade
              </button>
            </a>
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

  
            <div className="flex w-2/5 cursor-pointer items-center justify-center gap-4 rounded-md bg-black px-2 py-1 active:bg-black/80 md:w-1/5">
         
            <a
            href="https://coinhall.org/sei/sei1uagqyzgw49n6jjwey2c44htwgtjgs4vvzt45cxsvswrg74z5z9jsce6pfp"
            target="_blank"
          >
              <button className="curo flex w-fit flex-row items-center justify-between gap-4 text-xl">
                Chart
              </button>
              </a>      
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
