import React from 'react';
import Sidebar from './Sidebar';
import Middle from './Middle';
import Rightbar from './Rightbar';
import { Grid } from '@mui/material';

function Home() {
  return (
    <div style={{backgroundColor:"#f3f2f0", height:"100vh",padding:"80px"}}>
    <Grid container spacing={4}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={6}>
          <Middle />
        </Grid>
        <Grid item xs={3}>
          <Rightbar />
        </Grid>
    </Grid>
    </div>
  )
}

export default Home