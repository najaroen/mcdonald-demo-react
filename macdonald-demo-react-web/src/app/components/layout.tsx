"use client";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";

const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={className}>
      <div className="">{children}</div>
      <div className="h-[120px] fixed bottom-0 w-full pt-2 bg-[transparent] z-100">
        <div className="h-10 w-full w-full relative bg-[transparent]">
          <div className="bg-[#FDBC0E] w-[220px] h-12 rounded-tl-[50px] absolute bottom-0 right-0 z-10 flex items-center justify-start px-7">
            <p className="font-bold">Total: 259 THB</p>
          </div>
          <div className="rounded-tl-[50px] absolute bottom-1 right-2 z-12">
            <Image
              src="/images/icons/McOrder.png"
              alt="Description"
              width={50}
              height={50}
              className="content-center mx-auto"
            />
          </div>
          <div className="bg-red-500 absolute -top-9 right-1 z-12 font-bold text-center text-[#FDBC0E] rounded-[200px] px-2">
            4
          </div>
        </div>
        <div className="bg-gray-100 border-t-1 border-gray-300 flex justify-around py-3">
          <Link href="/home">
            <Image
              src="/images/icons/McDonald.png"
              alt="Description"
              width={30}
              height={30}
              className="content-center mx-auto"
            />
            <p className="text-center font-bold text-xs pt-1">Home</p>
          </Link>
          <Link href={"/reward"}>
            <Image
              src="/images/icons/McReward.png"
              alt="Description"
              width={40}
              height={40}
              className="content-center mx-auto" //animate-bounce
            />
            <p className="text-center font-bold text-xs pt-1">Reward</p>
          </Link>
          <Link href="/order">
            <Image
              src="/images/icons/McOrder.png"
              alt="Description"
              width={20}
              height={20}
              className="content-center mx-auto"
            />
            <p className="text-center font-bold text-xs pt-1">Order</p>
          </Link>
          <Link href="/more">
            <Image
              src="/images/icons/McMore.png"
              alt="Description"
              width={30}
              height={30}
              className="content-center mx-auto"
            />
            <p className="text-center text-xs font-bold">More</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Layout;
