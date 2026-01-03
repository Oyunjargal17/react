"use client";

// import { lightningCssTransform } from "next/dist/build/swc/generated-native";

// const { Boldonse } = require("next/font/google");

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
// export default function Home() {
//   const fruits = ["apple", "banana", "cherry"];
//   return (
//     <ul>
//       {fruits.map((f, i) => (
//         <li key={i}>{f}</li>
//       ))}
//     </ul>
//   );
// }

//Даалгавар: JSX-д comment нэм.
// export default function Home() {
//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   );
// }

// 🟢 ДАСГАЛ 1 — Props дамжуулах
// Даалгавар: name prop дамжуул.
// export default function Home() {
//   return <Welcome name="React" />;
// }
// function Welcome({ name }) {
//   return <h1>Hello {name}</h1>;
// }

// 🟢 ДАСГАЛ 2 — Олон props
// Даалгавар: title, age дамжуулж харуул.

// export default function Home() {
//   return <User title="Oyunjargal" age={30} />;
// }
// function User({ title, age }) {
//   return (
//     <p>
//       {title}- {age}
//     </p>
//   );
// }

// 🟢 ДАСГАЛ 3 — Array prop
// Даалгавар: Жимснүүдийг list болго.

// export default function Home() {
//   const fruits = ["apple", "banana"];
//   return <FruitsList />;
// }
// function FruitsList({ fruits }) {
//   return (
//     <ul>
//       {fruits.map((f, i) => (
//         <li key={i}>{f}</li>
//       ))}
//     </ul>
//   );
// }

//🧪 ТЕСТ 1 — Props дамжуулаагүй
// export default function Home() {
//   return <User name="Bold" />;
// }

// function User({ name }) {
//   return <p>{name}</p>;
// }

//🧪 ТЕСТ 2 — Props нэр зөрсөн
// export default function Home() {
//   return <User name="Oyunjargal" />;
// }

// function User({ name }) {
//   return <p>{name}</p>;
// }

//🧪 ТЕСТ 3 — Array prop дамжуулаагүй
// export default function Home() {
//   const fruits = ["apple", "banana"];
//   return <List fruits={fruits} />;
// }

// function List({ fruits }) {
//   return fruits.map((f) => <p>{f}</p>);
// }

//🧪 ТЕСТ 4 — Object prop буруу уншсан
// export default function Home() {
//   const user = { name: "Sara", age: 20 };
//   return <Profile user={user} />;
// }

// function Profile({ user }) {
//   return <p>{user.name}</p>;
// }

//🧪 ТЕСТ 5 — children мартагдсан
//{
/* <Card>
  <h1>Hello</h1>
</Card>

function Card() {
  return <div className="card"></div>;
} */
//}

//1️⃣ Нэг текстийг харуулах (String prop)
// export default function Home() {
//   return (
//     <div>
//       <Greeting name="Bat" />
//       <Greeting name="Saraa" />
//     </div>
//   );
// }

// function Greeting(props) {
//   return (
//     <div>
//       <h1>Sain bna uu? , {props.name}</h1>
//     </div>
//   );
// }
// Тайлбар:

// name гэдэг prop-ийг parent (App) child-д (Greeting) өгч байна

// Child → props.name ашиглаж хэвлэнэ

//2️⃣ Тоог харуулах (Number prop)
// export default function Home() {
//   return (
//     <div>
//       <ShowAge age={22} />;
//     </div>
//   );
// }
// function ShowAge(props) {
//   return <p>Tanii nas: {props.age}</p>;
// }

// 3️⃣ Array дамжуулах (List)
// export default function Home() {
//   const fruits = ["alim", "banana", "liir"];
//   return <FruitList fruits={fruits} />;
// }

// function FruitList(props) {
//   return (
//     <ul>
//       {props.fruits.map((fruit, index) => (
//         <li key={index}>{fruit}</li>
//       ))}
//     </ul>
//   );
// }

//4️⃣ Object дамжуулах (Object prop)
// export default function Home() {
//   const user = { name: "Bat", age: 25 };
//   return <UserInfo user={user} />;
// }

// function UserInfo(props) {
//   return (
//     <div>
//       <p>Ner: {props.user.name}</p>
//       <p>Nas: {props.user.age}</p>
//     </div>
//   );
// }

//5️⃣ Child-д хэд хэдэн prop дамжуулах
// export default function Home() {
//   return (
//     <div>
//       <Product name="Pancake" price={6000} />
//       <Product name="Burger" price={12000} />
//     </div>
//   );
// }
// function Product(props) {
//   return (
//     <div>
//       <h3>{props.name}</h3>
//       <p>Une: {props.price}$</p>
//     </div>
//   );
// }

//1️⃣ ХАМГИЙН ХЯЛБАР ЖИШЭЭ (Wrapper)
// export default function Home() {
//   return (
//     <Box>
//       <p>Sain baina uu?</p>
//       <button>Click me</button>
//     </Box>
//   );
// }

// function Box(props) {
//   return (
//     <div style={{ border: "2px solid blue", padding: "10px" }}>
//       {props.children}
//     </div>
//   );
// }

//2️⃣ ДУНД ЖИШЭЭ: Card component
export default function Home() {
  return (
    <Card>
      <h2>Product Name</h2>
      <p>Une: 1200$</p>
      <button>Buy</button>
    </Card>
  );
}
function Card({ children }) {
  return <div className="card">{children}</div>;
}
