import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import MisTurnos from './TurnosPaciente/MisTurnos';
import ReservarTurno from './TurnosPaciente/ReservarTurno';
import HistorialTurnos from './TurnosPaciente/HistorialTurnos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const StyledMenu = withStyles({
  paper: {
    border: '0px solid #000000',
    backgroundColor: '#940B1C00'
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: '#940B1C',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: '#fff',
      },
    },
    variant: 'outlined'
  },
}))(MenuItem);



export default function CustomizedMenus({data}) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    console.log(event.target);
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // for (const [key, value] of Object.entries(dataItem)) {

  // }
  function generateMenuItems(menuItems) {
    const links = [];
    console.log(links)
    menuItems.map((menuItem) => {
      links.push(
        <Link key={menuItem.link} to={menuItem.link} style={{color:'#940b1c'}}>
        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary= {menuItem.label}/>
        </StyledMenuItem>
        </Link>
      ) 
    })
    return links;
  }
  return (
      <div key = {data.title}>
        <Button  onClick={handleClick} variant="outlined" size="large" style= {{minWidth: '300px', fontWeight: 'bold'}}>{ data.title }</Button>
        <StyledMenu
        id= {data.title}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
  
        {generateMenuItems(data.menuItems)}
        </StyledMenu>
      </div>
  );
}