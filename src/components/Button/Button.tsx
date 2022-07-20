import React from 'react'

type Props = {
  name: string
  onClick: () => void
}

const Button: React.FC<Props> = ({name, onClick}) => {
  return (
    <div>
      <button id="add-button" onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button