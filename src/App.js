import './App.css';
import { melodrama } from './fontShare/melodrama/css/melodrama.css'

function App() {
  return (
    <div className="App">
      <h1 style={{fontFamily: "Melodrama-Light", fontWeight: '500'}}>
        Rawan Tabaja <strong style={{fontFamily: "Melodrama-bold"}}>Portfolio</strong>
      </h1>
      <button
        className="button"
        onClick={
          () => {
            window.open('https://www.linkedin.com/in/rawan-t-5ba1bb170/', '_blank');
           }}
      >
        Ouvrir mon profil LinkedIn
      </button>
      <button
        className="button"
        style={{
          marginTop: '1rem'
        }}
      >
        Voir mon portfolio
      </button>
    </div>
  );
}

export default App;
