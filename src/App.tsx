import { useState } from "react";
import LeftListContainer from "./components/LeftListContainer";
import RightListContainer from "./components/RightListContainer";
import Search from "./components/Search/Search";
import { Movie, movies } from "./movies";
import "./App.scss";

function App() {
  const [leftList, setLeftList] = useState<Movie[]>(movies);
  const [rightList, setRightList] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");

  const onAddClick = (product: Movie) => {
    setRightList(prevList => [...prevList, product] );

    const newLeftList = leftList.filter((item) => item.id !== product.id);
    setLeftList(newLeftList);
  };

  const onRemoveClick = (movie: Movie) => {
    setLeftList(prevList => [...prevList, movie] );

    const newRightList = rightList.filter((item) => item.id !== movie.id);
    setRightList(newRightList);
  };

  return (
    <div className="App">
      <div id="left-movie-container">
        <Search search={search} placeholder="Type for searcing..." setSearch={setSearch}/>

        <LeftListContainer 
          leftList={leftList} 
          search={search} 
          onAddClick={onAddClick}
        />
      </div>
      <div id="right-movie-container">
        <RightListContainer 
          rightList={rightList} 
          search={search} 
          onRemoveClick={onRemoveClick} 
        />
        
      </div>
    </div>
  );
}

export default App;
