// @flow
import * as React from 'react';
import * as Vibrant from 'node-vibrant';

type Swatch = {
  getHex: () => string,
  getTitleTextColor: () => string
};

export type Palette = {
  DarkMuted: Swatch,
  DarkVibrant: Swatch,
  Muted: Swatch,
  Vibrant: Swatch,
  LightMuted: Swatch,
  LightVibrant: Swatch
} | null;

function withVibrant<Props: { image: string, palette: Palette }>(
  Component: React.ComponentType<Props>
): React.ComponentType<$Diff<Props, { palette: Palette | void }>> {
  class WithVibrant extends React.Component<$Diff<Props, { palette: Palette | void }>, { palette: Palette }> {
    vibrant: (quality: number) => Promise<void>;
    setPalette: (palette: Palette) => void;

    constructor(props) {
      super(props);
      this.vibrant = this.vibrant.bind(this)
      this.state = {
        palette: null
      };
    }

    componentDidMount() {
      this.vibrant(5).then(() => this.vibrant(0))
    }

    vibrant(quality) {
      return Vibrant.from(this.props.image, 256, quality)
        .getPalette()
        .then(palette => this.setState({ palette }))
    }

    render() {
      return <Component {...this.props} palette={this.state.palette} />;
    }
  }
  WithVibrant.displayName = `WithVibrant(${Component.displayName || Component.name || 'Component'})`;
  return WithVibrant
}

export default withVibrant
