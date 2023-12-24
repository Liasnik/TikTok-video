import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { Pause, PlayCircle } from "@mui/icons-material";

import s from "./player.module.scss";
// import Spinner from "../spinner/Spinner";

const Player = ({ videoId, url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const videoRef = useRef(null);

  const stylePlayer = !isPlaying ? s.player_wrapper : s.playing;

  const handleClick = () => {
    setIsPlaying((_prev) => !_prev);
    // videoRef?.current?.parentElement.classList.toggle('playing', isPlaying)
  };

  const handleProgress = ({ played, loaded }) => {
    if (!loaded) return;
    setProgress(played * 100);
  };

  return (
    <div className={stylePlayer} ref={videoRef}>
      {/* {isReady && (
                <div className={s.loading}>
                    <Spinner/>
                </div>
            )} */}
      <Link to={`/video/${videoId}`}>
        <div onClick={handleClick}>
          <ReactPlayer
            className={s.react_player}
            playing={isPlaying}
            loop={true}
            url={url}
            width="100%"
            height="100%"
            onProgress={handleProgress}
            onReady={() => setIsReady(true)}
          />
        </div>
      </Link>
      <div className={s.player_control} onClick={handleClick}>
        {isPlaying ? <Pause /> : <PlayCircle />}
      </div>
      <div>
        <span style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Player;
