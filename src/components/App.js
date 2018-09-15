import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import '../css/logo.css';
import Image from './Image'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.audioRef.current.audioEl.paused
      ? this.audioRef.current.audioEl.play()
      : this.audioRef.current.audioEl.pause()
  }
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="header__title">A12o</h1>
        </header>
        <main
          className="main"
          onClick={this.toggle}
        >
          <Image image={this.props.image} />
        </main>
        <ReactAudioPlayer
          ref={this.audioRef}
          src={this.props.audio}
          // autoPlay
          // controls
        />
      </div>
    );
  }
}

export default App;
