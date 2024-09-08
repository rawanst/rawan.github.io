const APropos = () => {
  return(
    <div
      style={{
        marginLeft: '1%',
        paddingBottom: '10%',
        paddingTop: '15%',
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
        }}
      >
        <h1
          style={{
            fontFamily: "Melodrama-Bold",
            // fontWeight: '500',
            fontSize: 'xxx-large',
            color: '#7a2acd',
          }}
        >
          A Propos
        </h1>
        <p
          style={{
            fontFamily: "Melodrama-Light",
            color: '#7a2acd',
            fontWeight: '600',
            fontSize: 'x-large',
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

      <img
        src='../../CVimg.png'
        alt="Capture d'écran de mon CV"
        style={{
          width:'20%',
          minWidth: '15em'
        }}
      />
    </div>
  )
}

export default APropos;