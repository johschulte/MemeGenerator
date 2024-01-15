import styles from "../styles/Form.module.scss";
import domtoimage from "dom-to-image";

const Form = ({ handleClick, handleChange, formData, imgFromDom }) => {
  const domToImg = () => {
    domtoimage
      .toJpeg(imgFromDom.current, { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

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
      <div className={styles.buttonContainer}>
        <button onClick={handleClick}>Get a new meme image 🖼</button>
        <button
          className={styles.downloadbutton}
          onClick={(e) => {
            e.preventDefault();
            domToImg();
          }}
        >
          Download
        </button>
      </div>
    </form>
  );
};

export default Form;
