import { useState , useEffect } from 'react'
import FeaturedMusic from './components/FeaturedMusic'
import MusicCategories from './components/musicCategories'
import MyLibrary from './components/MyLibrary'
import PlayMusic from './components/playMusic'



function App() {

  const [music, setMusic] = useState(null)


  const getMusic = async () => {
  const url = 'https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '403dec8659msh8c2be53cf81e567p187a54jsnd8f5d07148de',
      'x-rapidapi-host': 'spotify23.p.rapidapi.com'
    }
  };

  try  {
    const response = await fetch(url, options);
    const data = await response.json();
    setMusic(data)
    console.log(setMusic(data));
  } catch (error) {
    console.error(error);
  }}


  useEffect (() =>{
    getMusic()
  }, {})


  return (
    <>
      <PlayMusic />
    </>
  )
}

export default App
