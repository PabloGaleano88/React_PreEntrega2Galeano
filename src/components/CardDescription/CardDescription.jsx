import * as React from 'react';
import './CardDescription.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Link} from 'react-router-dom'


const MultiActionAreaCard = ({ item }) => {
    return (
        <Card sx={{ maxWidth: 345, minHeight:470, marginBottom: 2 }}>
            <CardActionArea style={{ height: 'auto' }}>
                <CardMedia
                    component="img"
                    height="150"
                    image={item.header_image}
                    alt={item.name}
                />
                <div className='card_content'>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.short_description}
                    </Typography>
                </CardContent>
                </div>
            </CardActionArea>
            <CardActions className='card_actions'>
                <h5><b>{item.price_overview.final_formatted}</b></h5>
                <Button size="small" color="primary">
                    Comprar
                </Button>
            </CardActions>
        </Card>
    );
}

export default MultiActionAreaCard 