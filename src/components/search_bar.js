import React, {Component} from 'react'

class SearchBar extends Component {
  constructor(props) {
  super(props)

    this.state = {term: 'Statring Value' };
  } //consructor
  render() {
    return (
      <div>
        <input value={this.state.term} onChange={e =>this.setState({term: e.target.value})}/>
        Value of the Input  : {this.state.term}
      </div>
    )
  }

  onInputChange(e) {
    console.log(e.target.value)

  }
}

export default SearchBar;
