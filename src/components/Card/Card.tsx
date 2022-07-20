import React from 'react'
import { differenceInDays, fromUnixTime } from "date-fns";

type Props = {
  title: string
  date: number
}

const Card: React.FC<Props> = ({title, date}) => {
  return (
    <>
      <div id="movie-title">{title}</div>
      <div>
        Release date:{" "}
        {differenceInDays(new Date(), fromUnixTime(date))}{" "}
        days ago
      </div>
    </>
  )
}

export default Card