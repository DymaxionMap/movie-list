import React from 'react';
import Nav from './Nav';
import List from './List';
import Search from './Search';
import movies from '../data/movies';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies }
    this.filterMovies = this.filterMovies.bind(this);
  }

  filterMovies(text) {
    const query = text.trim().toLowerCase();
    // Reset list if blank
    if (query.length === 0) {
      this.setState({ movies });
      return;
    }

    const filteredMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(query));
    // Do nothing if no match
    if (filteredMovies.length === 0) {
      alert('Sorry, no movie by that name was found. Try again!');
      return;
    }

    // Update movies if match
    this.setState({ movies: filteredMovies });
  }

  render() {
    return (
    	<div>
        <Nav />
        <div className='container'>
          <Search filterMovies={this.filterMovies}/>
          <List movies={this.state.movies} />
        </div>
      </div>
    );
  }
};

export default App;