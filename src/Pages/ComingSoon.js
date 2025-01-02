const ComingSoon = () => {
  return(
    <>
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
          Coming Soon ...
        </h1>
        <a href='#/portfolio'>
          Retourner sur le portfolio
        </a>
      </div>
    </>
  )
}

export default ComingSoon;