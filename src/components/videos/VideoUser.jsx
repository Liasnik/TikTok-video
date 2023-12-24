import React from 'react'
import { Link } from 'react-router-dom'
import s from './videoUser.module.scss'

const VideoUser = ({unique_id: uniqueId, nickname: nickName, avatar }) => {

    return (
        <div className={s.author_video}>
            <Link to={`/user/${uniqueId}`} >
                {/* <div
                className={s.author_image}
                style={{backgroundImage: `url(${avatar})`}}
                /> */}
                <div className={s.author_image}>

                <img  src={avatar} alt={nickName} />
                </div>
                <div className={s.author_info}>
                    <h1>{nickName}</h1>
                    <span>{uniqueId}</span>
                </div>
            </Link>      
        </div>
    )
}

export default VideoUser