import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import App from './components/App';

import registerServiceWorker from './utils/registerServiceWorker';
import image from './utils/image'
import audio from './utils/audio'
import withVibrant from './hocs/withVibrant'

const AppWithVibrant = withVibrant(image)(App)

ReactDOM.render(<AppWithVibrant image={image} audio={audio} />, document.getElementById('root'));
registerServiceWorker();
