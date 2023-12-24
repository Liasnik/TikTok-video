import { useInfiniteQuery} from "@tanstack/react-query"

import {request} from '../utils/common'
import { REGION } from "../utils/constant"
import { useState } from "react"

const getSearchByKeyword = async ({keywords, cursor}) => {
    const response = await request({
       path: `feed/search?keywords=${keywords}&count=10&cursor=${cursor}&region=${REGION}`
    })
    console.log(response)
    return response
}

export const useSearch = () => {
    const [params, setParams] = useState({
        keywords: '',
        cursor: 0,
    })

    const { data,  fetchNextPage, hasNextPage, isLoading, isFetching } = useInfiniteQuery({
        queryKey: ['searchFeed', params.keywords],
        queryFn: ({pageParam = params}) => getSearchByKeyword(pageParam),
        getNextPageParam: ({data}) => {
            return data?.hasMore ? { ...params, cursor: data?.cursor} : undefined
        },
        enabled: !!params.keywords
    })

    return {
        isFetching,
        data: data?.pages || [],
        isLoading,
        setParams,
        fetchNextPage,
        hasNextPage,
        }
}