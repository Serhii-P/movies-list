import React, { useRef } from 'react';
import './CardWrapper.scss';

const CardWrapper: React.FC = ({children}) => {

  const wrapperRef = useRef(null);

  // const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const box: HTMLDivElement = e.currentTarget;

  //   let l = 0;
  //     function updateColor(newl: number) {
  //       l = newl;
  //       box.style.backgroundColor = `#64c864${20 + l * 5}`;
  //       if (l < 10) {
  //         setTimeout(() => updateColor(l + 1), 25);
  //       }
  //     }
  //     setTimeout(() => updateColor(l + 1), 25);
  // }
  // const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const box: HTMLDivElement = e.currentTarget;
  //   box.style.backgroundColor = "#64c86420";  }

  return (
      <div className='cardWrapper'
        id="movie"
        ref={wrapperRef}
        // onMouseOver={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
  )
}

export default CardWrapper