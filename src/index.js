// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import App from './components/App';

import registerServiceWorker from './utils/registerServiceWorker';
import images from './utils/images'
import audios from './utils/audios'
import { currentDayObj } from './utils/index'

const image = currentDayObj(images)
const audio = currentDayObj(audios)

const root = document.getElementById('root')
if (root) {
  ReactDOM.render(<App image={image} audio={audio} />, root);
  registerServiceWorker();
}
