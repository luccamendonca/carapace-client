import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { sendCmd, Cmd } from '../client';
import TileItem from './TileItem'

type Props = {
  title: string,
  cmd: Cmd,
};

type State = {};

class TileButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  handleClick = async () => {
    const { cmd } = this.props;
    await sendCmd(cmd);
  }

  render() {
    const { title } = this.props;
    return (
      <Grid item xs={2}>
        <TileItem elevation={5} onClick={this.handleClick}>
          <Typography style={{ userSelect: "none" }} variant="h4">
            {title}
          </Typography>
        </TileItem>
      </Grid>
    );
  }
}

export default TileButton;
