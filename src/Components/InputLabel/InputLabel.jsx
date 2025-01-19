import React from 'react'

const InputLabel = ({tag}) => {
  return (
    <div className='input-label'>
        <label 
        htmlFor={tag}
        >
            {tag}
        </label>
    </div>
  )
}

export default InputLabel