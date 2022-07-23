import './card.styles.css';

const Card = ({ movieDetails }) => {
   const { title, thumbnail, year, cast, rating } = movieDetails;
   return (
      <div className='card-container'>
         <img src={thumbnail} alt="" />
         <h5>{title} ({year})</h5>
         <span>Rating: {rating}</span>
         <span>Staring:</span>
         <div>
            {cast.map(name => <h6 key={name}>{name}</h6>)}
         </div>
      </div>
   )
};

export default Card;