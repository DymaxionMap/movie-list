import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.change = this.change.bind(this);
    this.click = this.click.bind(this);
    this.enter = this.enter.bind(this);
  }

  change(event) {
    this.setState( { text: event.target.value });
  }

  click(event) {
    this.props.filterMovies(this.state.text);
  }

  enter(event) {
    if (event.key === 'Enter') {
      this.props.filterMovies(this.state.text);
    }
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.change} onKeyPress={this.enter} />
        <button onClick={this.click}>Go!</button>
      </div>
    );
  }
}

export default Search;