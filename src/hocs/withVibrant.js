import React from 'react';
import * as Vibrant from 'node-vibrant'

export default function withVibrant(WrappedComponent, image) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.setStateFromPalette = this.setStateFromPalette.bind(this)
      this.state = {
        palette: null,
        headerBackgroundColor: null,
        headerTitleColor: null,
        mainBackgroundColor: null,
      };
    }

    componentDidMount() {
      Vibrant.from(image).getPalette().then(this.setStateFromPalette)
    }

    setStateFromPalette(palette) {
      const headerBackgroundColor = palette && palette.DarkVibrant.getHex()
      const headerTitleColor = palette && palette.DarkVibrant.getTitleTextColor()
      const mainBackgroundColor = palette && palette.Vibrant.getHex()
      this.setState({ palette, headerBackgroundColor, headerTitleColor, mainBackgroundColor })
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  };
}
