import Footer from '../component/Footer'
import FrontPage from '../component/FrontPage'
import Header from '../component/Header'
import Liste from '../component/Liste'

const Blog = () => {

  const articles = [
    {
      id: '1',
      titre: 'Un titre 1',
      date: "2024-09-18",
      resume: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur`,
      contenu: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid.`
    },
    {
      id: '2',
      titre: 'Un titre 2',
      date: "2024-09-18",
      resume: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur`,
      contenu: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid.`
    },
    {
      id: '3',
      titre: 'Un titre 3',
      date: "2024-09-18",
      resume: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur`,
      contenu: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid.`
    }
  ]

  

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
        {articles.map((article, i) => {
          return (
            <Liste 
              key={article.id}
              id={article.id}
              titre={article.titre}
              date={article.date}
              resume={article.resume}
              contenu={article.contenu}
            />
          )
        })}
        {/* <Liste 
          id={articles[0].id}
          titre={articles[0].titre}
          date={articles[0].date}
          resume={articles[0].resume}
          contenu={articles[0].contenu}
        /> */}
      </div>
      <Footer />
    </div>
  )
}

export default Blog;