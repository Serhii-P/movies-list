import React from 'react'
import { differenceInDays, fromUnixTime } from "date-fns";

import { Movie } from '../movies';
import NotFound from './NotFound';
import Button from './Button/Button';
import SortMovies from './SortMovies/SortMovies';

type Props = {
  rightList: Movie[];
  search: string;
  onRemoveClick: (product: Movie) => void;
}

const RightListContainer: React.FC<Props> = ({rightList, search, onRemoveClick}) => {

  return (
    <>
      <SortMovies list={rightList} searchItem={search} onClick={onRemoveClick} btn="Remove"/>
    </>
  )
}

export default RightListContainer