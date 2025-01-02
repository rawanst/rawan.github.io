import React from 'react'
import {
  Box,
  Container,
  Typography,
  Divider,
  Chip
} from "@mui/material"
import Grid from '@mui/material/Grid2'

const FrontPage = ({title, titleDeux, content, isHomePage, links}) => {

  return(
    <Box
      height= '90vh'
      bgcolor= '#823ccbff'
      mb='6%'
    >
      <Container
        sx={{
          height: '90vh',
          diplay: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <Grid container spacing={2}>
          <Grid 
            size={{
              xs: 12,
              sm: 12,
              md: 7,
              lg: 7,
            }}
          >
            <Typography
              variant= 'h2'
              sx={{
                fontFamily: "Meloriac-Regular",
                color: '#b9cb3c',
                textShadow: '1.8px 0px white',
                wordWrap: 'break-word'
              }}
            >
              {title}
            </Typography>
            
            {titleDeux && 
              <Typography
              variant= 'h2'
              sx={{
                fontFamily: 'Melodrama-Light', 
                color: '#b9cb3c',
                wordWrap: 'break-word'
              }}
              >
                {titleDeux}
              </Typography>
            }

            <Divider sx={{bgcolor:'#c2cf69', opacity: '0.4'}}/>
            <Typography 
              variant= 'h5'
              sx={{
                fontFamily: "Melodrama-Light", 
                color: '#c2cf69',
                wordWrap: 'break-word'
              }}
            >
              {content}
            </Typography>

            {isHomePage && links && links.map(link => 
              <Chip 
                key={link.id}
                label={link.name} 
                variant="outlined" 
                sx={{
                  m: 0.5,
                  bgcolor:'#c2cf69',
                  fontFamily: "Melodrama", 
                  color: '#823ccbff',
                  ':hover': { 
                    color: '#e8e3edff'
                  },
                }}
                onClick={
                  () => {
                  window.open(link.url, '_blank')
                }}
              />
            )}
          </Grid>
        </Grid>
        

      </Container>
    </Box>
  )
}

export default FrontPage;