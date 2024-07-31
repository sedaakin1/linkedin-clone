import { TextField, Button, ListItem, Paper, List } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { addDoc, collection, doc, getDocs } from 'firebase/firestore'
import { auth, database } from '../firebase/setup'
import { useLocation } from 'react-router-dom'

function Message() {

    const sendMessage = async() => {
        try{

        }catch(err){
            console.error(err)
        }
        await addDoc ()
    }

    return (
        <div style={{padding: "30px"}}>
            <div>
                <TextField variant='outlined' label="Type here" size="small"/>
                <Button>Send</Button>
            </div>
        </div>
    )
}
export default Message