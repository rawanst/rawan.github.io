import Footer from "../component/Footer";
import FrontPage from "../component/FrontPage";
import Header from "../component/Header";

const Blog = () => {
  return (
    <>
      <Header />
      <FrontPage title="Blog" content=""/>
      <div
        style={{
          marginLeft: '2%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          lexWrap: 'wrap',
          justifyContent: 'space-evenly',
          marginTop: '20%',
          marginBottom: '30%',
        }}
      >
        <h1
          style={{
            fontFamily: "Melodrama-Bold",
            fontWeight: '500',
            fontSize: 'xxx-large',
            color: '#7a2acd',
            margin: '0',
          }}
        >
          Coming soon ...
        </h1>
      </div>
      <Footer />
    </>
  )
}

export default Blog;