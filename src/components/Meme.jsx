import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    memeUrl: "https://i.imgflip.com/1bij.jpg",
    memeAlt: "One Does Not Simply",
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
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [event.target.name]: event.target.value,
      };
    })
  }

  return (
    <div className='meme'>
      <div className='meme--form'>
        <input
          type='text'
          name='topText'
          className='meme--input'
          placeholder='Nice meme'
          onChange={handleChange}
        />
        <input
          type='text'
          name='bottomText'
          className='meme--input'
          placeholder='Bottom text'
          onChange={handleChange}
        />
        <input
          type='button'
          value='Get a new meme image 🖼'
          className='meme--submit'
          onClick={getMeme}
        />
      </div>
      <img src={meme.memeUrl} alt={meme.memeAlt} className='meme--image' />
    </div>
  );
}
