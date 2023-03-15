import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'
import './Post.css'

const Post = ({ source, content }) => {
  return (
    <div className="post">
      {content &&
        <Link to={source} className="post__link">
          <ReactMarkdown children={content} allowElement={(element, index, parent) => {if (index <= 4) return true}} />
        </Link>
      }
    </div>
  )
}

Post.propTypes = {
  source: PropTypes.string,
  content: PropTypes.string
}

export default Post
