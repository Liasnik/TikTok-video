import Player from './Player'
import s from './videoItem.module.scss'

const UserVideoItem = ({ video_id: videoId, title, play }) => {
  return (
    <div className={s.wrapper}>
        <Player url={play} videoId={videoId}/>
        <div className={s.video_title}>{title}</div>
    </div>
  )
}

export default UserVideoItem