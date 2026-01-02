// import style from "./page.module.css";
// export default function Home() {
//   const value= 'hello world'
//   return (
//     <div className="h-screen  flex justify-center items-center">
//       {/* <div className={style.box}>Hello</div>; */}

// import { Component } from "react";

//       {/* <Profile
//         img="https://newprofilepic.photo-cdn.net/assets/images/article/profile.jpg?90af0c8"
//         name="Oyunjargal"
//         text="Product Designer who focuses on simplicity & usability."
//         follow={312}
//         dagagch={48}
//       />
//       <Profile
//         img="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
//         name="Bold Dorj"
//         text="Product Designer who focuses on simplicity & usability."
//         follow={513}
//         dagagch={84}
//       />
//       <Profile
//         img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         name="Dalaijargal"
//         text="Product Designer who focuses on simplicity & usability."
//         follow={599}
//         dagagch={100}
//       /> */}
//     </div>
//   );
// }
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

// const Profile = (props) => {
//   return (
//     <div className="bg-gray-100 shadow-md py-5 px-4 w-fit h-fit rounded-md">
//       <div>
//         <img
//           src={props.img}
//           alt="profile"
//           className="w-[280] h-[479] rounded-lg "
//         />
//       </div>
//       <div>
//         <div className="flex gap-6">
//           <p className="text-xl">{props.name}</p>
//           <img src="/verificationContainer.svg" alt="icon" />
//         </div>
//         <p className="text-base text-gray-500 w-[300]">{props.text}</p>
//       </div>

//       <div className="flex gap-6">
//         <div className="flex gap-1 items-center">
//           <img src="/followersContainer.svg" alt="followers" />
//           <p className={style.dagagch}>{props.follow}</p>
//         </div>
//         <div className="flex gap-1 items-center">
//           <img src="/projectsContainer.svg" alt="projectsContainer" />
//           <p className={style.dagagch}>{props.dagagch}</p>
//         </div>
//         <div>
//           <button className="bg-[rgba(239,239,239,1)] text-lg p-2 rounded-2xl ">
//             Follow +
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// ======================================
// export default function Home() {
//   const value = "Hello world";
//   return <Component1 props1={value} />;
// }
// const Component1 = (props) => {
//   return <Component2 props2={props.props1} />;
// };
// const Component2 = (props) => {
//   // console.log(props);
//   // return <div>{props.props2}</div>;
//   return <Component3 props3={props.props2} />;
// };
// const Component3 = (props) => {
//   // return <div>{props.props3}</div>;
//   return <Component4 props4={props.props3} />;
// };
// const Component4 = (props) => {
//   // return <div>{props.props4}</div>;
//   return <Component5 props5={props.props4} />;
// };
// const Component5 = (props) => {
//   return <Component6 props6={props.props5} />;
// };
// const Component6 = (props) => {
//   return <Component7 props7={props.props6} />;
// };
// const Component7 = (props) => {
//   return <Component8 props8={props.props7} />;
// };
// const Component8 = (props) => {
//   return <Component9 props9={props.props8} />;
// };
// const Component9 = (props) => {
//   return <Component10 props10={props.props9} />;
// };
// const Component10 = (props) => {
//   // return <div>{props.props10}</div>;
//   return <Component11 props11={props.props10} />;
// };
// const Component11 = (props) => {
//   return <Component12 props12={props.props11} />;
// };
// const Component12 = (props) => {
//   return <Component13 props13={props.props12} />;
// };
// const Component13 = (props) => {
//   return <Component14 props14={props.props13} />;
// };
// const Component14 = (props) => {
//   return <Component15 props15={props.props14} />;
// };
// const Component15 = (props) => {
//   return <Component16 props16={props.props15} />;
// };
// const Component16 = (props) => {
//   return <Component17 props17={props.props16} />;
// };
// const Component17 = (props) => {
//   return <Component18 props18={props.props17} />;
// };
// const Component18 = (props) => {
//   return <Component19 props19={props.props18} />;
// };
// const Component19 = (props) => {
//   return <Component20 props20={props.props19} />;
// };
// const Component20 = (props) => {
//   // return <div>{props.props20}</div>;
//   return <Component21 props21={props.props20} />;
// };
// const Component21 = (props) => {
//   return <Component22 props22={props.props21} />;
// };
// const Component22 = (props) => {
//   return <Component23 props23={props.props22} />;
// };
// const Component23 = (props) => {
//   return <Component24 props24={props.props23} />;
// };
// const Component24 = (props) => {
//   return <Component25 props25={props.props24} />;
// };

