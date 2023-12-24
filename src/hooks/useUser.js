import { useQuery } from "@tanstack/react-query"

import {request} from '../utils/common'


const getUser = async (uniqueId) => {
    const response = await request({
       path: `user/info?unique_id=${uniqueId}`
    })
    console.log(response)
    return response
}

export const useUser = (uniqueId) => {
    const { data, isLoading} = useQuery({
        queryKey: ['feed', uniqueId],
        queryFn: () => getUser(uniqueId)
    })

    return {data: data?.data || {}, isLoading, code: data?.code, error: data?.msg}
}