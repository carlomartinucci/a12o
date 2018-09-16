import React from 'react';
import '../css/image.css';

const Image = ({ image }) => <div className={`image transition-opacity opacity-${image ? 1 : 0}`} style={{backgroundImage: `url(${image})`}} />
export default Image
