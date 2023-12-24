import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Alert } from '@mui/material'

import s from './userVideos.module.scss'
// import { request } from '../../utils/common'
import { fetchUserPosts } from '../api'
import Spinner from '../spinner/Spinner'
import UserVideoItem from '../videos/UserVideoItem'
import { useEffect, useState } from 'react'
import { Loop } from '@mui/icons-material'

// const fetchUserPosts = async (uniqueId, cursor) => {    
//     const response = await request({
//        path: `posts?unique_id=${uniqueId}&count=10&cursor=${cursor}`
//     })
//     console.log(response)
//     return response
// }

const UserVideos = () => {
    const { uniqueId} = useParams()
    const [ items, setItems] = useState([])
    const [cursor, setCursor] = useState(0)

    const { data, isLoading, isFetching, isError} = useQuery({
        queryKey: ['userPosts', uniqueId, cursor],
        queryFn: () => fetchUserPosts({uniqueId, cursor}),
        keepPreviousData: true,
    })

    useEffect(() => {
        const currentVideos = data?.data?.videos || []

        if(!currentVideos.length) return

        setItems((_items) => ([..._items, ...currentVideos]))
    }, [data])

    if (isLoading) return <Spinner/>

    if (isError || data?.code === -1) {
        return (
            <Alert severity='error' sx={{width: '100%'}}>
                {data?.msg || "Something went wrong. Try later"}
            </Alert>
        )
    }

    const { data: {hasMore, cursor: next}} = data

    const handleLoadMore = () => setCursor(next)

  return (
    <div className={s.user_wrapper}>
        {items.length ? (
            <div className={s.user_videos}>
                {items.map((video) => (
                    <UserVideoItem key={video.video_id} {...video}/>
                ))}
                {hasMore && (
                    <button
                     onClick={handleLoadMore}
                     className={s.video_button}
                     >
                        <Loop/>
                        <span>Load More</span>
                    </button>
                )}
            </div>
        ) : (
            <Alert severity='info' sx={{width: '100%'}}>
               {uniqueId} doesn't have videos yet
            </Alert>
        )}
        
    </div>
  )
}
 
export default UserVideos