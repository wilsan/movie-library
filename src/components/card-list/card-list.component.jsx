import Card from "../card/card.component";
import './card-list.styles.css';

const CardList = ({ movies }) => (
   <div className="card-list">
      {movies.map(movie => {
         return <Card movieDetails={movie} key={movie.title} />
      })}
   </div>
)

export default CardList;
