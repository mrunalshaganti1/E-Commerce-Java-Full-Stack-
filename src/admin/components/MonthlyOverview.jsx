import { DeviceTabletIcon } from '@heroicons/react/16/solid'
import { AccountCircle, TrendingUp } from '@mui/icons-material'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'


const salesData = [
    {
        stats: '247k',
        title: "Sales",
        color: "#E5D68A",
        icon: <TrendingUp sx={{fontSize: "1.75rem"}}/>
    },
    {
        stats: '24k',
        title: "Customers",
        color: "#22CB5C",
        icon: <AccountCircle sx={{fontSize: "1.75rem"}}/>
    },
    {
        stats: '2.4k',
        title: "Products",
        color: "#DE4839",
        icon: <DeviceTabletIcon sx={{fontSize: "1.75rem"}}/>
    },
    {
        stats: '47k',
        title: "Revenue",
        color: "#12B0E8",
        icon: <CurrencyExchangeIcon sx={{fontSize: "1.75rem"}}/>
    }
]

const renderStats = () => {
    return salesData.map((item, index) => (
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <Avatar variant='rounded' sx={{mr:3, width: 44, boxShadow: 3, color: "white", backgroundColor: `${item.color}`}}>
                    {item.icon}
                </Avatar>

                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <Typography variant='caption'>{item.title}</Typography>
                    <Typography variant='h6'>{item.stats}</Typography>
                </Box>
            </Box>
        </Grid>
    ))
}

const MonthlyOverview = () => {
  return (
    <div>
        <Card sx={{bgcolor: "#7a6668", color: "white"}}>
            <CardHeader title="Monthly Overview"
            action={
                    <IconButton size='small'> 
                        <MoreVertIcon/>
                    </IconButton>
                }
                subheader= {
                    <Typography variant='body2' >
                        <Box component="span" sx={{fontWeight: 600, mx:0.5}}>
                            Total 47.0% Growth
                        </Box>
                         this month
                    </Typography>
                }
                titleTypographyProps={{
                    sx:{mb: 2.5, lineHeight: '2rem !important', letterSpacing: '.15px !important',}
                }}
                />
                <CardContent sx={{pt: theme => `${theme.spacing(3
                    
                )} !important`}}>
                    <Grid container spacing={[5,0]}>
                        {renderStats()}
                    </Grid>
                </CardContent>
        </Card>
    </div>
  )
}

export default MonthlyOverview