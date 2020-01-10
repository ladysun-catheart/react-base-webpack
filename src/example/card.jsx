import React from 'react'
import PropTypes from 'prop-types'
import style from '@style/main.scss'
import ownStyles from './card.scss'

const Card = ({
  title,
  img,
  imgDesc,
  description,
  onClickLike,
  likes,
}) => (
  <div>
    <h1 data-testid="card-header" className={style.mainTitle}>
      {title}
    </h1>
    <img
      data-testid="card-img"
      src={img}
      alt={imgDesc}
    />
    <p data-testid="card-desc" className={ownStyles.paragraph}>
      {description}
    </p>
    <div>
      <button
        data-testid="card-btn-likes"
        type="button"
        onClick={onClickLike}
      >
        Like
      </button>
      <span data-testid="card-likes">{likes}</span>
    </div>
  </div>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgDesc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClickLike: PropTypes.func.isRequired,
}

export default Card
