import * as React from 'react';

import Grid from '@mui/material/Grid';

interface Props { };

function ButtonGridContainer(props: React.PropsWithChildren<Props>) {
  return <Grid container direction="row" columnSpacing={4} rowSpacing={4} marginBottom={4}>
    {props.children}
  </Grid>;
}

export default ButtonGridContainer;
