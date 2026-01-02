"use client";
// export default function Home() {
// const car = { brand: "Tesla", model: "Model 3", year: 2023 };
// return <Car car={car} />; //Example 4
//   return <DrinksWater />; //Example 3
//   return <Double number={8} />; //Example 1
//   return <ColorList />; //Example 2
// }
// const ColorList = () => {  //Example 2
//   const colors = ["red", "blue", "green"];
//   return (
//     <ul>
//       {colors.map((color, index) => {
//         return <li key={index}>{color}</li>;
//       })}
//     </ul>
//   );
// };

// const Double = ({ number }) => <span>{number * 2}</span>; //Example 1

//Example 3
// const DrinksWater = () => {
//   const drinks = ["Coffee", "Tea", "Water"];
//   return (
//     <ol>
//       {drinks.map((drink, index) => {
//         return <li key={index}>{drink}</li>;
//       })}
//     </ol>
//   );
// };

//Example 4
// const Car = ({ car }) => {
//   const { brand, model, year } = car;

//   return (
//     <div>
//       Brand: {brand}, Model: {model}, Year: {year}
//     </div>
//   );
// };

//**Task:** You have a list `const fruit = ['apple', 'banana']`. Create a new array `allFruits` that uses the spread operator to add `'cherry'` to the end of the existing `fruit` list.
// export default function Home() {
//   const fruit = ["apple", "banana"];
//   return <AllFruits fruit={fruit} />;
// }

// const AllFruits = ({ fruit }) => {
//   return [...fruit, "cherry"];
// };

// export default function Home() {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <p>World</p>
//     </div>
//   );
// }

// export default function Home() {
//   const name = "React";
//   return (
//     <div>
//       <h1>Hello {name}</h1>
//     </div>
//   );
// }

// export default function Home() {
//   const age = "23";
//   return (
//     <div>
//       <p>{age >= 18 ? "Adult" : "Child"}</p>
//     </div>
//   );
// }

//Даалгавар: isLogin true үед текст харуул.
// export default function Home() {
//   const isLogin = "true";
//   return <div>{isLogin && <p>Welcome</p>}</div>;
// }

//Даалгавар: Улаан өнгөтэй гарчиг гарга.
// export default function Home() {
//   return (
//     <div>
//       <h1 style={{ color: "red" }}>Garchig</h1>
//     </div>
//   );
// }

//Даалгавар: Жимснүүдийг list болго.
export default function Home() {
  const fruits = ["apple", "banana", "cherry"];
  return (
    <ul>
      {fruits.map((f, i) => (
        <li key={i}>{f}</li>
      ))}
    </ul>
  );
}

//Даалгавар: JSX-д comment нэм.
// export default function Home() {
//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   );
// }
