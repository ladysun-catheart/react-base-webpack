import React from 'react'
import PropTypes from 'prop-types'
import style from '../../assets/style/main.scss'
import ownStyles from './example.scss'
import KittensImg from '../../assets/imgs/kittens.jpg'

const Example = ({ title }) => (
  <div>
    <h1 className={style.mainTitle}>{title}</h1>
    <p className={ownStyles.paragraph}>Example paragraph</p>
    <img src={KittensImg} alt="beautiful kitty" />
  </div>
)

Example.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Example