// const Component25 = (props) => {
//   return <Component26 props26={props.props25} />;
// };
// const Component26 = (props) => {
//   return <Component27 props27={props.props26} />;
// };
// const Component27 = (props) => {
//   return <Component28 props28={props.props27} />;
// };
// const Component28 = (props) => {
//   return <Component29 props29={props.props28} />;
// };
// const Component29 = (props) => {
//   return <Component30 props30={props.props29} />;
// };
// const Component30 = (props) => {
//   return <Component31 props31={props.props30} />;
// };
// const Component31 = (props) => {
//   return <Component32 props32={props.props31} />;
// };
// const Component32 = (props) => {
//   return <Component33 props33={props.props32} />;
// };
// const Component33 = (props) => {
//   return <Component34 props34={props.props33} />;
// };
// const Component34 = (props) => {
//   return <Component35 props35={props.props34} />;
// };
// const Component35 = (props) => {
//   return <Component36 props36={props.props35} />;
// };
// const Component36 = (props) => {
//   return <Component37 props37={props.props36} />;
// };
// const Component37 = (props) => {
//   return <Component38 props38={props.props37} />;
// };
// const Component38 = (props) => {
//   return <Component39 props39={props.props38} />;
// };
// const Component39 = (props) => {
//   return <Component40 props40={props.props39} />;
// };
// const Component40 = (props) => {
//   return <Component41 props41={props.props40} />;
// };
// const Component41 = (props) => {
//   return <Component42 props42={props.props41} />;
// };
// const Component42 = (props) => {
//   return <Component43 props43={props.props42} />;
// };
// const Component43 = (props) => {
//   return <Component44 props44={props.props43} />;
// };
// const Component44 = (props) => {
//   return <Component45 props45={props.props44} />;
// };
// const Component45 = (props) => {
//   return <Component46 props46={props.props45} />;
// };
// const Component46 = (props) => {
//   return <Component47 props47={props.props46} />;
// };
// const Component47 = (props) => {
//   return <Component48 props48={props.props47} />;
// };
// const Component48 = (props) => {
//   return <Component49 props49={props.props48} />;
// };
// const Component49 = (props) => {
//   return <Component50 props50={props.props49} />;
// };
// const Component50 = (props) => {
//   // return <div>{props.props50}</div>;
//   return <Component51 props51={props.props50} />;
// };
// const Component51 = (props) => {
//   return <Component52 props52={props.props51} />;
// };
// const Component52 = (props) => {
//   return <Component53 props53={props.props52} />;
// };
// const Component53 = (props) => {
//   return <Component54 props54={props.props53} />;
// };
// const Component54 = (props) => {
//   return <Component55 props55={props.props54} />;
// };
// const Component55 = (props) => {
//   return <Component56 props56={props.props55} />;
// };
// const Component56 = (props) => {
//   return <Component57 props57={props.props56} />;
// };
// const Component57 = (props) => {
//   return <Component58 props58={props.props57} />;
// };
// const Component58 = (props) => {
//   return <Component59 props59={props.props58} />;
// };
// const Component59 = (props) => {
//   return <Component60 props60={props.props59} />;
// };
// const Component60 = (props) => {
//   return <Component61 props61={props.props60} />;
// };
// const Component61 = (props) => {
//   return <Component62 props62={props.props61} />;
// };
// const Component62 = (props) => {
//   return <Component63 props63={props.props62} />;
// };
// const Component63 = (props) => {
//   return <Component64 props64={props.props63} />;
// };
// const Component64 = (props) => {
//   return <Component65 props65={props.props64} />;
// };
// const Component65 = (props) => {
//   return <Component66 props66={props.props65} />;
// };
// const Component66 = (props) => {
//   return <Component67 props67={props.props66} />;
// };
// const Component67 = (props) => {
//   return <Component68 props68={props.props67} />;
// };
// const Component68 = (props) => {
//   return <Component69 props69={props.props68} />;
// };
// const Component69 = (props) => {
//   return <Component70 props70={props.props69} />;
// };
// const Component70 = (props) => {
//   return <Component71 props71={props.props70} />;
// };
// const Component71 = (props) => {
//   return <Component72 props72={props.props71} />;
// };
// const Component72 = (props) => {
//   return <Component73 props73={props.props72} />;
// };
// const Component73 = (props) => {
//   return <Component74 props74={props.props73} />;
// };
// const Component74 = (props) => {
//   return <Component75 props75={props.props74} />;
// };
// const Component75 = (props) => {
//   return <Component76 props76={props.props75} />;
// };
// const Component76 = (props) => {
//   return <Component77 props77={props.props76} />;
// };
// const Component77 = (props) => {
//   return <Component78 props78={props.props77} />;
// };
// const Component78 = (props) => {
//   return <Component79 props79={props.props78} />;
// };
// const Component79 = (props) => {
//   return <Component80 props80={props.props79} />;
// };
// const Component80 = (props) => {
//   return <Component81 props81={props.props80} />;
// };
// const Component81 = (props) => {
//   return <Component82 props82={props.props81} />;
// };
// const Component82 = (props) => {
//   return <Component83 props83={props.props82} />;
// };
// const Component83 = (props) => {
//   return <Component84 props84={props.props83} />;
// };
// const Component84 = (props) => {
//   return <Component85 props85={props.props84} />;
// };
// const Component85 = (props) => {
//   return <Component86 props86={props.props85} />;
// };
// const Component86 = (props) => {
//   return <Component87 props87={props.props86} />;
// };
// const Component87 = (props) => {
//   return <Component88 props88={props.props87} />;
// };
// const Component88 = (props) => {
//   return <Component89 props89={props.props88} />;
// };
// const Component89 = (props) => {
//   return <Component90 props90={props.props89} />;
// };
// const Component90 = (props) => {
//   return <Component91 props91={props.props90} />;
// };
// const Component91 = (props) => {
//   return <Component92 props92={props.props91} />;
// };
// const Component92 = (props) => {
//   return <Component93 props93={props.props92} />;
// };
// const Component93 = (props) => {
//   return <Component94 props94={props.props93} />;
// };
// const Component94 = (props) => {
//   return <Component95 props95={props.props94} />;
// };
// const Component95 = (props) => {
//   return <Component96 props96={props.props95} />;
// };
// const Component96 = (props) => {
//   return <Component97 props97={props.props96} />;
// };
// const Component97 = (props) => {
//   return <Component98 props98={props.props97} />;
// };
// const Component98 = (props) => {
//   return <Component99 props99={props.props98} />;
// };
// const Component99 = (props) => {
//   return <Component100 props100={props.props99} />;
// };
// const Component100 = (props) => {
//   return <div>{props.props100}</div>;
// };
// ========================================
