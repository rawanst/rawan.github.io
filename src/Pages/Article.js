import { useParams } from 'react-router-dom';
import Footer from '../component/Footer'
import FrontPage from '../component/FrontPage'
import Header from '../component/Header'

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

const Article = () => {

  const { id } = useParams();
  // will work whith the api
  // const article = articles.find(article => article.id === Number(id));
  
  let article = null
  articles.forEach(a => {
    if(a.id === id){
      article = a
    }
  });

  return (
    <div
      style={{
        marginTop: '-4%',
      }}
    >
      <Header />
      <FrontPage 
        title={article.titre}
        content={article.resume}
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
        <p>{article.date}</p>
        <p>{article.contenu}</p>
      </div>
      <Footer />
    </div>
  )
}

export default Article;