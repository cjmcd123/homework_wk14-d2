import React from "react";
import Header from "../components/Header.js";
import MusicBody from "../components/MusicBody.js";

class MusicBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      music: []
    }
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(responseText => responseText.json())
    .then(musicData => this.setState({music: musicData.feed.entry}));
  }

  render(){
    return (
      <div className="music-box">
        <h1>G6 UK Top 20 Songs</h1>
        <table>
          <Header/>
          <MusicBody music={this.state.music}/>
        </table>
      </div>
    );
  }
}

export default MusicBox;
