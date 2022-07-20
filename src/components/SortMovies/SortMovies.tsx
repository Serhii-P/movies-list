import React from 'react'
import { differenceInDays, fromUnixTime } from "date-fns";
import { Movie } from '../../movies';
import Button from '../Button/Button';
import NotFound from '../NotFound';

type Props = {
  list: Movie[];
  searchItem: string;
  onClick: (product: Movie) => void;
}

const SortMovies: React.FC<Props> = ({list, searchItem, onClick}) => {
console.log(list);
  const sortMoviesContent =  list.length > 0 ? (
    <div >
       {list.filter(query => {
          if (query.title.toLowerCase().includes(searchItem.toLowerCase())) {
              return true;
          }
          return false;
          }).map(product => (
            <div
            key={product.id}
              id="movie"
              style={{ width: 400, height: 100, border: "1px solid black" }}
              onMouseOver={(e) => {
                const el = e.currentTarget;
                let l = 0;
                function updateColor(newl: number) {
                  l = newl;
                  el.style.backgroundColor = `#64c864${20 + l * 5}`;
                  if (l < 10) {
                    setTimeout(() => updateColor(l + 1), 25);
                  }
                }
                setTimeout(() => updateColor(l + 1), 25);
              }}
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#64c86420")
              }
            >
              <div id="movie-title">{product.title}</div>
              <div>
                Release date:{" "}
                {differenceInDays(new Date(), fromUnixTime(product.release_date))}{" "}
                days ago
              </div>
              
              <Button name="Add"  onClick={() => onClick(product)}/>
            </div>
      ))}
    </div>
):(
<NotFound />
);
  return (
    <div>{sortMoviesContent}</div>
  )
}

export default SortMovies