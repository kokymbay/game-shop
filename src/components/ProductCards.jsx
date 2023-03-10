
import React from 'react'

import { Button, IconButton } from '@mui/material'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ItemsBlock from './ItemsBlock/ItemsBlock';
import Skeleton from './Skeleton';





function ProductCards({ items }) {

    const [isLoader, setIsLoader] = React.useState(true); 
    React.useEffect(() => {
        fetch('https://64075e8877c1a905a0f6f3e0.mockapi.io/items')
          .then((response) => {
            return response.json();
          })
          .then((arr) => {
            setItems(arr);
            setIsLoader(false);
          })
      }, []);

    return (
        <div className='Nav'>
            <h3>All Games</h3>
            <div className="product-cards">
                {
                    isLoader ? [...new Array(6)].map((_,index)=>(<Skeleton key={index}/>)):
                    items.map(obj=>(
                        <ItemsBlock obj={obj}/>
                    ))
                    
                }
            </div>
        </div>


    )
}

export default ProductCards