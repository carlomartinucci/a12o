import React from 'react';
import * as Vibrant from 'node-vibrant'

const withVibrant = image => WrappedComponent => {
  class WithVibrant extends React.Component {
    constructor(props) {
      super(props);
      this.vibrant = this.vibrant.bind(this)
      this.setStateFromPalette = this.setStateFromPalette.bind(this)
      this.state = {
        palette: null,
        headerBackgroundColor: null,
        headerTitleColor: null,
        mainBackgroundColor: null,
      };
    }

    componentDidMount() {
      this.vibrant(5).then(() => this.vibrant(0))
    }

    vibrant(quality) {
      return Vibrant.from(image, 256, quality).getPalette().then(this.setStateFromPalette)
    }

    setStateFromPalette(palette) {
      const headerBackgroundColor = palette && palette.DarkVibrant.getHex()
      const headerTitleColor = palette && palette.DarkVibrant.getTitleTextColor()
      const mainBackgroundColor = palette && palette.Vibrant.getHex()
      this.setState({ palette, headerBackgroundColor, headerTitleColor, mainBackgroundColor })
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  }
  WithVibrant.displayName = `WithVibrant(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return WithVibrant
}

export default withVibrant
