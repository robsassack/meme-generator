import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    memeUrl: "",
    memeAlt: "",
    topText: "",
    bottomText: "",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMeme() {
    let memeArr = allMemeImages.data.memes;
    let randomMeme = memeArr[Math.floor(Math.random() * memeArr.length)];
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        memeUrl: randomMeme.url,
        memeAlt: randomMeme.name,
      };
    });
  }


  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    })
  }

  // get random image on initial component load
  React.useEffect(() => {
    getMeme();
  }, []);

  return (
    <div className='meme'>
      <div className='meme--form'>
        <input
          type='text'
          name='topText'
          className='meme--input'
          placeholder='Nice meme'
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type='text'
          name='bottomText'
          className='meme--input'
          placeholder='Bottom text'
          onChange={handleChange}
          value={meme.bottomText}
        />
        <input
          type='button'
          value='Get a new meme image 🖼'
          className='meme--submit'
          onClick={getMeme}
        />
      </div>
      <div className="meme--container">
        <img src={meme.memeUrl} alt={meme.memeAlt} className='meme--image' />
        <h2 className='meme--text top'>{meme.topText.toUpperCase()}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText.toUpperCase()}</h2>
      </div>
    </div>
  );
}
