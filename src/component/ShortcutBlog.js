import React from 'react'
import {
  Typography,
} from "@mui/material"
import Grid from '@mui/material/Grid2'
import CardSection from './CardSection'

const ShortcutBlog = () => {

  const list = [
    { 
      id: '1',
      name: 'Article 1'
    },
    { 
      id: '2',
      name: 'Article 2'
    },
    { 
      id: '3',
      name: 'Article 3'
    },
  ]

  return(
    <CardSection
      title='Blog'
    >
      <Grid
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1%',
        }}
      >
        {list.map((item) => (
          <Grid
            key={item.id}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              border: '2px solid #823ccbff',
              minWidth: '1vw',
              // width: '100%',
              p: 6,
              mt: '1%',
              bgcolor: 'white',
            }}
          >
            <Typography
              variant= 'h5'
              sx={{
              fontFamily: "Meloriac-Regular",
              color: '#b9cb3c',
              wordWrap: 'break-word'
              }}
            >
              {item.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </CardSection> 
  )
}

export default ShortcutBlog;