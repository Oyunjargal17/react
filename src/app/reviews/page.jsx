"use client";
import { useState } from "react";
export default function Home() {
  return (
    <div>
      <Reviews />
    </div>
  );
}
const review = [
  {
    id: 1,
    image: "",
    name: "Susan Smith",
    job: "WEB DEVELOPER",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState(review);
  return (
    <div className="bg-yellow-200 w-90 justify-self-center items-self-center ">
      <div></div>
      <button className="bg-gray-400">left</button>
      <button className="bg-green-400">right</button>
    </div>
  );
};
