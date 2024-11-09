const Footer = () => {

  return(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

        width: '98%',
        marginLeft: '1%',
        marginBottom: '-5%',
        borderRadius: '1em 1em 0 0',

        color: '#e8e3edff',
        fontSize: 'calc(10px + 2vmin)',
        backgroundColor: '#823ccbff',
        fontFamily: "Melodrama-Bold",
      }}

    >
      <div
        style={{
          width: '99%',

          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
          <h3
            style={{
              fontFamily: "Melodrama-Bold",
              marginTop: '0',
              marginBottom: '-1%',
            }}
          >
              Voir
          </h3>
          <a
            href='#/blog'
            style={{
              fontSize: '65%',
              color: '#e8e3edff',
              backgroundColor: 'transparent',
              marginLeft: '1%',
            }}
          >
            Blog
          </a>
          <a
            href='#/portfolio'
            style={{
              fontSize: '65%',
              color: '#e8e3edff',
              backgroundColor: 'transparent',
              marginLeft: '1.5%',
            }}
          >
            Portfolio
          </a>
      </div>
      <div
        style={{
          width: '99%',

          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
          <h3
            style={{
              fontFamily: "Melodrama-Bold",
              marginTop: '0',
              marginBottom: '1%',
              marginRight: '1%',
            }}
          >
              Liens
          </h3>
          <a
            href="mailto:rawantabaja12@gmail.com"
            style={{
              fontSize: '65%',
              color: '#e8e3edff',
              backgroundColor: 'transparent',
            }}
          >
            rawantabaja12@gmail.com
          </a>
          <a
            href='https://www.linkedin.com/in/rawan-t-5ba1bb170/' // put the right link
            target="_blank"
            style={{
              fontSize: '65%',
              color: '#e8e3edff',
              backgroundColor: 'transparent',
              marginLeft: '1.5%',
            }}
          >
            LinkedIn
          </a>
          <a
            href='https://github.com/rawanst/rawanst.github.io/tree/master' // put the right link
            target="_blank"
            style={{
              fontSize: '65%',
              color: '#e8e3edff',
              backgroundColor: 'transparent',
              marginLeft: '1.5%',
            }}
          >
            GitHub
          </a>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <hr style={{ width:'99%'}} />
        <p
          style={{
            fontSize: '50%',
            textAlign: 'center',
            marginTop: '-0.3rem'
          }}
        >
          Copyright © 2024 Rawan Tabaja
        </p>
      </div>
    </div>
  )
}

export default Footer;