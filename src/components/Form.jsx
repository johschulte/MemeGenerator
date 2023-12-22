import styles from "../styles/Form.Module.scss";

const Form = ({ handleClick, handleChange, formData }) => {
  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <div className={styles.input1}>
          <label htmlFor="top">Top text</label>
          <input
            type="text"
            id="top"
            name="top"
            value={formData.top}
            placeholder="Shut up"
            onChange={handleChange}
          />
        </div>
        <div className={styles.input2}>
          <label htmlFor="bottom">Bottom text</label>
          <input
            type="text"
            id="bottom"
            name="bottom"
            value={formData.bottom}
            placeholder="And take my money"
            onChange={handleChange}
          />
        </div>
      </div>
      <button onClick={handleClick}>Get a new meme image 🖼</button>
    </form>
  );
};

export default Form;
