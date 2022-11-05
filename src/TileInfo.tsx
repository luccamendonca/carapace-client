import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { sendGrpcCommand } from './client';
import TileItem from './TileItem'

type Props = {
  title: string,
  command: string,
  attrs?: string,
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
      const { command, attrs } = this.props;
      const value = await sendGrpcCommand(command, attrs);
      this.setState({ value: value.getMessage() });
    };
    updateValue();
  }

  render() {
    const { title } = this.props;
    const { value } = this.state;
    return (
      <Grid item xs={2}>
        <TileItem elevation={5}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h3" fontWeight={"bold"}>{value}</Typography>
        </TileItem>
      </Grid>
    );
  }
}

export default TileInfo;
