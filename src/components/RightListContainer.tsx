import React from 'react'
import { Movie } from '../movies';
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