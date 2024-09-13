import React, {useEffect, useRef} from 'react'
import Footer from "../component/Footer"
import FrontPage from "../component/FrontPage"
import Header from "../component/Header"

const Portfolio = () => {
  return (
    <>
      <Header />
      <FrontPage title="Portfolio" content=""/>
      <div
        style={{
          marginLeft: '2%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          lexWrap: 'wrap',
          justifyContent: 'space-evenly',
          marginTop: '20%',
          marginBottom: '30%',
        }}
      >
        <h1
          style={{
            fontFamily: "Melodrama-Bold",
            fontWeight: '500',
            fontSize: 'xxx-large',
            color: '#7a2acd',
            margin: '0',
          }}
        >
          Coming soon ...
        </h1>
      </div>
      <Footer />
    </>
  )
}

export default Portfolio;