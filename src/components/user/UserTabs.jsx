import { useState } from 'react'
import { USER_TABS } from '../../utils/constant'
import s from './userTabs.module.scss'
import { Lock } from '@mui/icons-material'
import { Alert } from '@mui/material'

const UserTabs = ({openFavorite}) => {
    const [activeTab, setActiveTab] = useState(USER_TABS[0])

  return (
    <div className={s.user_tabs}>
        <ul className={s.tabs_item}>        
            {USER_TABS.map(tab => {
                const { slug, title } = tab
                
                return (
                    <li
                    className={tab === activeTab ? s.active : s.not_active}
                     key={slug}
                     onClick={() => setActiveTab(tab)}
                    >
                        {!openFavorite && slug === 'liked' && <Lock/>}
                        <span>{title}</span>
                    </li>
                )
            })}          
        </ul>
        <div className={s.content}>
            {!openFavorite && activeTab.slug === 'liked' ? (
                <Alert severity='info'>This user's liked videos are private</Alert>
            ) : (
              activeTab.content
            )
            }
            </div>
    </div>
  )
}

export default UserTabs