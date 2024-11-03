import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import FrontPage from '../component/FrontPage'
import Header from '../component/Header'
import articlesContent from '../aticlesContent'

const Article = () => {

  const { id } = useParams();
  // will work whith the api
  // const article = articles.find(article => article.id === Number(id));
  
  let article = null
  articlesContent.forEach(a => {
    if(a.id === id){
      article = a
    }
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
      }}
    >
      <Header />
      <FrontPage 
        title={article.titre}
        content={article.resume}
      />
      <div
        style={{
          width: '97%',
          marginLeft: '2%',
          marginTop: '3%',
          marginBottom: '3%',

          color: '#59288a',
          fontFamily: "Melodrama", 
        }}
      >
        <ReactMarkdown>
          {article.contenu}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default Article;