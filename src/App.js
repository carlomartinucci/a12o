import React from 'react';
import './css/logo.css';
import './css/image.css';
import image from './image'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="header__title">A12o</h1>
        </header>
        <main className="main" style={{backgroundImage: `url(${image})`}}>
        </main>
      </div>
    );
  }
}

export default App;
