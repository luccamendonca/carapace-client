import * as React from 'react';

import Grid from '@mui/material/Grid';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { VolumeOff } from '@mui/icons-material';

import { sendCmd, Cmd } from '../client';
import TileItem from './TileItem';


type Props = {
  prev?: Cmd,
  playPause?: Cmd,
  next?: Cmd,
  volDown?: Cmd,
  volUp?: Cmd,
  volMute?: Cmd,
};

type State = {};

class MediaControls extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { prev, playPause, next, volDown, volUp, volMute } = this.props;
    const style = { fontSize: 60 };

    return (
      <>
        {prev &&
          <Grid item xs={2}>
            <TileItem style={style} aria-label="prev" onClick={async () => await sendCmd(prev)}>
              <SkipPreviousIcon fontSize="inherit" />
            </TileItem>
          </Grid>}
        {playPause &&
          <Grid item xs={2}>
            <TileItem style={style} aria-label="playPause" onClick={async () => await sendCmd(playPause)}>
              <PlayArrowIcon fontSize="inherit" />
            </TileItem>
          </Grid>}
        {next &&
          <Grid item xs={2}>
            <TileItem style={style} aria-label="next" onClick={async () => await sendCmd(next)}>
              <SkipNextIcon fontSize="inherit" />
            </TileItem>
          </Grid>}
        {volDown &&
          <Grid item xs={2}>
            <TileItem style={style} aria-label="volDown" onClick={async () => await sendCmd(volDown)}>
              <VolumeDownIcon fontSize="inherit" />
            </TileItem>
          </Grid>}
        {volUp &&
          <Grid item xs={2}>
            <TileItem style={style} aria-label="volUp" onClick={async () => await sendCmd(volUp)}>
              <VolumeUpIcon fontSize="inherit" />
            </TileItem>
          </Grid>}
        {volMute &&
          <Grid item xs={2}>
            <TileItem style={style} aria-label="volUp" onClick={async () => await sendCmd(volMute)}>
              <VolumeOff fontSize="inherit" />
            </TileItem>
          </Grid>}
      </>
    );
  }
}

export default MediaControls;
