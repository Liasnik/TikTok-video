import { useNavigate, useParams } from 'react-router-dom'

import { useSingleVideoInfo } from '../../hooks/useSinglVideoInfo'
import s from './singleVideo.module.scss'
import Spinner from '../spinner/Spinner'
import { Close, MusicNote} from '@mui/icons-material'
import VideoUser from './VideoUser'
import Player from './Player'
import { useComments } from '../../hooks/useComments'

const SingleVideo = () => {
  const navigate = useNavigate()
  const { videoId } = useParams()
  const { data, isLoading } = useSingleVideoInfo(videoId)
  const {comments, isCommentsLoading} = useComments({videoId, cursor: 0})

 

  console.log(data)

  if (isLoading) return <Spinner/>

  const { title, author, origin_cover: cover, hdplay, music_info: { title: songTitle} } = data

  const handleNavigate = () => {
    navigate(-1)
    // navigate(`/user/${author.unique_id}`)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.close}>
        <Close onClick={handleNavigate}/>
      </div>
      <div className={s.title}>{title}</div>

      <div className={s.video} style={{ backgroundImage: ` url(${cover}) `}}>
        <Player url={hdplay} videoId={videoId} width='auto' height='100vh - 64px'/>
      </div>

      <div className={s.info}>
        <div className={s.description}>
          <VideoUser {...author}/>
          <div className={s.music_info}>
            <MusicNote/>
            <span>{songTitle}</span>
          </div>
        </div>
        {isCommentsLoading ? <Spinner/> : (
          comments?.length ? (
            <ul>
              {comments.map(({id, text, user}) => (
                <li key={id}>
                  {text}
                  <VideoUser {...user}/>
                </li>
              ))}
            </ul>
          ) :( <p>No comments yet</p>)
          )
        }
      </div>
    </div>
  )
}

export default SingleVideo