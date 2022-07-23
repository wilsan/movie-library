import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

import Genre from './components/genre/genre.component';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

const moviesList = [
  {
    title: 'Toy Story',
    year: '1995',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg',
    cast: ['Tim Allen', 'Tom Hanks'],
    genre: 'animation',
    rating: 4.2
  },
  {
    title: 'Jumanji',
    year: '1995',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZTk2ZmUwYmEtNTcwZS00YmMyLWFkYjMtNTRmZDA3YWExMjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR10,0,182,268_AL_.jpg',
    cast: ['Robin Williams', 'Kirsten Dunst'],
    genre: 'adventure',
    rating: 4.1
  },
  {
    title: 'The Scorpion King',
    year: '2002',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTA1NTg0MDcxMF5BMl5BanBnXkFtZTcwNjUzODkyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    cast: ['Dwayne Johnson', 'Kelly Hu'],
    genre: 'action',
    rating: 3.0
  },
  {
    title: 'Spider-Man',
    year: '2002',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzk3MTE5MDU5NV5BMl5BanBnXkFtZTYwMjY3NTY3._V1_UX182_CR0,0,182,268_AL_.jpg',
    cast: ['Tobey Maguire', 'Kirsten Dunst'],
    genre: 'action',
    rating: 4.5
  },
  {
    title: 'Robots',
    year: '2005',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDYyNjY1NjY1M15BMl5BanBnXkFtZTcwNjk5MDczMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    cast: ['Chris Wedge', 'Ewan McGregor'],
    genre: 'animation',
    rating: 3.2
  },
  {
    title: 'Anonymous',
    year: '2011',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxOTA5MTMxOV5BMl5BanBnXkFtZTcwNDI4MzU0NQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    cast: ['Rhys Ifans', 'Vanessa Redgrave'],
    genre: 'drama',
    rating: 3.9
  },
  {
    title: 'Batman',
    year: '1943',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTIzMDI1MTk3Nl5BMl5BanBnXkFtZTgwODE4NzM1MjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    cast: ['Lewis Wilson', 'Douglas Croft'],
    genre: 'action',
    rating: 3.0
  },
  {
    title: 'Womb',
    year: '2010',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5ODcwOTQ5Nl5BMl5BanBnXkFtZTcwNzk5ODk0Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    cast: ['Eva Green', 'Matt Smith'],
    genre: 'drama',
    rating: 4.2
  },
  {
    title: 'The Dark Knight Rises',
    year: '2012',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    cast: ['Christian Bale', 'Tom Hardy'],
    genre: 'action',
    rating: 4.7
  },
  {
    title: 'The Borne Legacy',
    year: '2012',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc4Njk3MDM1Nl5BMl5BanBnXkFtZTcwODgyOTMxOA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    cast: ['Jeremy Renner', 'Rachel Weisz'],
    genre: 'action',
    rating: 4.0
  },
];

const genre = ['animation', 'adventure', 'action', 'drama'];

function App() {
  const [searchField, setSearchField] = useState({});
  const [fileteredMovies, setFilteredMovies] = useState(moviesList);

  useEffect(() => {
    const newFilteredMovies = moviesList.filter(movie => {
      const field = Object.keys(searchField)[0];
      if (field === 'cast') {
        return movie[field].join().toLowerCase().includes(searchField[field])
      }
      return field && movie[field].toLowerCase().includes(searchField[field]);
    })
    
    setFilteredMovies(newFilteredMovies);
  }, [searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    const searchFieldName = event.target.name;
    
    setSearchField({ [searchFieldName]: searchFieldString })
  }

  
  return (
    <div className="App">
      <SearchBox onChangeHandler={onSearchChange} />
      {!Object.keys(searchField)[0] && <Genre genreList={genre} movieList={moviesList} />}
      {Object.keys(searchField)[0] && <CardList movies={fileteredMovies} />}
    </div>
  );
}

export default App;
