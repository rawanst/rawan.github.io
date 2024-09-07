import './App.css';
import { melodrama } from './fontShare/melodrama/css/melodrama.css'
import { useState } from 'react';

function App() {
  const [show, SetShow] = useState(false);
  
  return (
    <div className="App">
      {show ? 
        (
          <h1 style={{fontFamily: "Melodrama-Light", fontWeight: '500'}}>
            Coming soon ...
          </h1>
        ) : 
        (
          <>
            <h1 style={{fontFamily: "Melodrama-Light", fontWeight: '500'}}>
              Rawan Tabaja <strong style={{fontFamily: "Melodrama-bold"}}>Portfolio</strong>
            </h1>
            <button
            className="button"
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
              className="button"
              style={{
                marginTop: '1rem'
              }}
              onClick={() => SetShow(true)}
            >
                Voir mon portfolio
            </button>
          </>
        )
      }
    </div>
  );
}

export default App;
