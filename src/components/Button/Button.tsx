import React from 'react';
import './Button.scss';

type Props = {
  name: string
  onClick: () => void
}

const Button: React.FC<Props> = ({name, onClick}) => {
  return (
    <div>
      <button  className='card-button' onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button