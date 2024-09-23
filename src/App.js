import './App.css'
import { useNavigate } from "react-router-dom";
import { melodrama } from './fontShare/melodrama/css/melodrama.css'

function App() {

  const navigate = useNavigate(); 

  return (
    <>
      <div className='App-FirstPage'>
        <h1 style={{fontFamily: "Melodrama-Light", fontWeight: '500'}}>
          Rawan Tabaja <strong style={{fontFamily: "Melodrama-bold"}}>Portfolio</strong>
        </h1>
        <button
          className="Button-FirstPage"
          onClick={
            () => {
              window.open('https://www.linkedin.com/in/rawan-t-5ba1bb170/', '_blank');
          }}
        >
          Ouvrir mon profil LinkedIn
        </button>
        <button
          className="Button-FirstPage"
          style={{
            marginTop: '1rem'
          }}
          onClick={() => navigate('/home')}
        >
          Voir mon portfolio
        </button>
      </div>
    </>
  );
}

export default App;
