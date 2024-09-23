import FrontPage from '../component/FrontPage'
import Header from '../component/Header'
import APropos from '../component/APropos'
import Footer from '../component/Footer'

const Home = () => {
  return(
    <div
      style={{
        marginTop: '-4%',
      }}
    >
      <Header />
      <FrontPage
        title='Développeuse Full-Stack'
        content='Passionné par la tech, je transforme les défis en solutions innovantes. 
        Découvrez mon parcours et mes réalisations.'
      />
      <APropos />
      <Footer/>
    </div>
  )
}

export default Home