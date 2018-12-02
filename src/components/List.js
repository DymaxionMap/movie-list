import React from 'react';
import ListItem from './ListItem';

const List = ({ movies }) => (
  <ul className='list-group'>
    {movies.map(movie => <ListItem text={movie.title} />)}
  </ul>
);

export default List;