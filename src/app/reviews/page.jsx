"use client";
import { useState } from "react";
export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <ReviewList />
    </div>
  );
}
const reviews = [
  {
    id: 1,
    image: "https://course-api.com/images/people/person-1.jpeg",
    name: "Susan Smith",
    job: "WEB DEVELOPER",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    image: "https://course-api.com/images/people/person-2.jpeg",
    name: "Anna Johnson",
    job: "WEB DESIGNER",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    image: "https://course-api.com/images/people/person-3.jpeg",
    name: "Peter Jones",
    job: "INTERN",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 4,
    image: "https://course-api.com/images/people/person-4.jpeg",
    name: "Bill Anderson",
    job: "THE BOSS",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
];

const ReviewList = () => {
  const [index, setIndex] = useState(0);
  const prevPerson = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return reviews.length - 1;
      }
      return prev - 1;
    });
  };
  const nextPerson = () => {
    setIndex((next) => {
      if (next === reviews.length - 1) {
        return 0;
      }
      return next + 1;
    });
  };
  return (
    <div className="bg-white w-200 rounded-2xl flex flex-col justify-center items-center">
      <div>
        <ReviewListItem
          key={reviews[index].id}
          id={reviews[index].id}
          image={reviews[index].image}
          name={reviews[index].name}
          job={reviews[index].job}
          text={reviews[index].text}
        />
      </div>
      <div className="flex gap-3">
        <button onClick={prevPerson} className="bg-gray-400">
          prev
        </button>
        <button onClick={nextPerson} className="bg-green-400">
          next
        </button>
      </div>
    </div>
  );
};

const ReviewListItem = ({ id, image, name, job, text }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img
          className=" w-37.5 h-37.5 rounded-[50%] p-2 "
          src={image}
          alt="profile"
        />
        <h1 className="font-semibold text-2xl">{name}</h1>
        <p className="text-indigo-300 text-lg font-medium p-1">{job}</p>
        <p className="text-center text-base p-5">{text}</p>
      </div>
    </div>
  );
};
