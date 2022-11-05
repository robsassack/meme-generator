import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeUrl, setMemeUrl] = React.useState('');
  const [memeAlt, setMemeAlt] = React.useState('');

  function getMeme() {
    let memeArr = memesData.data.memes;
    let randomMeme = memeArr[Math.floor(Math.random() * memeArr.length)];
    setMemeUrl(randomMeme.url);
    setMemeAlt(`${randomMeme.name} meme`);
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
      <img src={memeUrl} alt={memeAlt} className='meme--image' />
    </div>
  );
}
