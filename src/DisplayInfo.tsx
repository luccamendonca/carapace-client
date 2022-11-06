import * as React from 'react';
import Grid from '@mui/material/Grid';
import TileButton from './Tiles/TileIconButton'
import TileInfo from './Tiles/TileInfo';
import MediaControls from './Tiles/MediaControls';
import { Cmd } from './client';

type Props = {};
type State = {};

class DisplayInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const prev: Cmd = { command: "playerctl", args: "previous" };
    const playPause: Cmd = { command: "playerctl", args: "play-pause" };
    const next: Cmd = { command: "playerctl", args: "next" };
    const volDown: Cmd = { command: "volctrl", args: "-5" };
    const volUp: Cmd = { command: "volctrl", args: "+5" };
    const volMute: Cmd = { command: "volctrl", args: "mute" };
    const cpuTemp: Cmd = { command: "cpu-temp" };
    const mem: Cmd = { command: "mem-available" };

    return (
      <Grid container direction="row" style={{ textAlign: 'center' }}>
        <Grid item xs={12}>
          <Grid container direction="row" columnSpacing={4}>
            <MediaControls
              prev={prev}
              playPause={playPause}
              next={next}
              volDown={volDown}
              volUp={volUp}
              volMute={volMute} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row" columnSpacing={4}>
            <TileInfo title="CPU" cmd={cpuTemp} />
            <TileInfo title="Mem" cmd={mem} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default DisplayInfo;
