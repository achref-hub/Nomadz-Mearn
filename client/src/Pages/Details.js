import { useEffect,  useState } from 'react'
import {Typography, CardContent, Grid, TextField, Box} from '@material-ui/core';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useParams } from 'react-router';


export default function Details(){

    const [projectData,setProject]= useState('');
    const params = useParams()
    const updateLeave = async () =>{

        await axios.put(`http://localhost:3000/api/updateProject/${params.id}`,{})
        .then(res=>{
            // setNewVal(res.data)
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
        setTimeout(function(){
            NotificationManager.success('Leave Validated successfully', 'Success')
            /// refresh page :
            window.location.reload()

          }, 1000);
      };

          useEffect(()=>{
            axios
            .get("http://localhost:3000/api/getProject")
            .then(res=>{
                setProject(res.data.data);
            })
            .catch(err=>{
                console.log(err);
            })
        },[]);
    return(

    
<>

        <Typography variant='h3' align="center" color='primary'>
        Update Project
    </Typography>
    <Typography  variant='h6' align="center" color='primary' >
         Complete this form to update a Project
    </Typography>

    </> 
    );

}