import React from 'react'

import"./ResetButton.css"

export const ResetButton = ({ResetBoard}) => {
  return (
    <button className='reset-btn' onClick={ResetBoard}>Reset</button>
  )
}
