import style from "./page.module.css";
export default function Home() {
  //-page
  return (
    <div>
      {/* <div className={style.box}>Hello</div>; */}

      <Profile />
    </div>
  );
}
// const Hello = () => {
//   return <p>hello</p>;
// };

const Profile = () => {
  return (
    <div className={style.bod}>
      <div className={style.container}>
        <img
          className={style.img}
          src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
          alt="profile"
        />

        <div className={style.userInfo}>
          <div className={style.ner}>
            <h1 className={style.nerP}>Sophie Bennett</h1>
            <img
              className={style.nerIcon}
              src="/verificationContainer.svg"
              alt="icon"
            />
          </div>
          <p className={style.userInfo__desc}>
            Product Designer who focuses on simplicity & usability.
          </p>
        </div>
        <div className={style.too}>
          <div className={style.userStat}>
            <img src="/followersContainer.svg" alt="followers" />
            <p>312</p>
          </div>
          <div className={style.userStat}>
            <img src="/projectsContainer.svg" alt="projectsContainer" />
            <p>48</p>
          </div>
          <button>Follow +</button>
        </div>
      </div>
    </div>
  );
};
