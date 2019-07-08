import * as React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Input from '../../components/Input';

interface DateFormProps {}

const DateForm: React.SFC<DateFormProps> = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h1">Date</Typography>
      </Grid>
      <Grid item>
        <Input label="Pick the date" type="date" />
      </Grid>
    </Grid>
  );
};

export { DateForm };
