import * as React from 'react';
import Grid from '@mui/material/Grid';
import TileButton from './TileButton'
import TileInfo from './TileInfo';

type Props = {};
type State = {};

class DisplayInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid container direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
        <TileInfo title="CPU" command="cpu-temp" />
        <TileInfo title="Mem" command="mem-available" />
        <TileButton title="Vol -5" command="volctrl" attrs="-5" />
        <TileButton title="Vol +5" command="volctrl" attrs="+5" />
        <TileButton title="play pause" command="playerctl" attrs="play-pause" />
      </Grid>
    );
  }
}

export default DisplayInfo;
