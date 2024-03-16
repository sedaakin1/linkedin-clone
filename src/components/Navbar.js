import React from 'react';
import { Grid } from '@mui/material';
import linked from "../images/linked.png";
import lens from "../images/lens.png";
import home from "../images/home.png";
import message from "../images/message.png";
import network from "../images/network.png";
import profile from "../images/profile.png";

function Navbar() {
  return (
    <div style={{padding:"10px", borderBottom:"1px solid #d6d6d6"}}>
      <Grid container>
      <Grid item xs={6}>
        <img style={{width:"35px", marginLeft:"80px"}} src={linked}/>
        <img style={{width:"25px", marginLeft:"20px"}} src={lens}/>
      </Grid>
      <Grid item xs={6}>
        <img style={{width:"30px", marginLeft:"20px"}} src={home} />
        <img style={{width:"30px", marginLeft:"20px"}} src={network} />
        <img style={{width:"30px", marginLeft:"20px"}} src={message} />
        <img style={{width:"30px", marginLeft:"20px"}} src={profile} />
      </Grid>
      </Grid>
    </div>
  )
}

export default Navbar