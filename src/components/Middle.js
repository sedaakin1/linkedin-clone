import React, { useEffect, useRef, useState } from 'react';
import profile from "../images/profile.png";
import { Card, CardContent, CardMedia, TextField, Typography } from '@mui/material';
import media from "../images/media.png";
import event from "../images/event.png";
import article from "../images/article.png";
import amazon from "../images/amazon.jpeg";
import Post from './Post';
import { collection, doc, getDocs } from 'firebase/firestore';
import { auth, database } from '../firebase/setup';


function Middle({userData}) {

  const postRef = useRef(null)

  const [posts, setPosts] = useState([])

  
  const getPost = () =>{
    setTimeout(async()=>{
      const postDocument = doc(database,"Users",`${auth.currentUser?.uid}`)
      const postRef = collection(postDocument,"Posts")
    try{
      const data = await getDocs(postRef)
      const filteredData = data.docs.map((doc)=>({
        ...doc.data(),
        id:doc.id
      }))
      setPosts(filteredData)
    }catch(err){
      console.error(err)
    }
    },1000)
    
  }

  useEffect(()=>{
    getPost()
  },[])

 
  return (
    <div>
      <div style={{backgroundColor:"white", padding:"15px", borderRadius:"10px"}}>
        <img style={{width:"65px", borderRadius:"40px"}} 
          src={userData._document?.data?.value.mapValue.fields.profile_image.stringValue ?? profile}
        /> 
        <TextField 
          onClick={()=> postRef.current?.click()} 
          variant='outlined' label='Start a post' 
          style={{width:"450px", marginLeft:"20px"}} 
          InputProps={{sx:{borderRadius:150}}}/>
        <Post ref={postRef}/>

        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginLeft: "20px"}}>
          <img style={{width:"32px", marginRight:"20px"}} src={media}/>
          <img style={{width:"30px", marginRight:"20px"}} src={event}/>
          <img style={{width:"30px", marginRight:"20px"}} src={article}/>
        </div>
      </div>

      <div style={{paddingTop:"20px"}}>
      {posts.map((post)=>{

        return<Card sx={{mt:"10px"}}>
          <CardContent>
          <div style={{display:"flex"}}>
          <img src={post.profile_image ?? profile} style={{width:"50px", borderRadius:"40px"}}/>
            <div style={{marginLeft:"10px"}}>
            <Typography>{post.username}</Typography>
            <Typography sx={{color:"#BFBFBF"}}>{post.designation}</Typography>
            </div>
          </div>
          <h5>{post.textPost}</h5> 
          </CardContent>

          
          {post.photo && 
          <CardMedia
          component="img"
          height={350}
          image={amazon} />
          }
          
        </Card>   
      })}
        
      </div>
    </div>
  )
}

export default Middle;