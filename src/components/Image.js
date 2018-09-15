import React from 'react';
import '../css/image.css';

const Image = ({ image }) => <div className="image" style={{backgroundImage: `url(${image})`}} />
export default Image
