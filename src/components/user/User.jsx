import { useParams } from 'react-router-dom'
import { Fragment } from 'react'
import { Alert } from '@mui/material'
import { Instagram as InstagramIcon } from '@mui/icons-material'
import { YouTube as YouTubeIcon} from '@mui/icons-material'
import { Twitter as TwitterIcon} from '@mui/icons-material'
import { Lock as LockIcon} from '@mui/icons-material'

import s from './user.module.scss'
import { useUser } from '../../hooks/useUser'

import Spinner from '../spinner/Spinner'
import { compactBigNumber, replaceWithBr } from '../../utils/common'
import UserTabs from './UserTabs'

const User = () => {
  const { uniqueId } = useParams()
  
  const { data, isLoading, code, error } = useUser(uniqueId)
  console.log(data)

  if (code === -1) {
    return (
      <Alert severity='error'>
        {error || 'User doesn`t exist'}
      </Alert>
    )
  }

  if (isLoading) return <Spinner/>

  const { 
      stats: {
        diggCount,
        followerCount,
        followingCount,
        heartCount,
        videoCount,
      },
     user: {
      avatarMedium, 
      nickname, 
      youtube_channel_id: youtubeId, 
      twitter_id: twitterId, 
      ins_id: instaId,
      signature,
      privateAccount,
      openFavorite,

    }
    } = data

    const statsData = [
      {
        text: "Followers",
        count: followerCount,
      },
      {
        text: "Likes",
        count: heartCount,
      },
      {
        text: "Videos",
        count: videoCount,
      },
      {
        text: "Following",
        count: followingCount,
      },
      {
        text: "Digg Count",
        count: diggCount,
      },
    ]

    const socialsData = [
      {
        link: `https://youtube.com`,
        icon: <YouTubeIcon/>,
        id: youtubeId,
      },
      {
        link: `https://twitter.com`,
        icon: <TwitterIcon/>,
        id: twitterId,
      },
      {
        link: `https://instagram.com`,
        icon: <InstagramIcon/>,
        id: instaId,
      },
    ]

    const hasSocials = socialsData.some(({id}) => id)

  return (
    <div className={s.user_wrapper}>
      {/* <div className={s.avatar_wrapper}>
        <img className={s.avatar} src={avatarMedium} alt='avatar'></img>
      </div> */}
      <div className={s.avatar_wrapper}>
        <div className={s.avatar} style={{  backgroundImage: `url(${avatarMedium})`}}/>
      </div>
      <div className={s.info}>       
        <div className={s.unique_id}>
          {uniqueId}
        </div>
        <div className={s.nickname}>
          {nickname}
        </div>
        <ul className={s.stats}>
          {statsData.map(({text, count}) => (
            <li key={text}>
              {text}: {compactBigNumber(count)}
              </li>
          ) )}
        </ul>
        {!signature ? (
          <p>No signature</p>
        ) : (
          <div 
          className={s.signature}
          // dangerouslySetInnerHTML={{ __html: replaceWithBr(signature) }}
         >
          {signature}
         </div> 
        )
      }

        {hasSocials && (
          <ul className={s.user_socials}>
            {socialsData.map(({link, icon, id}) => {
              const href = `${link}/${id}`

              return (
               id ?
              <li className={s.socials_item} key={href}>
                <a href={href} >{icon}</a>
              </li> : <Fragment key={href} />
              )
            })}
          </ul>
        )}      
      </div>
      {!privateAccount ? 
        <UserTabs openFavorite={openFavorite}/> : 
        <p className={s.private_account}> 
              <span>This account is private</span>
              <LockIcon/>
        </p>
      }
    </div>
  )
}

export default User