import React from 'react'
import { Button, IconButton } from '@mui/material'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';


function ItemsBlock({obj}) {
    return (
            <div className='items'>
                <div className="card-img">
                    <img src={obj.image} />
                </div>
                <div className="card-content">
                    <h3>{obj.name}</h3>
                    <p>Price: {obj.price} ТГ </p>


                    <div className="cards-actions">
                        <Button variant='contained' color='error' size='small' >Buy</Button>
                        <Button size='small' color='error' variant='outlined' sx={{ ml: 2 }}>info</Button>
                        <IconButton sx={{ ml: 2 }}>
                            <AddShoppingCartOutlinedIcon color='success' />
                        </IconButton>
                    </div>
                </div>
            </div>
    )
}

export default ItemsBlock