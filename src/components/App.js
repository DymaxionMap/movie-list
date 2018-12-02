import React from 'react';
import movies from '../data/movies'

class App extends React.Component {
  render() {
    return (
    	<div>
        <h1>MovieList</h1>
        <div className='container'>
          <ul className='list-group'>
            {movies.map(movie => <li className='list-group-item'>{movie.title}</li>)}
          </ul>
        </div>
      </div>
    );
  }
};

export default App;