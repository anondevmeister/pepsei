import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex h-[10%] items-center justify-between bg-turquoise p-4 font-semibold md:px-8">
      <div className="flex items-center gap-2">
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <h1>PEPSEI</h1>

            <Image
              width={32}
              height={32}
              alt={"logo"}
              src={"/pepeplaceholder.png"}
              className="cursor-pointer rounded-full active:opacity-80"
            />
          </div>
        </Link>

        <div className="flex gap-2">
          <a href="https://twitter.com/pepseiclub" target="_blank">
            <Image
              width={32}
              height={32}
              alt={"logo"}
              src={"/x.png"}
              className="cursor-pointer rounded-full active:opacity-80"
            />
          </a>

          <a href="https://t.me/+LA4aRrAghT8zMDlk">
            <Image
              width={32}
              height={32}
              alt={"logo"}
              src={"/tglogo2.png"}
              className="cursor-pointer rounded-full active:opacity-80"
            />
          </a>
        </div>
      </div>

      <Link href={"/roadmap"}>
        <div className="flex flex-row gap-2 text-xl font-bold underline ">
          <button className="active:text-black/80">Roadmap</button>
        </div>
      </Link>
    </header>
  );
};

export default Header;
