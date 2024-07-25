import { Box, Button, Card, CardActions, CardContent, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllAnnouncements } from '../API/Anouncments'
import { getAllQuizesAPI } from '../API/Quizes';


function Quizes() {

    const[allQuizes,setAllQuizes]=useState([]);

  useEffect(()=>{
      async function getQuizes(){
        setAllQuizes(await getAllQuizesAPI())}

        getQuizes();
      },[])

      const Announ = (props:any) => {
        return(
            <Box display='flex' justifyContent='start' alignItems='center' flexDirection='row' columnGap='1vw' >
        <Card sx={{
         width: 300,
          bgcolor: 'rgba(0, 0, 0, 0.09)', // Semi-transparent white for glass effect
          backdropFilter: 'blur(10px)', // Blur effect
          borderRadius: 2, // Rounded corners
          padding: 2, // Padding inside the Card
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
        }}
      >
        <CardContent>
          <Typography sx={{ mb: 3 }} variant="h5" component="div">
            {props.quiz.title}
          </Typography>
          <Typography display='flex' flexDirection='row' sx={{ mb: 1.5 }} color="text.secondary">
           <Typography width='65px'>Course: </Typography>   <Typography> {props.quiz.course}</Typography>
          </Typography>
          <Typography  display='flex' flexDirection='row' sx={{ mb: 1.5 }} color="text.secondary">
          <Typography width='65px'> Topic: </Typography> <Typography> {props.quiz.topic}</Typography> 
          </Typography>
          <Typography display='flex' flexDirection='row' sx={{ mb: 1.5 }} color="text.secondary">
          <Typography width='65px'> Date:</Typography> <Typography>{props.quiz.date}</Typography> 
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" sx={{left:'30%'}}>Start {props.quiz.title} </Button>
        </CardActions>
      </Card>

            </Box>
        )
      }


  return (

    
         <Box borderRadius='20px'  display='flex' flexDirection='column' rowGap='2vh' padding='10px' sx={{overflowY:'auto' ,maxHeight:'300px'}}>

        <Typography variant='h4' sx={{fontFamily:'serif'}}  >Whats Due..?</Typography>

              {allQuizes.map((quiz: any)=>
                <Announ quiz={quiz} key={quiz.id} />
                )}       
        </Box>
  )
}

export default Quizes