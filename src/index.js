import React, {Component} from 'react'
import _ from 'lodash'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_details'
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyBYJVjpgIhYIlrqG8QK50ZJcKsulphwTTI';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('');
  }

  videoSearch(term) {

    YTSearch({
      key: API_KEY,
      term: term
    }, (videos) => {
      this.setState({videos: videos, selectedVideo: videos[0]});
    });
  }

  render() {
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
    return (
      <div className="app">
        <SearchBar onSearchTermSearch={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
      </div>
    );
  }
}
ReactDOM.render(
  <App/>, document.querySelector('.container'));
