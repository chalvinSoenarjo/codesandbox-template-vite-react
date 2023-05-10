import { useState } from "react";
import SongViewer from "./SongViewer"
import SongList from "./SongList"
import { songs } from "./data"

import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
    
  return (
    <div className="App">
      <SongViewer currentSong=(songs[currentSongIndex]) />
      <SongList setCurrentSongIndex={setCurrentSongIndex}/>
    </div>
  );
}

export default App;
