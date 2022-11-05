import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [currentMeme, setCurrentMeme] = React.useState({memeUrl: '', memeAlt: ''});

  function getMeme() {
    let memeArr = memesData.data.memes;
    let randomMeme = memeArr[Math.floor(Math.random() * memeArr.length)];
    setCurrentMeme({memeUrl: randomMeme.url, memeAlt: randomMeme.name});
  }

  return (
    <div className='meme'>
      <div className='meme--form'>
        <input
          type='text'
          name='topText'
          className='meme--input'
          placeholder='Nice meme'
        />
        <input
          type='text'
          name='bottomText'
          className='meme--input'
          placeholder='Bottom text'
        />
        <input
          type='button'
          value='Get a new meme image 🖼'
          className='meme--submit'
          onClick={getMeme}
        />
      </div>
      <img src={currentMeme.memeUrl} alt={currentMeme.memeAlt} className='meme--image' />
    </div>
  );
}
