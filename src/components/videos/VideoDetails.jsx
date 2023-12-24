import React from 'react'
import { PlayArrow, ChatBubble, Share, Favorite, DateRange } from '@mui/icons-material'

import s from './videoDetails.module.scss'
import { compactBigNumber } from '../../utils/common'


const VideoDetails = ({
    play_count: playCount,
    share_count: shareCount,
    comment_count: commentCount,
    digg_count: diggCount,
    create_time: createTime,
    }) => {

    const details = [
        {
          icon: <PlayArrow/>,
          count: playCount,
        },
        {
          icon: <ChatBubble/>,
          count: shareCount,
        },
        {
          icon: <Share/>,
          count: commentCount,
        },
        {
          icon: <Favorite/>,
          count: diggCount,
        },
        {
          icon: <DateRange/>,
          count: createTime,
        },
      ]

  return (
    <div>
          <ul className={s.video_details}>
                {details.map(({icon, count}, i) => (
                  <li key={i}>
                  { icon}
                    <p>{compactBigNumber(count)}</p>
                  </li>
                ))}
              </ul>
    </div>
  )
}

export default VideoDetails