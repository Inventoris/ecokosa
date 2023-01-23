import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import './Article.css'

function Article(props) {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(props.source)
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(console.error())
  })

  return (
    <>
      <Header />
      <main className="content">
        <article className="main__article">
          <img src={props.cover.image} alt={props.cover.alt} />
          <ReactMarkdown children={content} linkTarget={"_blank"} />
        </article>
      </main>
      <Footer />
    </>
  )
}

export default Article
