import React, { useState } from 'react';
import { Grid, TextField, Button} from '@mui/material';
import linkedin from "../images/linkedin.png";
import developer from "../images/developer.svg";
import { signInWithPopup } from 'firebase/auth';
import { auth, database, googleProvider } from '../firebase/setup';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {

  const [username, setUsername] = useState("");

  const addUser = async()=> {
    const userRef = doc(database,"Users",auth.currentUser?.uid)
    try{
      await setDoc(userRef,{
        username:username,
        email:auth.currentUser?.email  
      })
    }catch(err){
      console.error(err)
    }
  }

  const signInwithGoogle = async() => {
    !username && toast.warning("Please enter username")
    try{
      username && await signInWithPopup(auth, googleProvider)
      username && addUser()
    }catch(err){
      console.error(err)
    }
  }

  console.log(auth)


  return (
    <div>
        <Grid container>
        <Grid item xs={6} sx={{paddingLeft:"80px", paddingTop:"15px"}}>
           <ToastContainer autoClose={2000} position='top-right'/>
           <img style={{width:"130px"}} src={linkedin} />
           <div>
           <h2 
           style={{fontWeight:"100", fontSize:"60px", color:"#B24020"}}>
           Welcome to your professional community!
           </h2>
           <label style={{color: "grey"}}>Enter Username</label>
           <br />
            <TextField onChange={(e)=> setUsername(e.target.value)}
            variant="outlined" label="Username" sx={{width:"400px", mt:"5px"}}               
            />
            <TextField onChange={(e)=> setUsername(e.target.value)}
            variant="outlined" label="Designation" sx={{width:"400px", mt:"5px"}}               
            />
            <br />
            <Button onClick={signInwithGoogle}
            size="large" variant="contained" 
            sx={{width:"400px",borderRadius:"50px", mt:"25px", height:"50px"}}>
            Sign In
            </Button>
           </div>
        </Grid>
        <Grid item xs={6}>
            <img style={{width: "700px"}} src={developer} />
        </Grid>
        </Grid>
    </div>
  )
}

export default Signin;