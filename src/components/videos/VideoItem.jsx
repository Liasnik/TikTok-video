import Player from './Player'
import VideoUser from './VideoUser'
import s from './videoItem.module.scss'

const VideoItem = ({ video_id: videoId, author, title, play }) => {
  return (
    <div className={s.video}>
        <VideoUser {...author}/>
        <Player url={play} videoId={videoId}/>
        <div className={s.video_title}>{title}</div>
    </div>
  )
}

export default VideoItem