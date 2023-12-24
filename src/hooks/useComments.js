import { useQuery } from "@tanstack/react-query"

import {request} from '../utils/common'

const getComments = async ({videoId, cursor}) => {
    const response = await request({
       path: `comment/list?url=https://www.tiktok.com/video/${videoId}&count=10&cursor=${cursor}`
    })
    console.log(response)
    return response
}

export const useComments = ({videoId, cursor}) => {
    const { data, isLoading } = useQuery({
        queryKey: ['comments', videoId],
        queryFn: () => getComments({videoId, cursor})
    })

    return {comments: data?.data?.comments || [], isCommentsLoading: isLoading}
}