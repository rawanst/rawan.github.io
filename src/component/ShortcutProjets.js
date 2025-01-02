import React from 'react'
import {
  Typography,
} from "@mui/material"
import Grid from '@mui/material/Grid2'
import MyDivider from './MyDivider'
import CardSection from './CardSection'

const ShortcutProjets = () => {

  const list = [
    { 
      id: '1',
      name: 'Projet 1'
    },
    { 
      id: '2',
      name: 'Projet 2'
    },
    { 
      id: '3',
      name: 'Projet 3'
    },
    { 
      id: '4',
      name: 'Projet 4'
    },
    { 
      id: '5',
      name: 'Projet 5'
    },
  ]

  return(
    <CardSection
      title='Projets'
    >
      <Grid
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
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
              flexDirection: 'column',
              border: '2px solid #823ccbff',
              minWidth: '15vw', // 14rem pour le z fold // 15rem
              width: '21rem', // 21rem
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

export default ShortcutProjets;