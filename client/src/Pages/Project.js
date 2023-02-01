import {Typography, Card, CardContent, Grid, TextField, Box} from '@material-ui/core';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import ms from 'ms';
import moment from 'moment';
import {NotificationContainer, NotificationManager} from 'react-notifications';


export default function Project(){
 const [projectData,setProjectData] = useState()
const [dateStart,setDateStart] = useState('');
const [dateEnd,setDateEnd] = useState('');
const [Title,setTitle] = useState('');
const [Description,setDescription] = useState('');
const [loading, setLoading] = useState(false);


const [minDate,SetminDate] =useState(null) ;
const [maxDate, SetmaxDate]= useState(null);
useEffect(()=>{
  const minsec = ms('1d')
  const min_date = new Date() ;
  const max_date = new Date(+ new Date(dateStart) + minsec);

  SetminDate(moment(min_date).format('YYYY-MM-DD'));
  SetmaxDate(moment(max_date).format('YYYY-MM-DD'));

})

function DaysBetween(FirstDate,SecondDate){
    return (SecondDate - FirstDate ) /(1000 * 3600 * 24 );
  }
  const nbOfdays = DaysBetween (new Date (dateStart),new Date (dateEnd));

const handleSend =  (e) => {
    e.preventDefault();

    // if ( Title.length >= 0) {
    //     var Title = Title;
    // } else {
    //   NotificationManager.error('Please Check your data','Error')
    //   return;
    //     // var usersNotif = []
    // }


    //   if(dateStart.trim().length === 0 || dateEnd.trim().length === 0){
    //     NotificationManager.error('Please Check your date','Error')
    //     return;
    //   }
    // setTitle('');
    // setDescription('');
    // setDateStart('')
    // setDateEnd('');
    
    setLoading(true);

 axios
 .post("http://localhost:3000/api/addNewProject",
    {
        "title" : Title,
        "description": Description,
        "startDate" : dateStart,
        "endDate" : dateEnd,
    })
    .then(res=>{
        console.log(res);
    })
    setTimeout(function(){
        setLoading(false);
          NotificationManager.success('Leave added successfully', 'Success')
          window.location.reload();
          window.location.href = '/CardValid';
        }, 1000);
      
      
    
}
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
                                    <Typography  variant='h3' align="center" color='primary' >
                                        Project
                                    </Typography>
                                    <Typography  variant='h6' align="center" color='primary' >
                                    Complete this form to added a Project
                                    </Typography>
                                    <Card style={{maxWidth:500, margin:'0 auto', padding:'30px 10px'}}>
                                        <CardContent>
                                            <form onSubmit={handleSend}>
                                            <Grid container spacing={1}>
                                                <Grid xs={12} sm={6} item >
                                                        <TextField label="title" placeholder='title' variant='outlined'  fullWidth onChange={e=>setTitle(e.target.value)} />
                                                </Grid>
                                              
                                                <Grid xs={12} sm={6} item >
                                                        <TextField label="description"  placeholder='description' variant='outlined' fullWidth onChange={e=>setDescription(e.target.value)} />
                                                </Grid>
                                                <Grid xs={12} sm={6} item >
                                                <TextField
                                                id="dateStart"
                                                label="Start Date"
                                                type="date"
                                                InputProps={{inputProps: { min: minDate } }}
                                                sx={{ width: 220 }}
                                                onChange={e=>setDateStart(e.target.value)}
                                                InputLabelProps={{
                                                shrink: true,}} />   
                                                        </Grid>
                                                <Grid xs={12} sm={6} item >
                                                <TextField
                                                id="dateEnd"
                                                label="End Date"
                                                type="date"
                                                InputProps={{inputProps: { min: maxDate } }}
                                                sx={{ width: 220 }}
                                                onChange={e=>setDateEnd(e.target.value)}
                                                InputLabelProps={{
                                                shrink: true,}} />  
                                                </Grid>
                                                <Grid xs={12}  item  >
                                                {!loading &&(
                                                    <Button color='primary' variant="contained" fullWidth onClick={handleSend}>add Project</Button>
                                                    )}
                                                    {loading &&(
                                                        <Button type="submit"  color="indigo" ripple="light" disabled>
                                                        <i className="fas fa-spinner fa-spin"></i>{" "}
                                                        Added...
                                                    </Button>
                                                    )}
                                                    </Grid>
                                                <br></br>
                                                <hr></hr>
                                                <Grid item xs={12}>
                                                        <Typography color='primary' variant='h6' align="center" >
                                                            {nbOfdays} Day's of {Title} Project.
                                                        </Typography>
                                                </Grid> 
                                                <div className="flex flex-wrap justify-center flex-grow-3 gap-8 mt-16 mb-12">

                                                    {
                                                        projectData && projectData.length !== 0 ?
                                                        projectData.map(request => {
                                                                return(
                                                                    <Card request={request}  projectData={projectData} setProjectData={setProjectData}  />
                                                                )
                                                                
                                                            })

                                                        :  
                                                        ''
                                                    }
                            
                                           </div>                        
                                            </Grid>
                                            </form>
                                        </CardContent>
                                    </Card>


         </>
              
    );
}
