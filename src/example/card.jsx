import React from 'react'
import PropTypes from 'prop-types'
import style from './card.scss'

const Card = ({
  title,
  img,
  imgDesc,
  description,
  onClickLike,
  likes,
}) => (
  <div className={style.card}>
    <h1 data-testid="card-header" className={style.header}>
      {title}
    </h1>
    <img
      data-testid="card-img"
      className={style.img}
      src={img}
      alt={imgDesc}
    />
    <p data-testid="card-desc" className={style.desc}>
      {description}
    </p>
    <div>
      <span data-testid="card-likes" className={style.likes}>{likes}</span>
      <button
        data-testid="card-btn-likes"
        className={style.btnLikes}
        type="button"
        onClick={onClickLike}
      >
        <span role="img" aria-label="likes">👍</span>
      </button>
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
