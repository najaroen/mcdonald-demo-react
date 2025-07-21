"use client";
import Image from "next/image";

const PickupLayout = ({
  children,
  className,
  title1 = "Back to menu",
  title2 = "Your order",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  title1: string;
  title2: string;
  onClick?: () => void;
}) => {
  return (
    <div className={`${className}`}>
      <div className="w-full h-25 flex flex-rows">
        <div className="w-full flex flex-col justify-evenly px-4">
          <div className="flex flex-rows gap-1">
            <button onClick={onClick}>
              <Image
                src="/images/icons/back.png"
                alt="back-btn"
                width={15}
                height={15}
                className="rounded-full"
              />
            </button>
            <p className="font-bold text-2xl text-[#FFC837]">{title1}</p>
          </div>
          <p className="px-4 font-bold text-xl">{title2}</p>
        </div>
      </div>
      <div className="">{children}</div>
      <div className="fixed bottom-0 z-120 w-full h-20 bg-[#FFF] flex justify-around items-center">
        <div className="grid grid-cols-1">
            <p className="text-xl font-bold">Total: {1340} Bath</p>
            <p className="font-md">incl.tax</p>
        </div>
        <p className="text-[#FFC837] font-bold text-2xl">Next</p>
      </div>
    </div>
  );
};
export default PickupLayout;
