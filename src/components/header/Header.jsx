import { Link } from 'react-router-dom'
import s from './header.module.scss'

import Search from '../search/Search'

const Header = () => {
  return (
    <div className={s.header_wrapper}>
      <header className={s.header}>
        <Link to='/' className={s.logo}>
            <h1>Tiktok-video</h1>
        </Link>
        <Search/>
      </header>
    </div>
  )
}

export default Header