import React from 'react'
import {
  Button,
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element,
  window: PropTypes.func,
};

const Header = (props) => {

  const menu = [
    {
      id: 1,
      name: 'Projets',
      url: '/portfolio'
    },
    {
      id: 2,
      name: 'Blog',
      url: '/blog'
    },
  ]

  const navigate = useNavigate()

  return(
    <>
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            borderRadius: '0 0 1em 1em',
            backgroundColor: '#823ccbff',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
          }}
        >
          <Toolbar>
            <Button 
              size='large'
              onClick={() => { navigate('/') }}
              sx={{
                fontFamily: 'Melodrama-Light',
                fontWeight: 'bolder',
                color: '#b9cb3c',
                fontSize: '1.5rem',
                textTransform: 'lowercase',
                textShadow: '1px 0px white',
                ':hover': { 
                  color: '#e8e3edff', 
                  transitionProperty: 'none'
                }
              }}
            >
              rawanst
            </Button>
          </Toolbar>
          <Toolbar>
            {menu.map(item => 
              <Button
                key={item.id}
                size= 'large'
                onClick={() => { navigate(item.url) }}
                sx={{
                  color: '#b9cb3c',
                  fontFamily: 'Melodrama-Light',
                  fontWeight: 'bolder',
                  m: 0.25,
                  textShadow: '1px 0px white',
                  ':hover': { 
                    color: '#e8e3edff',
                  transitionProperty: 'none'
                  }
                }}
              >
                {item.name}
              </Button>)}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  )
}

export default Header;