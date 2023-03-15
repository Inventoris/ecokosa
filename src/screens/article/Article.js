import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'
import './Article.css'

const Article = ({ content }) => {
  return (
    <main className="main">
      {content &&
        <article className="main__article">
          <ReactMarkdown children={content} linkTarget={"_blank"} />
        </article>
      }
    </main>
  )
}

Article.propTypes = {
  content: PropTypes.string
}

export default Article
