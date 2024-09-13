import './App.css'
import { melodrama } from './fontShare/melodrama/css/melodrama.css'
import { useState } from 'react'
import FrontPage from './component/FrontPage'
import Header from './component/Header'
import APropos from './component/APropos'
import Footer from './component/Footer'

function App() {
  const [show, SetShow] = useState(false);
  
  return (
    <>
      {show && 
        (
          <>
            <Header />
            <FrontPage
              title='Développeuse Full-Stack'
              content='Passionné par la tech, je transforme les défis en solutions innovantes. 
                Découvrez mon parcours et mes réalisations.'
            />
            <APropos />
            <Footer/>
          </>
        )}
        {!show && (
          <div className='App-FirstPage'>
            <h1 style={{fontFamily: "Melodrama-Light", fontWeight: '500'}}>
              Rawan Tabaja <strong style={{fontFamily: "Melodrama-bold"}}>Portfolio</strong>
            </h1>
            <button
            className="Button-FirstPage"
              onClick={
                () => {
                  SetShow(true)
                  console.log(show)
                  window.open('https://www.linkedin.com/in/rawan-t-5ba1bb170/', '_blank');
                }
              }
            >
              Ouvrir mon profil LinkedIn
            </button>
            <button
              className="Button-FirstPage"
              style={{
                marginTop: '1rem'
              }}
              onClick={() => SetShow(true)}
            >
                Voir mon portfolio
            </button>
          </div>

        )}
    </>
  );
}

export default App;
