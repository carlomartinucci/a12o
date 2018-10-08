// @flow
import * as React from 'react';
import '../css/image.css';

type Props = { image: ?string };
const Image = ({ image }: Props) => <div className={`image transition-opacity opacity-${image ? 1 : 0}`} style={image ? {backgroundImage: `url(${image})`} : null} />

export default Image
