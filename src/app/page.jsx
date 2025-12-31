import style from "./page.module.css";
export default function Home() {
  return (
    <div className="h-screen  flex justify-center items-center">
      {/* <div className={style.box}>Hello</div>; */}

      <Profile />
    </div>
  );
}
// const Hello = () => {
//   return <p>hello</p>;
// };

// const Profile = () => {
//   return (
//     <div className={style.bod}>
//       <div className={style.container}>
//         <img
//           className={style.img}
//           src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
//           alt="profile"
//         />

//         <div className={style.userInfo}>
//           <div className={style.ner}>
//             <h1 className={style.nerP}>Sophie Bennett</h1>
//             <img
//               className={style.nerIcon}
//               src="/verificationContainer.svg"
//               alt="icon"
//             />
//           </div>
//           <p className={style.userInfo__desc}>
//             Product Designer who focuses on simplicity & usability.
//           </p>
//         </div>
//         <div className={style.too}>
//           <div className={style.userStat}>
//             <img src="/followersContainer.svg" alt="followers" />
//             <p className={style.dagagch}>312</p>
//           </div>
//           <div className={style.userStat}>
//             <img src="/projectsContainer.svg" alt="projectsContainer" />
//             <p className={style.dagagch}>48</p>
//           </div>
//           <div className={style.btn}>
//             <button className={style.btnSelf}>Follow +</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Profile = () => {
  return (
    <div className="bg-gray-100 shadow-md py-5 px-4 w-fit h-fit rounded-md">
      <div>
        <img
          src="https://newprofilepic.photo-cdn.net/assets/images/article/profile.jpg?90af0c8"
          alt="profile"
          className="w-[280] h-[479] rounded-lg "
        />
      </div>
      <div>
        <div className="flex gap-6">
          <p className="text-xl">Sophie Bennett</p>
          <img src="/verificationContainer.svg" alt="icon" />
        </div>
        <p className="text-base text-gray-500 w-[300]">
          Product Designer who focuses on simplicity & usability.
        </p>
      </div>

      <div className="flex gap-6">
        <div className="flex gap-1 items-center">
          <img src="/followersContainer.svg" alt="followers" />
          <p className={style.dagagch}>312</p>
        </div>
        <div className="flex gap-1 items-center">
          <img src="/projectsContainer.svg" alt="projectsContainer" />
          <p className={style.dagagch}>48</p>
        </div>
        <div>
          <button className="bg-[rgba(239,239,239,1)] text-lg p-2 rounded-2xl ">
            Follow +
          </button>
        </div>
      </div>
    </div>
  );
};
