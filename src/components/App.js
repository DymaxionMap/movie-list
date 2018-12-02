import React from 'react';
import Nav from './Nav';
import List from './List';
import movies from '../data/movies';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies }
  }

  render() {
    return (
    	<div>
        <Nav />
        <div className='container'>
          <List movies={this.state.movies} />
        </div>
      </div>
    );
  }
};

export default App;