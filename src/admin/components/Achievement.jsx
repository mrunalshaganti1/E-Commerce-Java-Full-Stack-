import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'


const TriangleImg = styled("img")({
    right:0,
    bottom:0,
    height:170,
    position: "absolute"
})

const TrophyImg = styled("img")({
    right:36,
    bottom:20,
    height:98,
    position: "absolute"
})

const Achievement = () => {
  return (
    <Card sx={{position: "relative", bgcolor: "#7a6668", color: "white"}}>
        <CardContent>
            <div className='flex flex-col items-start'>
                <Typography variant='h6' sx={{letterSpacing: ".25px"}}>
                    Shop With Clothes!!
                </Typography>
                <Typography variant='body2'>Congratulations</Typography>
                <Typography variant='h5' sx={{my:3.1}}>967.0k</Typography>

                <Button size='small' variant='contained'>View Sales</Button>
            </div>
            

            <TriangleImg src=''></TriangleImg>
            <TrophyImg src='https://media.istockphoto.com/id/1168757141/vector/gold-trophy-with-the-name-plate-of-the-winner-of-the-competition.jpg?s=612x612&w=0&k=20&c=ljsP4p0yuJnh4f5jE2VwXfjs96CC0x4zj8CHUoMo39E=' 
             sx={{height:"80px"}}></TrophyImg>
        </CardContent>
    </Card>
  )
}

export default Achievement