import { useState, useRef } from "react";
import Slider from "../../components/Slider/Slider";
import Controler from "../../components/Controls/Controler";
import "./styles.css";

function Player({ music, nameMusic }) {
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef();

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const play = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  return music === null ? (
    <h1 className="without-demos">
      Opa, parece que este albúm não tem demos :(
    </h1>
  ) : (
    <div className="app-container">
      <h1>Tocando agora: {nameMusic}</h1>
      <Slider percentage={percentage} onChange={onChange} />
      <audio
        ref={audioRef}
        src={music}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
      ></audio>
      <Controler
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
      />
    </div>
  );
}

export default Player;
