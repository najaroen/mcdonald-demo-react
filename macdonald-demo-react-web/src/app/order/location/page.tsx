"use client";
import Image from "next/image";
import Layout from "@/app/components/layout";

const LocationPage = () => {
  const storeList = [
    {
      image: "/images/store/store1.png",
      title: "McDonalds Bukit Bintang",
      desc: "120-120A, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur",
    },
    {
      image: "/images/store/store1.png",
      title: "McDonald's Suria KLCC",
      desc: "120-120A, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur",
    },
    {
      image: "/images/store/store2.png",
      title: "McDonald's Wisma Lim Foo Yong DT",
      desc: "120-120A, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur",
    },
    {
      image: "/images/store/store3.png",
      title: "McDonalds Bukit Bintang",
      desc: "120-120A, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur",
    },
    {
      image: "/images/store/store4.png",
      title: "McDonald's NU Sentral",
      desc: "120-120A, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur",
    },
    {
      image: "/images/store/store5.png",
      title: "McDonald's KL Sentral",
      desc: "120-120A, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur",
    },
  ];
  return (
    <Layout className="bg-[#ffc837]">
      <div className="px-8 pt-20" />
      <div className="w-full h-200 bg-white rounded-4xl">
        <p className="px-8 py-4 text-xl font-bold">Nearest Outlet</p>
        <div className="md:hidden overflow-y-auto">
          {/* <div className="flex flex-column"></div> */}
          {storeList.map((value, index) => (
            <div
              key={`index-store${index}`}
              className="w-full h-[100px] flex flex-rows border-b-1 border-gray-300"
            >
              <div className="flex-none">
                <Image
                  src={value.image || "/images/store/store1.png"}
                  alt="Description"
                  width={140}
                  height={66}
                  objectFit="contain"
                  className="py-1"
                />
              </div>
              <div className="flex-2 px-3">
                <p className="leading-4 p-1 text-md font-bold">{value.title}</p>
                <p className="text-xs px-1">{value.desc}</p>
              </div>
              <div className="flex-1 content-center">
                <div className="flex flex-rows bg-[#FFC837] justify-center py-2 mx-1 rounded-xl">
                  <Image
                    src={"/images/icons/IconSets.png"}
                    width={15}
                    height={15}
                    alt="iconset"
                  />
                  <p className="mx-2 text-black text-xs font-bold">Dine in</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default LocationPage;
