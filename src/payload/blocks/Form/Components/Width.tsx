import React from 'react'

interface WidthProps {
  width: number
  children: React.ReactNode
}

function getWidth(width: number) {
  if (width <= 25) return 'width-25'
  else if (width > 25 && width < 50) return 'width-full width-md-25'
  else if (width >= 50 && width < 75) return 'width-full width-md-50'
  else if (width >= 75 && width < 100) return 'width-full width-md-75'
  else return 'width-100'
}

const Width: React.FC<WidthProps> = ({ children, width }) => {
  return (
    <div style={{ flexGrow: '1' }} className={getWidth(width)}>
      {children}
    </div>
  )
}

export default Width
