const FrontPage = () => {

    return(
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          fontSize: 'calc(10px + 2vmin)',
          marginTop: '-8%',
          marginLeft: '1%',
          width: '98%',
          borderRadius: '0 0 1em 1em',
          backgroundColor: '#823ccbff',
          color: '#e8e3edff',
        }}

      >
        <h1 
        style={{
            fontFamily: "Melodrama-Bold", 
            fontWeight: '500',
            marginLeft: '1%',
            marginTop: '20%',
        }}
        >
          Développeuse Full-Stack
        </h1>
        <p 
          style={{
            fontFamily: "Melodrama-Light", 
            fontWeight: '300',
            marginLeft: '1%',
            marginTop: '-1.8rem',
            marginRight: '45%',
            marginBottom: '15%',
            textAlign: 'left',
            fontSize: 'x-large',
          }}
        >
          Passionné par la tech, je transforme les défis en solutions innovantes. 
          Découvrez mon parcours et mes réalisations.
        </p>
      </div>
    )
}

export default FrontPage;