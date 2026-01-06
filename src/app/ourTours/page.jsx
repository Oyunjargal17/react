"use client";
import { useState } from "react";
export default function Home() {
  return (
    <div className=" bg-gray-100 h-screens flex flex-col gap-6 justify-center items-center">
      <h1 className="text-4xl pb-4 text-center border-b-4 w-100 border-b-green-500">
        Our Tours
      </h1>

      <TourList />
    </div>
  );
}
const tour = [
  {
    id: 1,
    image: "/paris.png",
    price: "$2000",
    title: "Best Of Paris In 7 Days Tour",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum sequi illo sed nam impedit blanditiis maiores, repudiandae alias deleniti. A eius incidunt veritatis repellendus aut? Dolor exercitationem a tempora!",
  },
  {
    id: 2,
    image: "/ireland.png",
    price: "$1800",
    title: "Best Of Paris In 7 Days Tour",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum sequi illo sed nam impedit blanditiis maiores, repudiandae alias deleniti. A eius incidunt veritatis repellendus aut? Dolor exercitationem a tempora!",
  },
  {
    id: 3,
    image: "/vienna.png",
    price: "$2200",
    title: "Best Of Paris In 7 Days Tour",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum sequi illo sed nam impedit blanditiis maiores, repudiandae alias deleniti. A eius incidunt veritatis repellendus aut? Dolor exercitationem a tempora!",
  },
  {
    id: 4,
    image: "/rome.png",
    price: "$1900",
    title: "Best Of Paris In 7 Days Tour",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum sequi illo sed nam impedit blanditiis maiores, repudiandae alias deleniti. A eius incidunt veritatis repellendus aut? Dolor exercitationem a tempora!",
  },
  {
    id: 5,
    image: "/poland.png",
    price: "$1700",
    title: "Best Of Paris In 7 Days Tour",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum sequi illo sed nam impedit blanditiis maiores, repudiandae alias deleniti. A eius incidunt veritatis repellendus aut? Dolor exercitationem a tempora!",
  },
];

const TourList = () => {
  const [tourList, setTourList] = useState(tour);
  // const clearList = () => {
  //   setTourList([]);
  // };
  const notInterested = (id) => {
    setTourList(tourList.filter((item) => item.id !== id));
    console.log("id", id);
  };
  return (
    <div className="flex justify-center">
      <div>
        <div className="grid grid-cols-3 gap-3">
          {tourList.map(({ id, image, price, title, text }) => (
            <TourListItem
              key={id}
              id={id}
              image={image}
              price={price}
              title={title}
              text={text}
              // clearList={clearList}
              notInterested={notInterested}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TourListItem = ({
  id,
  image,
  price,
  title,
  text,
  // clearList,
  notInterested,
}) => {
  return (
    <div>
      <div className="w-90 h-160 bg-white flex flex-col rounded-2xl ">
        <div>
          <img className="w-90 h-80 rounded-2xl" src={image} /> <p>{price}</p>
        </div>
        <div>
          <h3 className="pt-6 p-2.5 flex justify-center text-3xl font-bold">
            {title}
          </h3>
          <p className="ml-2 p-2 flex justify-center">{text}</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => notInterested(id)}
            className="bg-gray-500 rounded-sm w-50 h-12.5"
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
};
