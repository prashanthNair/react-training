import { Grid } from '@mui/material';
import * as React from 'react';
import CustomTextField from '../customtext';


export default function Contactinfo() {

  return (
    <div>
      <Grid container>
          <Grid item xs={4}><h3>Contact Info</h3></Grid>
          </Grid>
          <Grid container>
          <Grid item xs={6}><CustomTextField text="Contact name"></CustomTextField></Grid>
          <Grid item xs={6}><CustomTextField text="Contact number"></CustomTextField></Grid>
          </Grid>
          <Grid container>
          <Grid item xs={6}><CustomTextField text="Email Address"></CustomTextField></Grid>
          <Grid item xs={6}><CustomTextField text="Preffered Language"></CustomTextField></Grid>
          </Grid>
    </div>
  );
}
