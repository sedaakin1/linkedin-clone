import React from 'react';
import background from "../images/background.jpeg";
import profile from "../images/profile.png";
import { Link } from 'react-router-dom';


function Sidebar({userData}) {

  console.log(userData);
 
  return (
    <div
     style={{backgroundColor:"white", border:"1px solid #d6d6d6", width:"210px", height:"370px", borderRadius:"15px"
     }}>
        <img style={{height:"65px", width:"210px", borderTopRightRadius:"15px", borderTopLeftRadius:"15px"}} src={background}/>

        <div style={{textAlign:"center"}}>
          <img 
            src={userData._document?.data?.value.mapValue.fields.profile_image.stringValue ?? profile} 
            style={{width:"55px", borderRadius:"40px"}}
          />
          <h3 style={{position:"relative"}}>
            {userData._document?.data?.value.mapValue.fields.username.stringValue}
          </h3>
        </div>
        
        <h4 style={{textAlign:"center", color:"#6f6f6f"}}>
          {userData._document?.data?.value.mapValue.fields.designation.stringValue}
        </h4>

        <div style={{color:"#6f6f6f", borderTop:"1px solid #d6d6d6", paddingLeft:"10px"}}>
          <Link to="/connect" 
            state={{
              username:userData._document?.data?.value.mapValue.fields.username.stringValue, 
              designation:userData._document?.data?.value.mapValue.fields.designation.stringValue,
              profile_img:userData._document?.data?.value.mapValue.fields.profile_image.stringValue ?? profile
            }}>
            <h5 style={{fontWeight:"120"}}>Connections</h5>
          </Link>

          <Link to="/invite"
          state={{
              username:userData._document?.data?.value.mapValue.fields.username.stringValue, 
              designation:userData._document?.data?.value.mapValue.fields.designation.stringValue,
              profile_img:userData._document?.data?.value.mapValue.fields.profile_image.stringValue ?? profile
            }}>
          <h5 style={{fontWeight:"120"}}>Invitations</h5>
          </Link>
        </div>

    </div>
  )
}

export default Sidebar