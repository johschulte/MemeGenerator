import "./App.scss";
import Header from "./components/Header";
import Form from "./components/Form";
import Meme from "./components/Meme";
import memesData from "./memesData";

import { useState, useEffect, useRef } from "react";

function App() {
  const [allMemes, setAllMemes] = useState(memesData);

  const [formData, setFormData] = useState({
    top: "",
    bottom: "",
    url: "",
  });

  const imgFromDom = useRef(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    let rndNumber = Math.floor(Math.random() * allMemes.length);
    setFormData((prev) => ({ ...prev, url: allMemes[rndNumber].url }));
  };

  const resetPage = () => {
    setFormData({
      top: "",
      bottom: "",
      url: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Header resetPage={resetPage} />
      <Form
        handleClick={handleClick}
        handleChange={handleChange}
        formData={formData}
        imgFromDom={imgFromDom}
      />
      <Meme formData={formData} ref={imgFromDom} />
    </>
  );
}

export default App;
