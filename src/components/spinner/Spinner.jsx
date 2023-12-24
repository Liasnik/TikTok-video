import { CircularProgress } from '@mui/material'
import React from 'react'

import s from './spinner.module.scss'

const Spinner = () => (
    <div className={s.spinner}>
        <CircularProgress size={50}/>
    </div>
  )
export default Spinner