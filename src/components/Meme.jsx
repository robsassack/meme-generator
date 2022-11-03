export default function Meme() {
  return (
    <div className='meme'>
      <form action='post' className="meme--form">
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
        />
      </form>
    </div>
  );
}
