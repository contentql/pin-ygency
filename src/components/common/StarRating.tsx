import React from 'react'

interface StarRatingProps {
  rating: number
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const getStars = () => {
    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className='fas fa-star' />)
    }

    if (halfStar) {
      stars.push(<i key='half' className='fas fa-star-half-alt' />)
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className='far fa-star' />)
    }

    return stars
  }

  return <div className='ratting style-two'>{getStars()}</div>
}

export default StarRating
