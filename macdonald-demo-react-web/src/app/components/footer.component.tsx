"use client";
import Image from "next/image";

const FooterComponent = () => {
  return (
    <div className="fixed bottom-0 w-full h-20 border-t-1 border-gray-300 p-4 bg-gray-100 flex justify-around">
      <div>
        <Image
          src="/images/icons/McDonald.png"
          alt="Description"
          width={35}
          height={35}
          className="content-center mx-auto"
        />
        <p className="text-center text-sm font-bold">เมนูหลัก</p>
      </div>
      <div>
        <Image
          src="/images/icons/McReward.png"
          alt="Description"
          width={50}
          height={50}
          className="content-center mx-auto" //animate-bounce
        />
        <p className="text-center text-sm">รางวัล</p>
      </div>
      <div>
        <Image
          src="/images/icons/McOrder.png"
          alt="Description"
          width={30}
          height={30}
          className="content-center mx-auto"
        />
        <p className="text-center text-sm">ออเดอร์</p>
      </div>
      <div>
        <Image
          src="/images/icons/McMore.png"
          alt="Description"
          width={40}
          height={40}
          className="content-center mx-auto"
        />
        <p className="text-center text-sm">More</p>
      </div>
    </div>
  );
};
export default FooterComponent;
