import { MusicNote } from '@mui/icons-material'


import s from './feed.module.scss'

import { useFeed } from '../../hooks/useFeed'
import VideoUser from '../videos/VideoUser'
import VideoDetails from '../videos/VideoDetails'
import Spinner from '../spinner/Spinner'
import Player from '../videos/Player'

const Feed = () => {
  const { data, isLoading }= useFeed()
  console.log(data)

  //  if(isLoading) return <p>Loading...</p>

  return (
    isLoading ? <Spinner/> :
    <div className={s.feed}>
      {data.map(
        ({
          video_id: videoId, 
          title, 
          play, 
          music_info: {title: songTitle},      
          author,
          ...rest
        }) => {                       
          return (
          <div className={s.video} key={videoId}>        
            <VideoUser {...author}/>
            <div className={s.video_wrapper}>
              <Player url={play} videoId={videoId}/>
              <VideoDetails {...rest}/>
            </div>

            <div className={s.video_music}>
              <span>Origin:</span>
              <MusicNote/>
              <p className={s.video_music_title}>{songTitle}</p>
            </div>

            <div className={s.video_title}>{title}</div>
            <hr />
          </div>
          )
        }
      )}
    </div>
  )
}

export default Feed