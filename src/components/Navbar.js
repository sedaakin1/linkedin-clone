import React from 'react';
import { Grid } from '@mui/material';
import linked from "../images/linked.png";
import lens from "../images/lens.png";
import home from "../images/home.png";
import message from "../images/message.png";
import network from "../images/network.png";
import profile from "../images/profile.png";
import { Link } from 'react-router-dom';

function Navbar({userData}) {
  console.log(userData)

  return (
    <div style={{padding:"10px", borderBottom:"1px solid #d6d6d6"}}>
    <Grid container>
      <Grid item xs={6}>
        <img style={{width:"35px", marginLeft:"80px"}} src={linked}/>
        <img style={{width:"25px", marginLeft:"20px"}} src={lens}/>
      </Grid>
      <Grid item xs={6}>
        <img style={{width:"30px", marginLeft:"20px"}} src={home} />
        <Link to="/network" state={{currentUserProImg:userData._document?.data?.value.mapValue.fields.profile_image.stringValue,
          currentUserName:userData._document?.data?.value.mapValue.fields.username.stringValue}}>
          <img style={{width:"30px", marginLeft:"20px"}} src={network} />
        </Link>
        <Link to="/chat">
          <img style={{width:"30px", marginLeft:"20px"}} src={message} />
        </Link>
        <img style={{width:"30px", marginLeft:"20px", borderRadius:"40px"}} 
        src={userData._document?.data?.value.mapValue.fields.profile_image.stringValue ?? profile}
        />
      </Grid>
    </Grid>
    </div>
  )
}

export default Navbar
