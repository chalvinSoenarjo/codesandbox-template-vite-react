interface Props {
  songs: string[];

  setCurrentSongIndex: (index: number) => void ;
}



export default function SongList({songs, setCurrentSongIndex}: Props) {
  const clickHandler = (idx: number) => {
    setCurrentSongIndex(idx)
  }
  return (
    <ul>
      {songs.map((song, idx) => (
       <li onClick={clickHandler(idx)}>{song}</li> 
        
      ))}
    </ul>
    
  );
}
