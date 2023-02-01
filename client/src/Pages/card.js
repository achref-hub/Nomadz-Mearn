import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { useState,useEffect } from 'react';
import { NotificationContainer, NotificationManager} from 'react-notifications';



const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );



export default function CardProject(props) {

    const { projectData, setProjectData }  = props
    const [loading, setloading] = useState(false);


    const handleDelete = async (id ,e ) =>{
        e.preventDefault();
        axios
        .delete(`http://localhost:3000/api/deleteProject/${id}`)
        .then(res => {
            console.log('deleted',res)
        }).catch(err=>{
            console.log(err);
        })
        window.location.reload()

      }

 
        
    // const [loading, setloading] = useState(false);
    // const [value,setValue]=useState('')

    
    // const handleDelete = async (id ,e ) =>{
    //     e.preventDefault();
    //     axios
    //     .delete(`http://localhost:5000/api/Operation/deleteLeave/${id}`)
    //     .then(res => {
    //         console.log('deleted',res)
    //     }).catch(err=>{
    //         console.log(err);
    //     })
   
    
    //   }
 



    return (
        <>
        <Grid container spacing={4} justifyContent='center' >
        <Grid item xs={6} sm={6} md={2} >
         <Card sx={{ minWidth: 275 }}>
      <CardContent >
        <Typography variant="h5" component="div">
        {props.request.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.request.startDate}   
         </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.request.endDate}
        </Typography>
        <Typography variant="body2">
        {props.request.description}
        </Typography>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button  color='primary' onClick={(e) =>
                                handleDelete(props.request._id,e )
                           
                              } >Delete  </Button>
                               <Button  color='primary'  onClick={()=> {window.location.href = `/Details/${props.request._id}`}}>Update  </Button>
    </CardActions>
       
    </Card>
    </Grid>
    </Grid>
                       
        </>
    );
        }
