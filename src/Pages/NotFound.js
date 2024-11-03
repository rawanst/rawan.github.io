const NotFound = () => {
  return(
   <div
     style={{
        position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',

          backgroundColor: '#823ccbff',
          color: '#e8e3edff',
          fontFamily: "Melodrama-Bold", 
          fontWeight: '500',
     }}
   >
    <h1>
      Oups ...
    </h1>
    <p style={{margin: '0'}}>Erreur 404</p>
    <p style={{marginTop: '0'}}>Cette page n'existe pas</p>
    <a href='/'>
      Retourner sur le site
    </a>
   </div>   
  )
}

export default NotFound;