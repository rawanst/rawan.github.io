import React, {useEffect, useRef} from 'react'
import FrontPage from "../component/FrontPage"
import Header from "../component/Header"
import Liste from '../component/Liste'

const Portfolio = () => {
  const projets = [
    {
      id: '1',
      titre: 'Projet 1',
      date: "2024-09-18",
      resume: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur`,
      contenu: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid.`
    },
    {
      id: '2',
      titre: 'Projet 2',
      date: "2024-09-18",
      resume: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur`,
      contenu: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid.`
    },
  ]

  return (
    <div
      style={{
        marginTop: '-4%',
      }}
    >
      <Header />
      <FrontPage title="Portfolio" content=""/>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          lexWrap: 'wrap',
          justifyContent: 'space-evenly',
          marginTop: '4%',
          marginBottom: '4%',
          marginLeft: '0.5%',
        }}
      >
        {projets.map((projet, i) => {
          return (
            <Liste 
              item={projet}
              type='portfolio'
            />
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio;