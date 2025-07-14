"use client";
import Image from "next/image";
import Layout from "../components/layout";
import PointAndProfileComponent from "../components/point/point.profile.component";

const RewardPage = () => {
  const rewardList = [
    {
      name: "Cappuccino",
      desc: "Just 45 point for a free coffee!",
      image: "/images/products/Cappuccino.png",
      point: 1000,
    },
    {
      name: "Premium Cappuccino ",
      desc: "Just 45 point for a free coffee!",
      image: "/images/products/CappuccinoM1.png",
      point: 1500,
    },
    {
      name: "McCafeLatte",
      desc: "Just 45 point for a free coffee!",
      image: "/images/products/McCafeLatte.png",
      point: 900,
    },
    {
      name: "Premium Roast Coffee",
      desc: "Just 45 point for a free coffee!",
      image: "/images/products/PremiumRoastCoffee.png",
      point: 1250,
    },
  ];
  const exclusivePreviews = [
    {
      image: "/images/covers/pre-drak.png",
      alt: "Exclusive Preview 1",
    },
    {
      image: "/images/covers/pre-mala.png",
      alt: "Exclusive Preview 2",
    },
  ];
  return (
    <Layout className="bg-[#ffc837]">
      <div className="min-w-screen bg-white p-2">
        <PointAndProfileComponent />
        <div className="px-4 mt-5">
          <p className="font-bold text-2xl">Reward</p>
        </div>
        <div className="md:hidden overflow-x-auto">
          <div className="flex gap-4 px-4 py-1">
            {rewardList.map((item, index) => (
              <div
                key={`index-of-reward${index}`}
                className="w-[160px] h-[200px] bg-white rounded-lg p-2 shadow-md flex-shrink-0 p-2 border-1 border-gray-200 shadow-md grid grid-cols-1 content-center"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={200}
                  className="object-cover mb-2 mx-auto"
                />
                <p className="text-md text-center font-bold">{item.name}</p>
                <p className="text-xs text-center">{item.point} point</p>
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 mt-5">
          <p className="font-bold text-2xl">Exclusive Previews</p>
        </div>
        <div className="md:hidden overflow-x-auto">
          <div className="flex gap-4 px-4 py-1">
            {exclusivePreviews.map((item, index) => (
              <div
                key={`item-ex-previews${index}`}
                className="w-[344px] h-[168px] rounded-lg  shadow-md flex-shrink-0 grid grid-cols-1 content-center"
              >
                <Image
                  src={item.image}
                  alt="Exclusive Preview"
                  width={344}
                  height={168}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RewardPage;
