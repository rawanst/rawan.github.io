import './App.css'
import { useNavigate } from "react-router-dom";
import { melodrama } from './fontShare/melodrama/css/melodrama.css'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Header from './component/Header'
import Blog from './Pages/Blog'
import Portfolio from './Pages/Portfolio'
import Article from './Pages/Article'
import ComingSoon from './Pages/ComingSoon'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Footer from './component/Footer';

function App() {

  // const navigate = useNavigate(); 

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Article />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<ComingSoon />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
      {/* <div className='App-FirstPage'>
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
          onClick={() => navigate('home')}
        >
          Voir mon portfolio
        </button>
      </div> */}
    </>
  );
}

export default App;
