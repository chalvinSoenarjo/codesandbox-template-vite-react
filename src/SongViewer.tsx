interface Props {
  
  currentSong: string;
}

export default function SongViewer(currentSong: Props) {
  return  <div>Current Song: {currentSong}</div> ;
}
