import * as React from 'react';

import TileInfo from './Tiles/TileInfo';
import MediaControls from './Tiles/MediaControls';
import { Cmd } from './client';
import TileIconButton from './Tiles/TileIconButton';
import ButtonGridContainer from './ButtonGridContainer';

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
    const goToDesktop1: Cmd = { command: 'i3-msg', args: 'workspace 1' };

    return (
      <>
        <ButtonGridContainer>
          <MediaControls
            prev={prev}
            playPause={playPause}
            next={next}
            volDown={volDown}
            volUp={volUp}
            volMute={volMute} />
        </ButtonGridContainer>

        <ButtonGridContainer>
          <TileInfo autoRefresh title="CPU" cmd={cpuTemp} />
          <TileInfo autoRefresh title="Mem" cmd={mem} />
        </ButtonGridContainer>

        <ButtonGridContainer>
          <TileIconButton cmd={goToDesktop1} >
            1
          </TileIconButton>
        </ButtonGridContainer>
      </>
    );
  }
}

export default DisplayInfo;
