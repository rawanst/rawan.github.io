import Footer from '../component/Footer'
import FrontPage from '../component/FrontPage'
import Header from '../component/Header'
import Liste from '../component/Liste'
import articlesContent from '../aticlesContent'

const Blog = () => {

  return (
    <div
      style={{
        marginTop: '-4%',
      }}
    >
      <Header />
      <FrontPage 
        title="Blog" 
        content='Passionné par la tech, je transforme les défis en solutions innovantes. 
          Découvrez mon parcours et mes réalisations.'
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          lexWrap: 'wrap',
          justifyContent: 'space-evenly',
          marginTop: '4%',
          marginBottom: '4%',
          marginLeft: '0.5%',
        }}
      >
        {articlesContent.map((article, i) => {
          return (
            <Liste 
              item={article}
              type='blog'
            />
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Blog;