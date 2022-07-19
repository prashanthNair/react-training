import { Box, Grid } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box style={{display:"flex"}}>
        {/* <div>Logo</div>
        <div>For companies</div>
        <div>For companies</div>
        <div>For companies</div>
        <div>For companies</div> */}
        <Grid container>
            <Grid item xs={3}>Item1</Grid>
            <Grid item xs={6}>

                <Grid container display="flex" justifyContent="space-around">
                  <Grid item><Link to="/company">For Companies</Link></Grid>
                  <Grid item><Link to="/candidates">For Candidates</Link> </Grid>
                  <Grid item><Link to="/enablers">For Enablers</Link> </Grid>
                  <Grid item><Link to="/settlement">settlement</Link> </Grid>
                  <Grid item><Link to="/profile">Profile</Link> </Grid>
                </Grid>
                <Grid item>
                    Menu 2
                </Grid>
            </Grid>
            <Grid item xs={3}>Login</Grid>
        </Grid>
    </Box>
  )
}

export default Header
