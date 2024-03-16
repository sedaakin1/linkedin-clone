import React from 'react';
import background from "../images/background.jpeg";
import profile from "../images/profile.png";


function Sidebar() {
  return (
    <div
     style={{backgroundColor:"white", border:"1px solid #d6d6d6", width:"210px", height:"370px", borderRadius:"15px"
     }}>
        <img style={{height:"65px", width:"210px", borderTopRightRadius:"15px", borderTopLeftRadius:"15px"}} src={background}/>

        <div style={{position:"relative", left:"37%"}}>
          <img src={profile} style={{width:"55px"}}/>
          <h3>Full Name</h3>
        </div>
        
        <h4 style={{position:"relative", left:"28%", color:"#6f6f6f"}}>Designation</h4>
        <div style={{color:"#6f6f6f", borderTop:"1px solid #d6d6d6", paddingLeft:"10px"}}>
          <h5 style={{fontWeight:"120"}}>Profile viewers</h5>
          <h5 style={{fontWeight:"120"}}>Post impressions</h5>
        </div>
    </div>
  )
}

export default Sidebar