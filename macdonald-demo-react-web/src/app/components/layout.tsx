"use client";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";

const Layout = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={className}>
      <div className="">{children}</div>
      <div className="fixed bottom-0 w-full border-t-1 border-gray-300 p-4 bg-gray-100 flex justify-around">
        <Link href="/home">
          <Image
            src="/images/icons/McDonald.png"
            alt="Description"
            width={35}
            height={35}
            className="content-center mx-auto"
          />
          <p className="text-center text-sm font-bold">เมนูหลัก</p>
        </Link>
        <Link href={"/reward"}>
          <Image
            src="/images/icons/McReward.png"
            alt="Description"
            width={50}
            height={50}
            className="content-center mx-auto" //animate-bounce
          />
          <p className="text-center text-sm">รางวัล</p>
        </Link>
        <Link href="/order">
          <Image
            src="/images/icons/McOrder.png"
            alt="Description"
            width={30}
            height={30}
            className="content-center mx-auto"
          />
          <p className="text-center text-sm">ออเดอร์</p>
        </Link>
        <Link href="/more">
          <Image
            src="/images/icons/McMore.png"
            alt="Description"
            width={40}
            height={40}
            className="content-center mx-auto"
          />
          <p className="text-center text-sm">More</p>
        </Link>
      </div>
    </div>
  );
};

export default Layout;
