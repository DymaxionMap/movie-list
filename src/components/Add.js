import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };

    this.change = this.change.bind(this);
    this.click = this.click.bind(this);
    this.enter = this.enter.bind(this);
  }

  change(event) {
    this.setState({ text: event.target.value });
  }

  click() {
    this.props.addMovies(this.state.text);
    this.setState({ text: '' });
  }

  enter(event) {
    if (event.key === 'Enter') {
      this.props.addMovies(this.state.text);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.text} onChange={this.change} onKeyPress={this.enter}/>
        <button onClick={this.click}>Add</button>
      </div>
    );
  }
}

export default Add;