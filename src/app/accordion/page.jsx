"use client";
import { useState } from "react";
export default function Home() {
  return (
    <div className="bg-[#d0fafe] h-screen">
      <QuestionList />
    </div>
  );
}

const questions = [
  {
    id: 1,
    title: "Do I have to allow the use of cookies?",
    text: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    id: 2,
    title: "How do I change my My Page password?",
    text: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 3,
    title: "What is BankID?",
    text: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    id: 4,
    title: "Whose birth number can I use?",
    text: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
  },
  {
    id: 5,
    title: "When do I recieve a password ordered by letter?",
    text: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan",
  },
];

const QuestionList = () => {
  const [questionList, setQuestionList] = useState(questions);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" bg-white rounded-2xl w-200 h-fit flex flex-col gap-[30px] mt-30">
        <h1 className="font-semibold p-8 text-5xl text-center text-[#334155]">
          Questions
        </h1>
        {questionList.map(({ id, title, text }) => (
          <QuestionListItem key={id} id={id} title={title} text={text} />
        ))}
      </div>
    </div>
  );
};
const QuestionListItem = ({ id, title, text }) => {
  const [isShowText, setIsShowText] = useState(false);

  const addText = () => {
    setIsShowText(true);
  };
  const removeText = () => {
    setIsShowText(false);
  };

  return (
    <div>
      <div className="flex flex-col gap-4 bg-white rounded-2xl p-6 mx-8 my-4 shadow-xl/20">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-2xl text-[#566272] ">{title}</h1>

          {isShowText ? (
            <div className="flex">
              <button
                onClick={removeText}
                className="bg-[#164e62] rounded-full w-10 h-10 text-white text-4xl text-center"
              >
                -
              </button>
            </div>
          ) : (
            <button
              onClick={addText}
              className="bg-[#164e62] rounded-full w-10 h-10 text-white text-2xl text-center"
            >
              +
            </button>
          )}
        </div>
        {isShowText && <p className="text-[#6c7b90]">{text}</p>}
      </div>
    </div>
  );
};
