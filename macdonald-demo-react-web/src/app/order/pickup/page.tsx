"use client";
import Image from "next/image";

import Layout from "@/app/components/layout";
import HappyMealCard from "@/app/components/pickup/happy.meal.card";
import PickupMenuCard from "@/app/components/pickup/pickup.menu.card";
import { useState } from "react";
import PickupLayout from "@/app/components/pickup/pickup.layout";

enum PickupMenu {
  McMuffin = "mcmuffin",
  Salad = "salad",
  McCrispy = "mccrispy",
  Scrambled = "scrambled",
  Berger = "berger",
}
enum PickupCategory {
  All = "all",
  Beef = "beef",
  Chicken = "chicken",
  Fish = "fish",
}

enum PageState {
  Menu = "menu",
  SelectedMenu = "selectedMenu",
  AddToCard = "addToCard",
  OrderSummary = "orderSummary",
  Payment = "payment",
  OrderComplete = "orderComplete",
}
const PickupPage = () => {
  const [pickupMenu, setPickupMenu] = useState<PickupMenu | undefined>(
    undefined
  );
  const [pickupCategory, setPickupCategory] = useState<PickupCategory>(
    PickupCategory.All
  );
  const [pageState, setPageState] = useState<PageState>(PageState.Menu);
  const category = [
    PickupCategory.All,
    PickupCategory.Beef,
    PickupCategory.Chicken,
    PickupCategory.Fish,
  ];
  const handleMenuSelect = (menu: PickupMenu) => {
    console.log("Selected menu:", menu);
    // Here you can handle the menu selection logic, e.g., navigate to a different page
    // or update the state to show the selected menu details.

    if (pickupMenu === menu) {
      setPickupMenu(undefined); // Deselect if already selected
      return;
    }
    setPickupMenu(menu);
  };
  const handleCategorySelect = (category: PickupCategory) => {
    console.log("Selected category:", category);
    // Here you can handle the category selection logic, e.g., filter items based on the selected category.
    if (pickupCategory === category) {
      setPickupCategory(PickupCategory.All); // Reset to All if already selected
      return;
    }
    setPickupCategory(category);
  };
  const handlePageStateChange = (state: PageState) => {
    console.log("Page state changed to:", state);
    // Here you can handle the page state change logic, e.g., navigate to a different page
    // or update the state to show the selected page content.
    setPageState(state);
  };

  const menuList = [
    {
      img: "/images/menu-category/EggMcMuffin.png",
      name: "McMuffin",
      to: "/food/mcmuffin",
      onClick: () => {
        handleMenuSelect(PickupMenu.McMuffin);
        handlePageStateChange(PageState.SelectedMenu);
      },
    },
    {
      img: "/images/menu-category/GardenSideSalad.png",
      name: "Salad",
      to: "/food/mcmuffin",
      onClick: () => handleMenuSelect(PickupMenu.Salad),
    },
    {
      img: "/images/menu-category/6pcmac.png",
      name: "McCrispy",
      to: "/food/mcmuffin",
      onClick: () => handleMenuSelect(PickupMenu.McCrispy),
    },
    {
      img: "/images/menu-category/MOP_SEB_Chicken_2.png",
      name: "Scrambled",
      to: "/food/mcmuffin",
      onClick: () => handleMenuSelect(PickupMenu.Scrambled),
    },
    {
      img: "/images/menu-category/GrilledChickenSalad.png",
      name: "Berger",
      to: "/food/mcmuffin",
      onClick: () => handleMenuSelect(PickupMenu.Berger),
    },
  ];
  const itemsList = [
    {
      img: "/images/products/hamberger-tum.png",
      name: "Big Mac",
      price: 10.99,
      to: "/food/big-mac",
      onClick: () => {
        console.log("Big Mac selected");
      },
    },
    {
      img: "/images/products/hamberger-tum.png",
      name: "Chicken Burger",
      to: "/food/chicken-burger",
      price: 8.99,
      onClick: () => {
        console.log("Big Mac selected");
      },
    },
    {
      img: "/images/products/hamberger-tum.png",
      name: "Chicken Burger",
      to: "/food/chicken-burger",
      price: 8.99,
      onClick: () => {
        console.log("Big Mac selected");
      },
    },
    {
      img: "/images/products/hamberger-tum.png",
      name: "Chicken Burger",
      to: "/food/chicken-burger",
      price: 8.99,
      onClick: () => {
        console.log("Big Mac selected");
      },
    },
    {
      img: "/images/products/hamberger-tum.png",
      name: "Chicken Burger",
      to: "/food/chicken-burger",
      price: 8.99,
      onClick: () => {
        console.log("Big Mac selected");
      },
    },
    {
      img: "/images/products/hamberger-tum.png",
      name: "Chicken Burger",
      to: "/food/chicken-burger",
      price: 8.99,
      onClick: () => {
        console.log("Big Mac selected");
      },
    },
    {
      img: "/images/products/hamberger-tum.png",
      name: "Chicken Burger",
      to: "/food/chicken-burger",
      price: 8.99,
      onClick: () => {
        console.log("Big Mac selected");
      },
    },
  ];
  const MenuCard = () => {
    return (
      <>
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
                <PickupMenuCard menu={item} />
              </div>
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4 my-4">
          <HappyMealCard />
        </div>
      </>
    );
  };
  const SelectedMenu = () => {
    return (
      <div className="grid grid-cols-1 gap-4">
        <div className="w-full h-25 flex flex-rows">
          <div className="w-1/2 flex  flex-col justify-evenly px-4">
            <div className="flex flex-rows gap-1">
              <button
                onClick={() => {
                  setPickupMenu(undefined);
                  handlePageStateChange(PageState.Menu);
                }}
              >
                <Image
                  src="/images/icons/back.png"
                  alt="back-btn"
                  width={15}
                  height={15}
                  className="rounded-full"
                />
              </button>
              <p className="font-bold text-2xl  text-[#FFC837]">Back</p>
            </div>
            <div />
            <p className="px-4 font-bold text-3xl">Burgers</p>
          </div>
          <div className="w-1/2 flex items-end justify-end">
            <Image
              src="/images/products/hamberger-tum.png"
              alt="back-btn"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="mx-5 flex flex-cols gap-4">
          {category.map((item, index) => (
            <button
              onClick={() => handleCategorySelect(item)}
              key={`index-category${index}`}
              className={`text-[#6b6b6b] text-md px-4 py-1 shadow-md rounded-full ${
                item === pickupCategory ? "font-bold" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="h-130 scroll-y overflow-y-auto">
          <div className="flex flex-col">
            {itemsList &&
              itemsList.map((item, index) => (
                <div
                  onClick={() => {
                    console.log("Selected item:", item.name);
                    handlePageStateChange(PageState.AddToCard);
                  }}
                  key={`menuitem${index}`}
                  className="flex flex-rows w-full h-25 items-center border-b-1 border-gray-200"
                >
                  <div className="w-1/3">
                    <Image
                      src="/images/products/hamberger-tum.png"
                      alt="back-btn"
                      width={120}
                      height={120}
                      className="rounded-full"
                    />
                  </div>
                  <div className="w-1/2 grid grid-cols-1 gap-4">
                    <p className="font-bold text-xl">{item.name}</p>
                    <p>{item.price * 32} Bath</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  };
  const ContentPickup = () => {
    switch (pageState) {
      case PageState.Menu:
        return <MenuCard />;
      case PageState.SelectedMenu:
        return <SelectedMenu />;
      case PageState.AddToCard:
        return <AddToCard />;
      case PageState.OrderSummary:
        return <OrderSummary />;
      case PageState.Payment:
        return <div>Payment</div>;
      case PageState.OrderComplete:
        return <div>Order Complete</div>;
      default:
        return <MenuCard />;
    }
  };
  const AddToCard = () => {
    return (
      <div className="w-full bg-white">
        <div className="m-8 grid grid-cols-1 gap-4">
          <p className="text-2xl font-bold">Egg McMuffin®</p>
          <p className="text-xl">259 Bath</p>
        </div>
        <div className="grid grid-cols-1 m-8 place-items-center">
          <div className="">
            <Image
              src="/images/products/hamberger-tum.png"
              alt="Order Icon"
              width={240}
              height={240}
              className="rounded-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="flex flex-rows w-[81px] h-[30px] bg-white rounded-xl items-center justify-between px-2 border-1 border-gray-200 shadow-md">
              <div className="text-gray-300">-</div>
              <div className="text-gray-400">1</div>
              <div className="text-gray-300">+</div>
            </div>
            <div className="flex flex-rows h-[30px] bg-white rounded-xl items-center justify-center px-2 border-1 border-gray-200 shadow-md">
              <div className="text-gray-400 text-[14px]">Customize</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <button
              onClick={() => {
                handlePageStateChange(PageState.SelectedMenu);
              }}
              className="bg-[#fec837] text-white text-xl font-bold w-[150px] h-[45px] px-3 py-1 rounded-2xl"
            >
              Back
            </button>
            <button
              onClick={() => {
                handlePageStateChange(PageState.OrderSummary);
              }}
              className="bg-[#fec837] text-white text-xl font-bold h-[45px]  px-3 py-1 rounded-2xl"
            >
              Add to order
            </button>
          </div>
        </div>
      </div>
    );
  };
  const OrderSummary = () => {
    return (
      <PickupLayout
        onClick={() => {
          handlePageStateChange(PageState.AddToCard);
        }}
        title1="Back to Menu"
        title2="Your order"
        className="bg-white mt-2"
      >
        <div className="h-120 w-full overflow-y-auto">
          <div className="">
            {itemsList.map((item, index) => (
              <div
                key={`order-item${index}`}
                className={`w-full h-25 items-center border-b-1 border-gray-200 ${
                  index === 0 ? "border-t-1" : ""
                } flex flex-rows justify-center px-1`}
              >
                <div className="w-1/3 h-full flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt="Order Icon"
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>
                <div className="w-1/2 h-full flex items-center justify-start">
                  <div className="grid grid-cols-1 gap-2">
                    <p className="font-bold text-xl">{item.name}</p>
                    <p className="text-md">{item.price * 32} Bath</p>
                  </div>
                </div>
                <div className="w-1/4 h-full flex items-center justify-around">
                  <div className="grid grid-cols-1 gap-7">
                    <div className="flex flex-rows gap-1">
                      <div className="bg-white p-1 rounded-2xl flex items-center justify-center border-1 border-gray-200 shadow-md">
                        <Image
                          src="/images/icons/edit.png"
                          alt="minus"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="bg-white w-[49px]  rounded-2xl flex items-center justify-around border-1 border-gray-200 shadow-md">
                        <p className="text-gray-400">1</p>
                        <button className="text-gray-300">+</button>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <p className="leading-5">RM</p>
                      <p className="text-xl font-bold">{item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="p-4 font-bold text-2xl">Add more?</p>
        <div className="px-4 h-[180px] flex items-center bg-blue-0 overflow-x-auto">
          <div className="flex flex-rows gap-4">
            <div className="w-80 h-30 py-2 bg-white mb-10 rounded-4xl border-1 border-gray-200 shadow-md flex flex-rows items-center justify-center">
              <div className="h-full w-1/3 flex items-center justify-center">
                <Image
                  src="/images/products/McCafeLatte.png"
                  alt="Order Icon"
                  width={70}
                  height={70}
                  className="rounded-full mx-auto"
                />
              </div>
              <div className="h-full w-1/2 flex items-center">
                <div className=" h-full flex items-center p-1 text-md leading-5">
                  McCafé Premium Roast Coffee (M)
                </div>
              </div>
              <div className="h-full w-1/3 flex flex-col items-center py-6">
                <p className="line-through">80 Bath</p>
                <p className="font-bold text-xl">49 Bath</p>
              </div>
            </div>
           {/*START   */}
           <div className="w-80 h-30 py-2 bg-white mb-10 rounded-4xl border-1 border-gray-200 shadow-md flex flex-rows items-center justify-center">
              <div className="h-full w-1/3 flex items-center justify-center">
                <Image
                  src="/images/products/McCafeLatte.png"
                  alt="Order Icon"
                  width={70}
                  height={70}
                  className="rounded-full mx-auto"
                />
              </div>
              <div className="h-full w-1/2 flex items-center">
                <div className=" h-full flex items-center p-1 text-md leading-5">
                  McCafé Premium Roast Coffee (M)
                </div>
              </div>
              <div className="h-full w-1/3 flex flex-col items-center py-6">
                <p className="line-through">80 Bath</p>
                <p className="font-bold text-xl">49 Bath</p>
              </div>
            </div>
            {/* START  */}
            <div className="w-80 h-30 py-2 bg-white mb-10 rounded-4xl border-1 border-gray-200 shadow-md flex flex-rows items-center justify-center">
              <div className="h-full w-1/3 flex items-center justify-center">
                <Image
                  src="/images/products/McCafeLatte.png"
                  alt="Order Icon"
                  width={70}
                  height={70}
                  className="rounded-full mx-auto"
                />
              </div>
              <div className="h-full w-1/2 flex items-center">
                <div className=" h-full flex items-center p-1 text-md leading-5">
                  McCafé Premium Roast Coffee (M)
                </div>
              </div>
              <div className="h-full w-1/3 flex flex-col items-center py-6">
                <p className="line-through">80 Bath</p>
                <p className="font-bold text-xl">49 Bath</p>
              </div>
            </div>
          </div>
        </div>
      </PickupLayout>
    );
  };
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
      <div className="md:hidden w-full mb-10 bg-[#fff] rounded-t-4xl pt-4">
        {ContentPickup()}
      </div>
    </Layout>
  );
};
export default PickupPage;
