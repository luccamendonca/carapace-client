import * as React from 'react';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { VolumeOff } from '@mui/icons-material';

import { Cmd } from '../client';
import TileIconButton from './TileIconButton';


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

    return <>
      {prev &&
        <TileIconButton cmd={prev}>
          <SkipPreviousIcon fontSize="inherit" />
        </TileIconButton>}
      {playPause &&
        <TileIconButton cmd={playPause}>
          <PlayArrowIcon fontSize="inherit" />
        </TileIconButton>}
      {next &&
        <TileIconButton cmd={next}>
          <SkipNextIcon fontSize="inherit" />
        </TileIconButton>}
      {volDown &&
        <TileIconButton cmd={volDown}>
          <VolumeDownIcon fontSize="inherit" />
        </TileIconButton>}
      {volUp &&
        <TileIconButton cmd={volUp}>
          <VolumeUpIcon fontSize="inherit" />
        </TileIconButton>}
      {volMute &&
        <TileIconButton cmd={volMute}>
          <VolumeOff fontSize="inherit" />
        </TileIconButton>}
    </>;
  }
}

export default MediaControls;
