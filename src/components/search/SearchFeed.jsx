import React, { Fragment, useEffect } from 'react'
import { useSearch } from '../../hooks/useSearch'
import { useSearchParams } from 'react-router-dom'
import { Alert } from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'

import s from './searchFeed.module.scss'
import VideoItem from '../videos/VideoItem'
import Spinner from '../spinner/Spinner'

const SearchFeed = () => {
  const [searchParams] = useSearchParams()
  const {  data, isFetching, setParams, fetchNextPage, hasNextPage,} = useSearch()

  const query = searchParams.get('q')
  console.log(query)

  useEffect(() => {
    setParams((_params) => ({ ..._params, keywords: query }))
  }, [query, setParams])

  console.log(data)

  return (
    <div className={s.search_container}>
      {data.map(({ data: { videos } }, index) => {
        return !videos.length ? (
          <div className={s.error}>
            <Alert severity='error'>No {query}</Alert>
          </div>
        ) : (
          
            <Fragment key={index}>
              <InfiniteScroll scrollThreshold={'600px'} dataLength={videos.length} hasMore={hasNextPage} next={fetchNextPage}>
                <div className={s.search_feed}>
                  {videos.map(video => <VideoItem {...video} key={video.video_id}/>)}
                 
                </div>
              </InfiniteScroll>
            </Fragment>        
        )
      })}

      {isFetching && <Spinner/>}
    </div>
  )
}

export default SearchFeed