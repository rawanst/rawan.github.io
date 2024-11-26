import FrontPage from '../component/FrontPage'
import Header from '../component/Header'
import APropos from '../component/APropos'
import Footer from '../component/Footer'
import ShortcutProjets from '../component/ShortcutProjets'
import ShortcutBlog from '../component/ShortcutBlog'

const Home = () => {
  return(
    <div
      style={{
        // marginTop: '-4%',
        margin: 0,        
      }}
    >
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
      <Footer />
    </div>
  )
}

export default Home