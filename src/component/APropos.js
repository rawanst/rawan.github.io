import { useState } from "react";

const APropos = () => {
  const [isHover, setIsHover] = useState(false)

  return(
    <div
      style={{
        marginLeft: '2%',
        paddingTop: '3%',
        paddingBottom: '3%',
        // paddingTop: '10%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
      }}
    >
      <div
        style={{
          maxWidth: '50rem',
          // marginBottom: '2%',
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
          A Propos
        </h1>
        <p
          style={{
            fontFamily: "Melodrama-Light",
            fontWeight: '600',
            fontSize: 'x-large',
            color: '#7a2acd',
            margin: '0'
          }}
        >
          Développeuse web full-stack diplômée d’un <strong style={{fontFamily: "Melodrama-Bold", fontSize: 'xx-large'}}> Master </strong> en développement informatique,
          je suis passionnée par la conception de solutions innovantes. Mon expertise en <strong style={{fontFamily: "Melodrama-Bold", fontSize: 'xx-large'}}> React.js </strong>
          pour le front-end, et en <strong style={{fontFamily: "Melodrama-Bold", fontSize: 'xx-large'}}> C# .NET </strong> pour le back-end, me permet d’aborder des projets
          complexes avec efficacité. Dotée d’une forte capacité d’adaptation, je cherche à intégrer
          une équipe dynamique où je pourrai contribuer à des projets ambitieux tout en continuant à
          développer mes compétences techniques.
        </p>
      </div>
      <a
        href='../../CV.pdf'
        target="_blank"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={{
          width:'17%',
          minWidth: '15em',
          height: '40%',
          minHeight: '20em',
          padding: '1%',
          
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src='../../CVimg.png'
          alt="Capture d'écran de mon CV"
          style={{
            width:'20%',
            minWidth: '15em',
            height: '40%',
            minHeight: '20em',
            position: 'relative',
          }}
        />
        <div
          style={{
            width:'12%',
            minWidth: '15em',
            height: '40%',
            minHeight: '20em',
            position: 'absolute',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',

            backgroundColor: 'rgba(0,0,0,0.6)',
            opacity: isHover ? '1' : '0',
            transition: '0.1s',
          }}
        >
          <img
          src='../../downloadbutton.png'
          alt="Capture d'écran de mon CV"
          style={{
            width:'36%',
            height: '28%',
            position: 'relative',
          }}
        />
        </div>
      </a>
    </div>
  )
}

export default APropos;