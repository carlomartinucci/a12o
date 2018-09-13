import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import './css/logo.css';
import './css/image.css';
import image from './image'
import audio from './audio'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.toggle = this.toggle.bind(this)
    this.state = {
      audio: 'pause'
    }
  }
  toggle() {
    this.audioRef.current.audioEl.paused
      ? this.audioRef.current.audioEl.play()
      : this.audioRef.current.audioEl.pause()
  }

  play() {
    console.log(this.audioRef.current.audioEl)
    console.log('play')
    this.audioRef.current.audioEl.play()
  }
  pause() {
    console.log('pause')
    this.audioRef.current.audioEl.pause()
  }
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="header__title">A12o</h1>
        </header>
        <main
          className="main"
          style={{backgroundImage: `url(${image})`}}
          // onClick={this.state.audio == 'play' ? this.pause : this.play}
          onClick={this.toggle}
          >
          {this.state.audio}
        </main>
        <ReactAudioPlayer
          ref={this.audioRef}
          src={audio}
          // autoPlay
          controls
          onPlay={() => this.setState({ audio: 'play' })}
          onPause={() => this.setState({ audio: 'pause' })}
        />
      </div>
    );
  }
}

export default App;
