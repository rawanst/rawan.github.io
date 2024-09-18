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
    }
  ]

  return (
    <>
      <Header />
      <FrontPage title="Blog" content=""/>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          lexWrap: 'wrap',
          justifyContent: 'space-evenly',
          marginTop: '5%',
          marginBottom: '5%',
          marginLeft: '0.5%',
        }}
      >
        <Liste 
          id={articles[0].id}
          titre={articles[0].titre}
          date={articles[0].date}
          resume={articles[0].resume}
          contenu={articles[0].contenu}
        />
      </div>
      <Footer />
    </>
  )
}

export default Blog;