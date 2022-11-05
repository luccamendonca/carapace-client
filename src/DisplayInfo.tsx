import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { sendGrpcCommand } from './client';

type Props = {};

type State = {
  cpuTemp: string;
  memAvailable: string;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  cursor: 'pointer',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class DisplayInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cpuTemp: "??",
      memAvailable: "??",
    };
  }

  componentDidMount() {
    const updateValues = async () => {
      const cpu = await sendGrpcCommand('cpu-temp');
      const mem = await sendGrpcCommand('mem-available');
      this.setState({
        cpuTemp: cpu.getMessage(),
        memAvailable: mem.getMessage(),
      });
    };
    updateValues();
  }

  handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    console.log("clicked", e);
    await sendGrpcCommand('wallrousel');
  }

  render() {
    const { cpuTemp, memAvailable } = this.state;
    return (
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}>
        <Grid item xs={2}>
          <Item elevation={5}>
            <Typography variant="h4">CPU</Typography>
            <Typography variant="h3" fontWeight={"bold"}>{cpuTemp}</Typography>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item elevation={5}>
            <Typography variant="h4">Mem</Typography>
            <Typography variant="h3" fontWeight={"bold"}>{memAvailable}</Typography>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item elevation={5}>
            <Typography variant="h4">Mem</Typography>
            <Typography variant="h3" fontWeight={"bold"}>{memAvailable}</Typography>
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item elevation={5} onClick={() => { sendGrpcCommand('volctrl', '+5') }}>
            <Typography variant="h4">Vol +</Typography>
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item elevation={5} onClick={() => { sendGrpcCommand('volctrl', '-5') }}>
            <Typography variant="h4">Vol -</Typography>
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item elevation={5} onClick={() => { sendGrpcCommand('playerctl', 'play-pause') }}>
            <Typography variant="h4">Play pause</Typography>
          </Item>
        </Grid>
      </Grid>
    );
  }
}

export default DisplayInfo;
