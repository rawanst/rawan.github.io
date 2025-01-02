import './App.css'
import { useNavigate } from "react-router-dom"
import { melodrama } from './fontShare/melodrama/css/melodrama.css'
import { meloriac } from './fontShare/meloriac/css/meloriac.css'
import FrontPage from './component/FrontPage'
import Header from './component/Header'
import APropos from './component/APropos'
import Footer from './component/Footer'
import ShortcutProjets from './component/ShortcutProjets'
import ShortcutBlog from './component/ShortcutBlog'

function App() {

  const navigate = useNavigate(); 

  return (
    <div
      style={{
        // marginTop: '-4%',
        margin: 0,        
      }}
    >
      {/* <BackgroundParticles /> */}
      <Header />
      <FrontPage
        title='Rawan Tabaja'
        titleDeux='Développeuse Full-Stack'
        content='Passionné par la tech, je transforme les défis en solutions innovantes. 
        Découvrez mon parcours et mes réalisations.'
        isHomePage={1}
        links={[
          {
            key: 1,
            name: 'LinkedIn',
            url :"https://www.linkedin.com/in/rawan-t-5ba1bb170/"
          },
          {
            id: 2,
            name: 'GitHub',
            url: "https://github.com/rawanst",
          },
          {
            id: 3,
            name: 'rawantabaja12@gmail.com',
            url:"mailto:rawantabaja12@gmail.com?cc=&subject=Hello world !&body=Bonjour Rawan, ",
          },
        ]}
      />
      <APropos />
      <ShortcutProjets />
      <ShortcutBlog />
      <Footer />
    </div>
  );
}

export default App;
