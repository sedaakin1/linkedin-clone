import React from 'react';
import profile from "../images/profile.png";
import { Card, CardContent, CardMedia, TextField, Typography } from '@mui/material';
import media from "../images/media.png";
import event from "../images/event.png";
import article from "../images/article.png";
import amazon from "../images/amazon.jpeg";

function Middle() {
  return (
    <div>
      <div style={{backgroundColor:"white", padding:"15px", borderRadius:"10px"}}>
        <img style={{width:"65px"}} src={profile}/>
        <TextField variant='outlined' label='Start a post' style={{width:"450px", marginLeft:"20px"}} InputProps={{sx:{borderRadius:150}}}/>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginLeft: "20px"}}>
          <img style={{width:"32px", marginRight:"20px"}} src={media}/>
          <img style={{width:"30px", marginRight:"20px"}} src={event}/>
          <img style={{width:"30px", marginRight:"20px"}} src={article}/>
        </div>
      </div>
      <div style={{paddingTop:"20px"}}>
        <Card>
          <CardContent>
          <div style={{display:"flex"}}>
          <img src={profile} style={{width:"40px"}}/>
            <div style={{marginLeft:"10px"}}>
            <Typography>Name</Typography>
            <Typography sx={{color:"#BFBFBF"}}>Designation</Typography>
            </div>
          </div>
          <h5>Description</h5> 
          </CardContent>
          <CardMedia
          component="img"
          height={350}
          image={amazon}
          >

          </CardMedia>
        </Card>
      </div>
    </div>
  )
}

export default Middle;