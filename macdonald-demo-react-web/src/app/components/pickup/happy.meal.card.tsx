"use client";
import Image from "next/image";

const HappyMealCard = () => {
  return (
    <div className="bg-[#fff] w-full h-25 shadow-xl rounded-2xl flex flex-rows justify-between items-center px-6">
      <div className="flex flex-rows gap-1">
        <div className="w-20">
          <Image
            src="/images/icons/gift_certificates.png"
            alt="Description"
            width={50}
            height={100}
            className=""
          />
        </div>
        <div className="font-bold whitespace-pre-line">
          Happy Meal Double Happy
        </div>
      </div>
      <Image
        src="/images/icons/MOP_BestBurger_CBHM.png"
        alt="Description"
        width={1000}
        height={1000}
        className=""
        style={{ width: "30%", height: "100%" }}
      />
    </div>
  );
};

export default HappyMealCard;
