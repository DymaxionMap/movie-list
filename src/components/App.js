import React from 'react';
import Nav from './Nav';
import movies from '../data/movies';

class App extends React.Component {
  render() {
    return (
    	<div>
        <Nav />
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