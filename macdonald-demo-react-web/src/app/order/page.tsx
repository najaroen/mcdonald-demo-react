"use client";
import Image from "next/image";
import Layout from "../components/layout";

const OrderPage = () => {
  const menuList = [
    {
      title: "Dine In",
      desc: "Estimate waiting time",
      img: "/images/icons/eatin.png",
      time: "15",
      code: "dinein",
    },
    {
      title: "Pick up",
      desc: "Estimate waiting time",
      img: "/images/icons/pickup.png",
      code: "pickup",
      time: "9",
    },
    {
      title: "Delivery",
      desc: "to your doorstep",
      img: "/images/icons/delivery.png",
      time: undefined,
      code: "delivery",
    },
  ];
  return (
    <Layout className="bg-[#ffc837]">
      <p className="text-2xl font-bold px-4 pt-8">Start an Order</p>
      <p className="px-4 text-xs text-pretty w-72">
        Products pricing and availability may change depending upon your
        location
      </p>
      <div className="min-w-screen bg-white shadow-md rounded-t-4xl mt-4 1 gap-1 min-h-200 overflow-y-auto">
        <div className="w-full h-14 grid grid-cols-3 items-center justify-items-start">
          <div className="px-4 pt-2 h-12 col-span-2 flex flex-rows">
            <Image
              src="/images/icons/location.png"
              alt="Order Icon"
              width={40}
              height={40}
            />
            <p className="text-md items-center font-bold py-2">
              McDonalds Bukit Bintang
            </p>
          </div>
          <p className="text-md text-red-500 items-center font-bold pt-3">
            Change outlet
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mx-4 mt-4">
          {menuList.map((menu, index) => (
            <div
              key={`menu-order${index}`}
              className="w-full h-30 shadow-xl rounded-2xl grid grid-cols-3 items-center pl-8 pr-4"
            >
              <div className="grid grid-cols-1 items-center">
                <p className="text-3xl text-black items-center font-bold">
                  {menu.title}
                </p>
                <div>
                  <Image
                    src={menu.img}
                    alt="Order Icon"
                    width={70}
                    height={50}
                    className=""
                  />
                </div>
              </div>
              <div className="mx-4 grid grid-cols-1 items-center">
                <p className="font-bold text-md">{menu.desc}</p>
                {menu.time ? (
                  <div
                    className={`flex flex-rows gap-2 ${
                      +menu.time >= 10 ? "text-[#41983F]" : "text-[#FE7B28]"
                    }`}
                  >
                    <p className="text-3xl font-bold">{menu.time}</p>
                    <p className="text-md font-bold pt-2">Min</p>
                  </div>
                ) : null}
              </div>
              <div className="relative h-20">
                <p className="absolute bg-[#41983F] text-white text-md font-bold z-10 bottom-0 right-0 px-3 py-1 rounded-xl">
                  Order Now
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 mx-4 mt-10">
          <p className="text-3xl font-bold px-8">Order again</p>
          <div className="w-full h-30 shadow-xl rounded-2xl grid grid-cols-3 items-center pl-8 pr-4">
            <div className="grid grid-cols-1 items-center">
              <div>
                <Image
                  src={"/images/products/hamberger-tum.png"}
                  alt="Order Icon"
                  width={110}
                  height={100}
                  className=""
                />
              </div>
            </div>
            <div className="mx-4 grid grid-cols-1 items-center w-60">
              <p className="font-bold text-md leading-4">
                Big Mac™, Chicken McNuggets® + 3 product
              </p>
              <p className="text-xs mt-4">17/8/2025 1:48 PM</p>
            </div>
            <div className="relative h-20">
              <p className="absolute bg-[#ffc837] text-white text-md font-bold z-10 bottom-0 right-0 px-3 py-1 rounded-xl">
                Reorder
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default OrderPage;
