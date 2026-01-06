"use client";
import { useState } from "react";
export default function Home() {
  return (
    <div className="flex justify-center bg-gray-100 h-screen">
      <TourList />
    </div>
  );
}
const tour = [
  {
    id: 1,
    image: "/paris.png",
    price: "",
    title: "Best Of Paris In 7 Days Tour",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum sequi illo sed nam impedit blanditiis maiores, repudiandae alias deleniti. A eius incidunt veritatis repellendus aut? Dolor exercitationem a tempora!",
  },
  {
    id: 2,
    image: "/paris.png",
    price: "",
    title: "Best Of Paris In 7 Days Tour",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum sequi illo sed nam impedit blanditiis maiores, repudiandae alias deleniti. A eius incidunt veritatis repellendus aut? Dolor exercitationem a tempora!",
  },
  {
    id: 3,
    image: "/paris.png",
    price: "",
    title: "Best Of Paris In 7 Days Tour",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum sequi illo sed nam impedit blanditiis maiores, repudiandae alias deleniti. A eius incidunt veritatis repellendus aut? Dolor exercitationem a tempora!",
  },
  {
    id: 4,
    image: "/paris.png",
    price: "",
    title: "Best Of Paris In 7 Days Tour",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum sequi illo sed nam impedit blanditiis maiores, repudiandae alias deleniti. A eius incidunt veritatis repellendus aut? Dolor exercitationem a tempora!",
  },
  {
    id: 5,
    image: "/paris.png",
    price: "",
    title: "Best Of Paris In 7 Days Tour",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum sequi illo sed nam impedit blanditiis maiores, repudiandae alias deleniti. A eius incidunt veritatis repellendus aut? Dolor exercitationem a tempora!",
  },
  {
    id: 6,
    image: "/paris.png",
    price: "",
    title: "Best Of Paris In 7 Days Tour",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum sequi illo sed nam impedit blanditiis maiores, repudiandae alias deleniti. A eius incidunt veritatis repellendus aut? Dolor exercitationem a tempora!",
  },
  {
    id: 7,
    image: "/paris.png",
    price: "",
    title: "Best Of Paris In 7 Days Tour",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum sequi illo sed nam impedit blanditiis maiores, repudiandae alias deleniti. A eius incidunt veritatis repellendus aut? Dolor exercitationem a tempora!",
  },
];

const TourList = () => {
  const [tourList, setTourList] = useState(tour);
  const clearList = () => {
    setTourList([]);
  };
  //   console.log(clearList);
  return (
    <div>
      <h1 className="text-4xl p-2">Our Tours</h1>
      <p className="text-green-300 p-3 font-bold">----------------------</p>
      {tourList.map(({ id, image, price, title, text }) => (
        <TourListItem
          key={id}
          image={image}
          price={price}
          title={title}
          text={text}
          clearList={clearList}
        />
      ))}
    </div>
  );
};

const TourListItem = ({ image, price, title, text, clearList }) => {
  return (
    <div>
      <div className="w-150 h-200 bg-white flex flex-col rounded-2xl ">
        <div>
          <img className="w-150 h-125 rounded-2xl" src={image} /> <p>{price}</p>
        </div>
        <div>
          <h3 className="pt-6 p-2.5 flex justify-center text-3xl font-bold">
            {title}
          </h3>
          <p className=" p-6 flex justify-center">{text}</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={clearList}
            className="bg-gray-500 rounded-sm w-50 h-12.5"
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
};
