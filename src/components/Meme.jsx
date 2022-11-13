import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    memeUrl: "",
    memeAlt: "",
    topText: "",
    bottomText: "",
  });
  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    // pull data from API
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemeImages(data.data.memes);
    }
    getMemes();
  }, []);

  React.useEffect(() => {
    if (allMemeImages.length > 0) {
      getRandomMeme();
    }
  }, [allMemeImages]);

  function getRandomMeme() {
    const randomNum = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNum].url;
    const alt = allMemeImages[randomNum].name;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        memeUrl: url,
        memeAlt: alt,
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
    });
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
          onClick={getRandomMeme}
        />
      </div>
      <div className='meme--container'>
        <img src={meme.memeUrl} alt={meme.memeAlt} className='meme--image' />
        <h2 className='meme--text top'>{meme.topText.toUpperCase()}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText.toUpperCase()}</h2>
      </div>
    </div>
  );
}
