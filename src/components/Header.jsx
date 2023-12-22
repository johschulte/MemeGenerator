import styles from "../styles/Header.module.scss";
import trollFace from "../assets/troll-face.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={trollFace} alt="" />
        <h1>Meme Generator</h1>
      </div>
      <p>React Course - Project 3</p>
    </div>
  );
};

export default Header;
