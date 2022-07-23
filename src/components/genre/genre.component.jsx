import CardList from "../card-list/card-list.component";
import './genre.styles.css';

const Genre = ({ genreList, movieList }) => {
   return (
      <div className="genre-container">

         {genreList.map((item, index) => {
            const filteredList = movieList.filter(movie => movie.genre === item)
            return (
               <div key={index}>
                  <h1 className="genre-title">{item}</h1>
                  <CardList movies={filteredList} />
               </div>
            )
         })}
      </div>
   )
}

export default Genre;