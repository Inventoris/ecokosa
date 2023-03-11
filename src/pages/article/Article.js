import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ErrorBoundary from '../../components/errorBoundary/ErrorBoundary'
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import covers from '../../guides/covers'
import './Article.css'

const Article = ({ title }) => {
  const [content, setContent] = useState()

  useEffect(() => {
    const articleParts = [
      import(`../../guides/${title}/${covers[title].imageName}`),
      import(`../../guides/${title}/${title}.md`)
    ]

    Promise.all(articleParts)
      .then(([image, text]) => {
        fetch(text.default)
          .then(response => response.text())
          .then(text => setContent({
            text: text,
            image: image.default,
            alt: covers[title].imageAltText
          }))
          .catch(error => console.error(`Ошибка формирования статейных частей: ${error}`))
      })
      .catch(error => console.error(`Ошибка поиска статейных частей: ${error}`))
  }, [title])

  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <main className="main">
          {content &&
            <article className="main__article">
              <div className="main__article-image">
                <img src={content.image} alt={content.alt} />
              </div>
              <ReactMarkdown children={content.text} linkTarget={"_blank"} />
            </article>
          }
          </main>
      </ErrorBoundary>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </>
  )
}

export default Article
