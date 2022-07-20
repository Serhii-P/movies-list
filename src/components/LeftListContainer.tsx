import React from 'react';
import { Movie } from '../movies';
import SortMovies from './SortMovies/SortMovies';

type Props = {
  leftList: Movie[];
  search: string;
  onAddClick: (product: Movie) => void;
}

const LeftListContainer: React.FC<Props> = ({leftList, search, onAddClick}) => {

  return (
    <>
      <SortMovies list={leftList} searchItem={search} onClick={onAddClick} btn="Add"/>
    </>
  )
}

export default LeftListContainer