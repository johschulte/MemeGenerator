import styles from "../styles/Meme.module.scss";

const Meme = ({ formData }) => {
  return (
    <div className={styles.meme}>
      <img
        style={{ width: "90%", margin: "0 2rem" }}
        src={formData.url}
        alt=""
      />
      <h2 className={`${styles.memetext} ${styles.top}`}>{formData.top}</h2>
      <h2 className={`${styles.memetext} ${styles.bottom}`}>
        {formData.bottom}
      </h2>
    </div>
  );
};

export default Meme;
