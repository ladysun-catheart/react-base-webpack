import React from 'react'
import style from '../../assets/style/main.scss'
import ownStyles from './example.scss'

const Example = ({ title }) => (
    <div>
        <h1 className={style.mainTitle}>{title}</h1>
        <p className={ownStyles.paragraph}>Example paragraph</p>
    </div>
)

export default Example