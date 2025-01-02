import React from 'react'
import {
  Box,
  Container,
  Typography,
} from "@mui/material"
import Grid from '@mui/material/Grid2'
import MyDivider from './MyDivider'

const CardSection = ({title, children}) => {
 
  return(
    <Box
      m= '0'
      // my= '2%'
      p= '5vh'
      // bgcolor= '#823ccbff'
    >
      <Container
        maxWidth="lg"
        sx={{
          p: '5%',
          diplay: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          bgcolor: '#823ccbff',
          borderRadius: '20px'
        }}
      >
        <Grid container spacing={2}>
          <Typography
            variant= 'h3'
            sx={{
              position: 'relative',
              fontFamily: "Meloriac-Regular",
              fontSize: '2.8rem',
              color: '#b9cb3c',
              textShadow: '1.5px 1px white',
              wordWrap: 'break-word'
            }}
          >
            {title}
          </Typography>
          <MyDivider />

          {children}

        </Grid>
      </Container>
    </Box>
  )
}

export default CardSection;