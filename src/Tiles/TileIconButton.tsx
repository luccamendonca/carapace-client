import * as React from 'react';

import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';

import { sendCmd, Cmd } from '../client';

type Props = {
  cmd: Cmd,
  children: any,
};

type State = {};

class TileIconButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  handleClick = async () => {
    const { cmd } = this.props;
    await sendCmd(cmd);
  }

  render() {
    const buttonStyle = { fontSize: 60, };
    const gridItemStyle = { minHeight: 100, height: 100 };

    return (
      <Grid item xs={4} sm={2} style={gridItemStyle}>
        <IconButton style={buttonStyle} onClick={this.handleClick}>
          {this.props.children}
        </IconButton>
      </Grid>
    );
  }
}

export default TileIconButton;
