import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1558486012-817176f84c6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    return (
        <div className='card-container'>
            <Card sx={{ width: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <div>
                            <h2>{info.city}</h2>
                            <p>Temperature = {info.temp}</p>
                            <p>Min-Temperature = {info.temp_min}</p>
                            <p>Max-Temperature = {info.temp_max}</p>
                            <p>Pressure = {info.pressure}</p>
                            <p>Humidity = {info.humidity}</p>
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}