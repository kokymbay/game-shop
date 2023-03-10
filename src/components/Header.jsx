
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Drawer, IconButton, ListItem } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
function Header() {

  const [openDrawer, setOpenDrawer] = React.useState(false)
  function handleOpenDrawer() {
    setOpenDrawer(true);
  }
  function closeDrawer() {
    setOpenDrawer(false); 
  }
  return (
    <header className='header'>
      <h3>Game Shop</h3>
      <div className="links">
        <Link to='/'>Home</Link>
        <Link to='Support'>Support</Link>
        <Link to='NotFound'>Contacts</Link>
      </div>
      <div className="basket-items">
        <IconButton onClick={handleOpenDrawer}>
          <ShoppingCartIcon sx={{ color: 'white' }} />
        </IconButton>
        <Drawer
          anchor='right'
          open = {openDrawer}
          onClose = {closeDrawer}
          
        >
          <ListItem sx={{width:'300px'}}>
            hello
          </ListItem> <br />
        </Drawer>
      </div>
      <div className="header-logo">
        <IconButton>
          <AccountCircleIcon sx={{ color: 'white' }} />
        </IconButton>
      </div>
    </header>
  )
}

export default Header