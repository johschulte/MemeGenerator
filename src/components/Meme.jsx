import styles from "../styles/Meme.module.scss";
import { forwardRef } from "react";

const Meme = forwardRef(({ formData }, ref) => {
  return (
    <div className={styles.meme} ref={ref}>
      <img className={styles.memeimage} src={formData.url} alt="" />
      <h2 className={`${styles.memetext} ${styles.top}`}>{formData.top}</h2>
      <h2 className={`${styles.memetext} ${styles.bottom}`}>
        {formData.bottom}
      </h2>
    </div>
  );
});

export default Meme;
