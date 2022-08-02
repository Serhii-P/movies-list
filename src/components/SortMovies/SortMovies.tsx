import React from 'react'
import { Movie } from '../../movies';
import Button from '../Button/Button';
import NotFound from '../NotFound';
import Card from '../Card/Card';
import CardWrapper from '../CardWrapper/CardWrapper';

type Props = {
  list: Movie[];
  searchItem: string;
  onClick: (product: Movie) => void;
  btn: string
}

const SortMovies: React.FC<Props> = ({list, searchItem, onClick, btn}) => {
  const sortMoviesContent =  list.length > 0 ? (
    < >
       {list.filter(query => {
          if (query.title.toLowerCase().includes(searchItem.toLowerCase())) {
              return true;
          }
          return false;
          }).map(product => (
            <CardWrapper key={product.id}>
              <Card title={product.title} date={product.release_date} poster={product.poster}/>
              <Button name={btn}  onClick={() => onClick(product)}/>
            </CardWrapper>
      ))}
    </>
):(
<NotFound />
);
  return (
    <div>{sortMoviesContent}</div>
  )
}

export default SortMovies