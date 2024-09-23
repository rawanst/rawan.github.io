import Header from "./Header";

const ComingSoon = () => {
  return(
    <>
      <Header />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,

          display: 'flex',
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
      </div>
    </>
  )
}

export default ComingSoon;