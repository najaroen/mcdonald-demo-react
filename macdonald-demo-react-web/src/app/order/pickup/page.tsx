"use client";
import Image from "next/image";

import Layout from "@/app/components/layout";

const PickupPage = () => {
  const menuList = [
    {
      img: "/images/menu-category/EggMcMuffin.png",
      name: "McMuffin",
      to: "/food/mcmuffin",
    },
    {
      img: "/images/menu-category/GardenSideSalad.png",
      name: "Salad",
      to: "/food/mcmuffin",
    },
    {
      img: "/images/menu-category/6pcmac.png",
      name: "McCrispy",
      to: "/food/mcmuffin",
    },
    {
      img: "/images/menu-category/MOP_SEB_Chicken_2.png",
      name: "Scrambled",
      to: "/food/mcmuffin",
    },
    {
      img: "/images/menu-category/GrilledChickenSalad.png",
      name: "Berger",
      to: "/food/mcmuffin",
    },
  ];
  return (
    <Layout className="bg-[#ffc837]">
      <div className="pt-20" />
      <div className="md:hidden grid grid-cols-4 px-4">
        <div className="col-span-2">
          <p className="font-bold text-3xl">Pickup</p>
        </div>
        <div className="col-span-2 relative">
          <Image
            src={"/images/covers/timeing.png"}
            alt="Order Icon"
            width={220}
            height={50}
            className="absolute"
          />
          <div className="absolute flex gap-2 py-6">
            <p className="text-md items-center font-bold mx-auto pl-4">
              Waiting time
            </p>
            <p className="text-xs mx-auto font-bold pt-1 text-[#FE7B28]">
              8-10 min
            </p>
          </div>
        </div>
        <div className="col-span-4 h-16">
          <div className=" pt-2 h-12 col-span-2 flex flex-rows">
            <Image
              src="/images/icons/location.png"
              alt="Order Icon"
              width={40}
              height={40}
            />
            <p className="text-md items-center font-bold py-3 w-30 leading-5">
              McDonalds Bukit Bintang
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mb-2 bg-white rounded-t-4xl px-4 pt-4">
        <div className="grid grid-cols-2 px-1">
          <div>
            <h1 className="text-3xl font-bold text-[#DB0007]">Menu</h1>
          </div>
          <div className="text-end text-md">
            <p className="font-bold">Serving Breakfast</p>
            <p className="text-end">22:01-9:59</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-2 mb-2">
          {menuList &&
            menuList.map((item, index) => (
              <div
                key={`index-menu-pickup${index}`}
                className="w-[190px] h-[220px] border-none shadow-md rounded-3xl"
              >
                <div className="rounded-b-lg " />
                <Image
                  src={item.img}
                  alt="Description"
                  width={140}
                  height={100}
                  className="mx-auto w-full items-center h-auto rounded-t-lg my-4"
                  style={{ width: "60%", height: "60%" }}
                />
                <p className="text-center w-full text-xl font-bold">
                  {item.name}
                </p>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};
export default PickupPage;
