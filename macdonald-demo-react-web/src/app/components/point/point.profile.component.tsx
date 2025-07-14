"use client";
import Image from "next/image";
const PointAndProfileComponent = () => {
  return (
    <div className="grid grid-cols-3 gap-2 mx-4 mt-4">
      <div className="col-span-3 h-14 flex justify-normal gap-3">
        <div className="">
          <Image
            src="/images/icons/McDonald.png"
            alt="Description"
            width={60}
            height={60}
            className=""
          />
        </div>
        <div className="">
          <p className="text-start text-2xl font-bold py-3 font-poppins">
            Good morning, Poppy!
          </p>
        </div>
      </div>
      <div className="col-span-3 flex justify-around items-center">
        <div className="grid grid-cols-1">
          <div className="text-xl font-bold text-center">875 Point</div>
          <div className="text-sm text-center">expire in 189 days</div>
        </div>
        <div className="text-sm text-center">Reward detail</div>
      </div>
      <div className="col-span-3 h-10 relative py-1.5">
        <div className="w-full bg-white h-7 border-2 border-gray-300 rounded-xl absolute z-10" />
        <div
          className="w-58 h-7  rounded-xl absolute z-10"
          style={{ backgroundColor: "#ffc837" }}
        />
      </div>
      <div className="col-span-3 text-sm">Just 45 point for a free coffee!</div>
    </div>
  );
};
export default PointAndProfileComponent;
