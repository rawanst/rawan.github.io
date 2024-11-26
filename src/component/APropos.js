import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Divider,
  Chip,
} from "@mui/material"
import Grid from '@mui/material/Grid2'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const APropos = () => {
  const [isHover, setIsHover] = useState(false)

  const skills = [
    {id: 1, name: 'Programmation', list: ['React', 'C# .Net']},
    {id: 2, name: 'Base de donées', list: ['MSSMSQL']},
    {id: 3, name: 'Outils', list: ['Git', 'Fork', 'Postman']},
    {id: 4, name: 'Langue', list: ['Français Native', 'Anglais TOEIC B2']},
  ]

  return (
    <Box
      m= '0'
      p= '5vh'
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
          borderRadius: '20px',
        }}
      >
        <Grid container spacing={2}>
          <Grid>
            <Typography
              variant= 'h3'
              sx={{
                fontFamily: "Meloriac-Regular",
                color: '#b9cb3c',
                wordWrap: 'break-word'
              }}
              >
              A Propos
            </Typography>

            <Divider
              sx={{
                bgcolor:'#b9cb3c',
                width: '1',
                opacity: '1'
              }}
              />

            <Typography
              variant= 'p'
              sx={{
                fontFamily: "Melodrama-Light",
                fontWeight: '600',
                fontSize: 'x-lasrge',
                color: 'rgb(171, 155, 185)',
              }}
              >
              Développeuse web full-stack diplômée d’un <strong style={{fontFamily: "Melodrama-Bold"}}> Master </strong> en développement informatique,
              je suis passionnée par la conception de solutions innovantes. Mon expertise en <strong style={{fontFamily: "Melodrama-Bold"}}> React.js </strong>
              pour le front-end, et en <strong style={{fontFamily: "Melodrama-Bold"}}> C# .NET </strong> pour le back-end, me permet d’aborder des projets
              complexes avec efficacité. Dotée d’une forte capacité d’adaptation, je cherche à intégrer
              une équipe dynamique où je pourrai contribuer à des projets ambitieux tout en continuant à
              développer mes compétences techniques.
            </Typography>
          </Grid>
          
          <Grid
            size={{
              xs: 6,
              sm: 12,
              md: 12,
              lg: 12,
            }}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              // p: '1',
              gap: '20px',
              mt: '2vh',
              mb: '2vh',
            }}
          >
            {skills.map((skill) => (
              <Grid
                key={skill.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Typography
                  variant= 'h9'
                  sx={{
                    fontFamily: "Meloriac-Regular",
                    color: '#b9cb3c',
                    wordWrap: 'break-word'
                  }}
                >
                  {skill.name}
                </Typography>
                {skill.list.map((item) => (
                  <Typography
                    variant= 'p'
                    sx={{
                      fontFamily: "Melodrama-Light",
                      color: 'rgb(171, 155, 185)',
                      wordWrap: 'break-word',
                    }}
                  >
                    ¤ {item}
                  </Typography>
                ))}
              </Grid>
            ))}
          </Grid>

          <Grid
            size={{
              xs: 12,
              sm: 12,
              md: 12,
              lg: 12,
            }}
          >
            <Chip
              label='Curriculum vitae'
              icon={<NorthEastIcon style={{
                width: '15',
                color: 'rgb(171, 155, 185)',
                marginLeft: '9'
              }}/>}
              variant="outlined"
              size="large"
              sx={{
                width: '100%',
                bgcolor:'#c2cf69',
                fontFamily: "Melodrama",
                color: '#823ccbff',
                ':hover': {
                  color: '#e8e3edff'
                },
              }}
              onClick={
                () => {
                  window.open('../../CV.pdf')
              }}
            />
          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}

export default APropos;