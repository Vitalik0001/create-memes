import React from "react";
import styles from "./index.module.css";

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemeImages(data.data.memes))
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Top text"
          className={styles.input}
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className={styles.input}
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage} className={styles.button}>
          Get a new meme image 🖼
        </button>
        <div className={styles.meme}>
          <img
            alt="memeImage"
            src={meme.randomImage}
            className={styles.image}
          />
          <h2 className={styles.text} style={{top: "0"}}>{meme.topText}</h2>
          <h2 className={styles.text} style={{bottom: "0"}}>{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
};

export default Meme;
