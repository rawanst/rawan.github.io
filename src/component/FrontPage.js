const FrontPage = ({title, content}) => {

    return(
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignContent: 'center',

          width: '98%',
          borderRadius: '0 0 1em 1em',
          marginTop: '-8%',
          marginLeft: '1%',
          paddingTop: '12%',
          paddingBottom: '8%',

          color: '#e8e3edff',
          fontSize: 'calc(10px + 2vmin)',
          backgroundColor: '#823ccbff',
        }}

      >
        <h1 
        style={{
            fontFamily: "Melodrama-Bold", 
            fontWeight: '500',
            fontSize: 'xxx-large',
            margin: '0',
            marginLeft: '1%',
        }}
        >
          {title}
        </h1>
        <p 
          style={{
            fontFamily: "Melodrama-Light", 
            fontWeight: '300',
            margin: '0',
            marginLeft: '1%',
            paddingRight: '45%',
            textAlign: 'left',
            fontSize: 'x-large',
          }}
        >
          {content}
        </p>
      </div>
    )
}

export default FrontPage;