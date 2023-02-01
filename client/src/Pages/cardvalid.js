import axios from 'axios';
import {Typography, CardContent, Grid, TextField, Box} from '@material-ui/core';
import { useEffect, useState } from 'react';
import Card from './card';



export default function CardValid(){

    const [projectData,setProjectData] = useState()


    useEffect(()=>{
        axios
        .get("http://localhost:3000/api/getProject")
        .then(res=>{
            setProjectData(res.data.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[]);

    return(
        <>
        <Typography variant='h3' align="center" color='primary'>
            Liste of Projects
        </Typography>
        <Typography  variant='h6' align="center" color='primary' >
             Complete this form to delete a Project
        </Typography>
        {
            projectData && projectData.length !== 0 ?
            projectData.map(request => {
                    return(
                        <Card request={request}  projectData={projectData} setProjectData={setProjectData}  />
                    )
                    
                })
        
            :  
            <Typography color="error" align='center'>
                You have no Project
            </Typography>
        }
        </>
    );

}