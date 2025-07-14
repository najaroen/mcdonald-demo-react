"use client";
import Image from "next/image";
// import FooterComponent from "../components/footer.component";
import Layout from "../components/layout";
import PointAndProfileComponent from "../components/point/point.profile.component";

const HomePage = () => {
  const menuList = [
    { name: "All Deal", desc: "รวมทุกคูปองสุดคุ้ม", path: "/all-deal" },
    {
      name: "Dessert \n Beverage",
      desc: "เติมความสดชื่นด้วยเมนูสุดฮิต",
      path: "/dessert-beverage",
    },
    { name: "Tasty \n Snack", desc: "", path: "/tasty-snack" },
    { name: "Chicken Nuggets", desc: "", path: "/chicken-nuggets" },
    { name: "Reward", desc: "", patผะh: "/reward" },
    { name: "Partner Deal", desc: "", path: "/partner-deal" },
    { name: "Location", desc: "", path: "/location" },
    { name: "Order History", desc: "", path: "/order-history" },
  ];
  return (
    <Layout>
      <div className="min-w-screen bg-white p-2">
         <PointAndProfileComponent /> 
      </div>
      <div
        className="min-w-screen pb-2 border-b-2 border-gray-200"
        // style={{ backgroundColor: "#ffc837" }}
      >
        <Image
          src="/images/covers/nasimekdi4x.png"
          alt="Description"
          width={1000}
          height={1000}
          className="w-full h-auto"
        />
        <div className="flex flex-row gap-2 mx-4 mt-4">
          <div className="flex flex-col">
            <p className="font-poppins text-xl font-bold">
              New Season Nai Mekedi
            </p>
            <p>get free RM7 discount</p>
          </div>
          <div className="content-start">B</div>
        </div>
      </div>
      <div
        className="min-w-screen p-5 mt-4 grid grid-cols-1 gap-4 h-85 overflow-y-auto
"
      >
        {menuList.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 w-full rounded-lg shadow-md h-52 relative overflow-hidden"
          >
            <div
              className="rounded-t-lg absolute z-10 w-full h-26"
              style={{ backgroundColor: "#ffc837" }}
            />
            <div className="rounded-b-lg absolute z-10 bg-green-300" />
            <div className="absolute z-20 right-0">
              <Image
                src="/images/products/cokezero.png"
                alt="Description"
                width={1000}
                height={1000}
                className="w-full h-auto rounded-t-lg"
                style={{ width: "60%", height: "100%" }}
              />
            </div>
            <div className="absolute z-17 left-0 top-10">
              <Image
                src="/images/products/freshfries.png"
                alt="Description"
                width={1000}
                height={1000}
                className="w-full h-auto rounded-t-lg"
                style={{ width: "60%", height: "100%" }}
              />
            </div>
            <div className="absolute z-25 left-30 top-10">
              <Image
                src="/images/products/hamberger.png"
                alt="Description"
                width={1000}
                height={1000}
                className="w-full h-auto rounded-t-lg"
                style={{ width: "60%", height: "100%" }}
              />
            </div>
            <p className="absolute z-30 left-3 top-2 font-bold text-3xl text-white">
              {item.name}
            </p>
            <p className="absolute z-30 left-3 bottom-2 font-bold text-xl text-black text-pretty xs:text-balance">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      {/* <FooterComponent /> */}
    </Layout>
  );
};
export default HomePage;
