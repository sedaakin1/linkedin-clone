import { Avatar, Button, List, ListItem, ListItemText, Paper } from '@mui/material';
import { collection, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, database } from '../firebase/setup';
import { Link, useLocation } from 'react-router-dom';

function Network() {

    const location = useLocation()
    
    const [user,setUser] = useState([])

    const showRequest = async() =>{
        const requestRef = doc(database,"Users", `${auth.currentUser?.uid}`)
        const requestInRef = collection(requestRef,"RequestIn")
        try{
            const data = await getDocs(requestInRef)
            const filteredData = data.docs.map((doc)=>({
                ...doc.data(),
                id:doc.id
            }))
            setUser(filteredData)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        showRequest()
    },[user])

    return (
        <div style={{padding:"20px", backgroundColor:"#F6F7F3", height:"100vh"}}>
        {user.filter(user => user.status === "connected").map((eachUser)=>{
            
            return<Paper>
                    <List>
                        <ListItem>
                            <Avatar src={eachUser.profile_image}/>
                            <ListItemText primary={eachUser.username} secondary={eachUser.designation}/>
                            <Link to="/message" 
                            state={{
                                currentUserName:location.state.currentUserName,
                                currentProImg:location.state.currentProImg,
                                username:eachUser.username,
                                id:eachUser.id,
                                profile_image:eachUser.profile_image
                            }}>
                            <Button variant='outlined'>Message</Button>
                            </Link>
                        </ListItem>
                    </List>
            </Paper>
        })}
            
        </div>
      )
}

export default Network;