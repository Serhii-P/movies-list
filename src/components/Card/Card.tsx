import React from 'react'
import { differenceInDays, fromUnixTime } from "date-fns";
import './Card.scss';

type Props = {
  title: string
  date: number
  poster: string
}

const Card: React.FC<Props> = ({title, date, poster}) => {
  return (
    <>
      <div id="movie-title">{title}</div>
      <div>
        Release date:{" "}
        {differenceInDays(new Date(), fromUnixTime(date))}{" "}
        days ago
      </div>
      <div className="poster">
        <img src={poster} alt={title} />
      </div>
    </>
  )
}

export default Card