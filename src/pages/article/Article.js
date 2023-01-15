import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import './Article.css'

function Article(props) {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(props.path)
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.log(error))
  })

  return (
    <>
      <Header />
        <article className="article">
          <ReactMarkdown children={content} />
        </article>
      <Footer />
    </>
  )
}

export default Article
