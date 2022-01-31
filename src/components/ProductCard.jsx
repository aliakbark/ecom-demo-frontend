import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ProductCard({ product }) {
    const { title, desc } = product;
    return (
        <Card variant='outlined' sx={{ m: 1 }}>
            <CardContent>
                <Typography
                    gutterBottom
                    variant='h4'
                    component='div'
                    color='primary'
                >
                    {title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' endIcon={<ShoppingCartIcon />}>
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}
