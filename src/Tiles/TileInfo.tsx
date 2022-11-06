import * as React from 'react';

import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import { sendCmd, Cmd } from '../client';
import TileItem from './TileItem'

type Props = {
  title: string,
  cmd: Cmd,
};

type State = {
  value: string,
};

class TileInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: "???",
    };
  }

  componentDidMount() {
    const updateValue = async () => {
      const { cmd } = this.props;
      const value = await sendCmd(cmd);
      this.setState({ value: value.getMessage() });
    };
    updateValue();
  }

  render() {
    const { title } = this.props;
    const { value } = this.state;

    return (
      <Grid item xs={6} sm={2}>
        <TileItem elevation={3}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h3" fontWeight={"bold"}>{value}</Typography>
        </TileItem>
      </Grid>
    );
  }
}

export default TileInfo;
