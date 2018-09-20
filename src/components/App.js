// @flow
import * as React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import { clearAudioSrc } from '../utils'
import '../css/logo.css';
import Image from './Image'

type Props = {
  audio: string,
  image: string,
  headerBackgroundColor?: string,
  headerTitleColor?: string,
  mainBackgroundColor?: string,
  palette: any,
};

class App extends React.Component<Props> {
  audioRef: ?any;
  toggle: () => void;
  constructor(props: Props) {
    super(props);
    this.audioRef = React.createRef();
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    if (!this.audioRef || !this.audioRef.current) return
    this.audioRef.current.audioEl.paused
      ? this.audioRef.current.audioEl.play()
      : this.audioRef.current.audioEl.pause()
  }
  render() {
    return (
      <div className="app" onClick={this.toggle}>
        <header className="header transition-background-color" style={{backgroundColor: this.props.headerBackgroundColor}}>
          <h1 className="header__title transition-color" style={{color: this.props.headerTitleColor}}>
            A12o {clearAudioSrc(this.props.audio)}
          </h1>
        </header>
        <main className="main transition-background-color" style={{backgroundColor: this.props.mainBackgroundColor}}>
          <Image image={this.props.palette && this.props.image} />
          <ReactAudioPlayer
            ref={this.audioRef}
            src={this.props.audio}
            autoPlay
            controls
          />
        </main>
      </div>
    );
  }
}

export default App;
