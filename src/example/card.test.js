/* eslint-disable import/extensions */
import React from 'react'
import {
  render,
  fireEvent,
} from '@testing-library/react'
import faker from 'faker'
import Card from './card'

describe('Given a Example component...', () => {
  test('it has a title, a description and an image', () => {
    // Arrange
    faker.seed(10)
    const info = {
      title: faker.lorem.words(),
      img: faker.image.imageUrl(),
      imgDesc: faker.lorem.words(),
      description: faker.lorem.paragraph(),
    }
    const { getByTestId } = render(<Card {...info} onClickLike={jest.fn()} />)
    // Assert
    expect(getByTestId('card-header').textContent).toBe(info.title)
    expect(getByTestId('card-img').src).toBe(info.img)
    expect(getByTestId('card-img').alt).toBe(info.imgDesc)
    expect(getByTestId('card-desc').textContent).toBe(info.description)
  })

  test('', () => {

  })

  test('you can give likes!', () => {
    // Arrange
    faker.seed(10)
    const info = {
      title: faker.lorem.words(),
      img: faker.image.imageUrl(),
      imgDesc: faker.lorem.words(),
      description: faker.lorem.paragraph(),
      likes: faker.random.number(),
    }
    const mockOnClickLike = jest.fn()
    const { getByTestId } = render(<Card {...info} onClickLike={mockOnClickLike} />)
    const btnLike = getByTestId('card-btn-likes')
    const likes = getByTestId('card-likes')
    // Act
    fireEvent.click(btnLike)
    // Asset
    expect(Number(likes.textContent)).toBe(info.likes)
  })
})
