import './search-box.styles.css';

const SearchBox = ({ onChangeHandler }) => (
   <div className='search-box-container'>
      <span className='search-title'>Search Movies</span>
      <div>
         <input className='search-box' type="search" placeholder='Title' name='title' onChange={onChangeHandler} />
         <input className='search-box' type="search" placeholder='Year' name='year' onChange={onChangeHandler} />
         <input className='search-box' type="search" placeholder='Cast' name='cast' onChange={onChangeHandler} />
      </div>
   </div>
)

export default SearchBox;
