import React, { useState } from 'react'
import Proptypes from 'prop-types'
import KittensImg from '@imgs/kittens.jpg'
import Card from './example'

const Main = () => {
  const [kittens, setKittens] = useState({
    title: 'Precious kittens',
    img: KittensImg,
    imgDesc: 'Several precious kittens on the street',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    likes: 0,
  })
  return (
    <Card
      {...kittens}
      onClickLike={() => setKittens({ ...kittens, likes: kittens.likes + 1 })}
    />
  )
}

export default Main
