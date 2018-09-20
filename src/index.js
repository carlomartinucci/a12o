import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import App from './components/App';

import registerServiceWorker from './utils/registerServiceWorker';
import images from './utils/images'
import audios from './utils/audios'
import { currentDayObj } from './utils/index'
import withVibrant from './hocs/withVibrant'

const image = currentDayObj(images)
const audio = currentDayObj(audios)

const AppWithVibrant = withVibrant(image)(App)

ReactDOM.render(<AppWithVibrant image={image} audio={audio} />, document.getElementById('root'));
registerServiceWorker();
