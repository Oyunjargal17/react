"use client";
export default function Home() {
  const car = { brand: "Tesla", model: "Model 3", year: 2023 };
  return <Car car={car} />; //Example 4
  //   return <DrinksWater />; //Example 3
  //   return <Double number={8} />; //Example 1
  //   return <ColorList />; //Example 2
}
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
const Car = ({ car }) => {
  const { brand, model, year } = car;

  return (
    <div>
      Brand: {brand}, Model: {model}, Year: {year}
    </div>
  );
};
