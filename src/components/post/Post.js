import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import covers from '../../guides/covers'
import './Post.css'

function Post() {
  const [pathToImage, setPath]= useState('')
  const coverTitles = Object.keys(covers)
  const randomCover = coverTitles[Math.floor(Math.random() * coverTitles.length)]

  useEffect(() => {
    import(`../../guides/${randomCover}/${covers[randomCover].pathToImage}`)
    .then(path => setPath(path.default))
    .catch(console.error())
  })

  return (
    <Link to={covers[randomCover].pathToArticle} className="post">
      <div className="post__image-wrapper">
        <img src={pathToImage} className="post__image" />
      </div>
      <h2 className="post__title">{covers[randomCover].headerText}</h2>
    </Link>
  )
}

export default Post
