import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false
    };

    this.click = this.click.bind(this);
    this.buttonPressed = 'btn btn-success watched';
    this.buttonUnpressed = 'btn btn-success watched unpressed';
  }

  click() {
    this.setState({
      pressed: !this.state.pressed
    });
  }

  render() {
    return (
      <li className='list-group-item'>
        {this.props.text}
        <button className={this.state.pressed ? this.buttonPressed : this.buttonUnpressed} 
          onClick={this.click}>
          Watched
        </button>
      </li>
    );
  }
};

// const ListItem = ({ text }) => (
//   <li className='list-group-item'>{text}<button className='btn btn-success watched unpressed'>Watched</button></li>
// );

export default ListItem;