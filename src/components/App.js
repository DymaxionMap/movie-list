import React from 'react';
import Nav from './Nav';
import List from './List';
import Search from './Search';
import Add from './Add';
import initialMovies from '../data/movies';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: initialMovies, 
      displayedMovies: initialMovies
    }
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovies = this.addMovies.bind(this);
  }

  filterMovies(text) {
    const query = text.trim().toLowerCase();
    // Reset list if blank
    if (query.length === 0) {
      this.setState({ displayedMovies: this.state.movies });
      return;
    }

    const filteredMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(query));
    // Do nothing if no match
    if (filteredMovies.length === 0) {
      alert('Sorry, no movie by that name was found. Try again!');
      return;
    }

    // Update movies if match
    this.setState({ displayedMovies: filteredMovies });
  }

  addMovies(text) {
    const newMovie = { title: text.trim() };
    if (newMovie.title.length !== 0) {
      const updatedMovies = this.state.movies.concat(newMovie);
      this.setState({ 
        movies: updatedMovies,
        displayedMovies: updatedMovies
      });
    }
  }

  render() {
    return (
    	<div>
        <Nav />
        <div className='container'>
          <Add addMovies={this.addMovies}/>
          <Search filterMovies={this.filterMovies}/>
          <List movies={this.state.displayedMovies} />
        </div>
      </div>
    );
  }
};

export default App;