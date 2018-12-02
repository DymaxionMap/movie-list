import React from 'react';
import Nav from './Nav';
import List from './List';
import movies from '../data/movies';

class App extends React.Component {
  render() {
    return (
    	<div>
        <Nav />
        <div className='container'>
          <List movies={movies} />
        </div>
      </div>
    );
  }
};

export default App;