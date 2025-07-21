"use client";
import Image from "next/image";

interface IPickupMenuCardProps {
  img: string;
  name: string;
  to?: string;
  onClick?: () => void;
}
const PickupMenuCard = ({ menu }: { menu: IPickupMenuCardProps }) => {
  return (
    <>
      <Image
        src={menu.img}
        alt="Description"
        width={140}
        height={100}
        className="mx-auto w-full items-center h-auto rounded-t-lg my-4"
        style={{ width: "60%", height: "60%" }}
      />
      <button className="text-center w-full text-xl font-bold bg-red-500" onClick={menu.onClick}>
        {menu.name}
      </button>
    </>
  );
};
export default PickupMenuCard;
