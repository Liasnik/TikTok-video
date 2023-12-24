import UserVideos from "../components/user/UserVideos"
import UserVideosLiked from "../components/user/UserVideosLiked"

export const REGION = 'UA'

export const USER_TABS = [
    {
        slug: 'videos',
        title: 'Videos',
        content: <UserVideos/>
    },
    {
        slug: 'liked',
        title: 'Liked',
        content: <UserVideosLiked/>
    },
]