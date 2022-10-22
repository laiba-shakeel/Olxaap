import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles';

import React from 'react'

const NavbarSec = () => {
    const Item = styled(Paper)(({ theme }) => ({
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width:'10%',
        // marginTop: '10px',
        // height:'40px',
        fontSize: '18px',
        padding: '5px 5px',
        margin: '10px',
        fontWeight: 'bold',
        border: 'none',
      }));
      
  return (
    <div>
        <Box sx={{
            height: '5vh'
        }} >
        <Stack direction="row" spacing={3} sx={{
        justifyContent:'center',
        // textAlign:'center',
        alignItems:'center'
    }}>
        <Item>Home</Item>
        <Item>About us</Item>
        <Item>Portfolio</Item>
        <Item>Contact us</Item>
        <Item>Portfolio</Item>
      </Stack>
      </Box>
    </div>
  )
}

export default NavbarSec
