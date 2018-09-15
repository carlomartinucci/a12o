import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import App from './components/App';

import registerServiceWorker from './utils/registerServiceWorker';
import image from './utils/image'
import audio from './utils/audio'

ReactDOM.render(<App image={image} audio={audio} />, document.getElementById('root'));
registerServiceWorker();
