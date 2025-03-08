import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

 export default function InfoBox({info}){
    const INIT_URL=
    "https://cdn.pixabay.com/photo/2022/08/21/02/26/road-7400333_1280.jpg"
    
const HOT_URL="https://images.unsplash.com/photo-1553586635-60aba8bfda8b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
const COLD_URL="https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D ";
const RAIN_URL="https://media.istockphoto.com/id/503284599/photo/rainy-weather.webp?a=1&b=1&s=612x612&w=0&k=20&c=bPNkULHt-WSe1IfEM_QDPcwaVUhmzE6tWg9QTe9h_ps= ";


    return(
        <div className="InfoBox">

<div className='cardContainer'>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity> 80? RAIN_URL:info.temp>15? HOT_URL:COLD_URL}
        title="green iguana"
      /><div className='cardContentColor'>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {info.city}{
           info.humidity> 80? 
           <ThunderstormIcon/>
           :info.temp>15?
            <WbSunnyIcon/>
           :<AcUnitIcon/>
          } 
          
        </Typography>
        <Typography variant="body2"  color="text.secondary" component={"span"} >
        <p>
            Temperature={info.temp}&deg;C</p>
            
            <p>Humidity={info.humidity}</p>
            <p>Pressure={info.pressure}</p>
            <p>TempMax={info.tempMax}&deg;C</p>
            <p>TempMin={info.tempMin}&deg;C</p>
            
            <p> weather can be described as <i>{info.weather}</i> and fills like      {info.fellslike} &deg;C</p>
        
        </Typography>
      </CardContent>
      </div>
      
    </Card>
    </div>
        </div>
    )
}