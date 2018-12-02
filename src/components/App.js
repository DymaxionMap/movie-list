import React from 'react';
import movies from '../data/movies'

class App extends React.Component {
  render() {
    return (
    	<div>
        <h1>MovieList</h1>
        <ul>
          {movies.map(movie => <li>{movie.title}</li>)}
        </ul>
      </div>
    );
  }
};

export default App;