import React, {Component} from 'react'

class SearchBar extends Component {
  constructor(props) {
  super(props)

    this.state = {term: '' };
  } //consructor
  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={e =>this.onInputChange(e.target.value)}/>
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermSearch(term);
  }
}

export default SearchBar;
