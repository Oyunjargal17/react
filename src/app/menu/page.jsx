"use client";
import { useState } from "react";
const menus = [
  {
    id: 1,
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-1.jpeg",
    title: "buttermilk pancakes",
    price: "$15.99",
    text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 2,
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-2.jpeg",
    title: "diner double",
    price: "$13.99",
    text: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 3,
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-3.jpeg",
    title: "godzilla milkshake",
    price: "$6.99",
    text: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
];
export default function Home() {
  return (
    <div>
      <MenuList />
    </div>
  );
}
const MenuList = () => {
  const [menuList, setMenuList] = useState(menus);
  return (
    <div className="bg-[#f9fafc] h-screens ">
      <div className="flex flex-col justify-center items-center p-3">
        <h1 className="text-3xl ">Our Menu</h1>
        <div className="h-1 w-20 bg-[#f4a016] mt-2"></div>
        <div className=" flex gap-3 mt-4">
          <button className="bg-[#f49d0e] p-2 rounded-xs text-white">
            All
          </button>
          <button className="bg-[#f49d0e] p-2 rounded-xs text-white">
            Breakfast
          </button>
          <button className="bg-[#f49d0e] p-2 rounded-xs text-white">
            Lunch
          </button>
          <button className="bg-[#f49d0e] p-2 rounded-xs text-white">
            Shakes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {menus.map(({ id, image, title, price, text }) => (
          <MenuListItem
            key={id}
            id={id}
            image={image}
            title={title}
            price={price}
            text={text}
          />
        ))}
      </div>
    </div>
  );
};

const MenuListItem = ({ id, image, title, price, text }) => {
  return (
    <div>
      <div>
        <img
          className="w-[400px] h-[250px] rounded-sm mt-4"
          src={image}
          alt="image"
        />
        <h1>{title}</h1>
        <p>{price}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
