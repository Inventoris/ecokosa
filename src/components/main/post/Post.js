import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import covers from '../../../guides/covers'
import { getRandomItem } from '../Main'
import './Post.css'

const Post = () => {
  const [cover, setCover]= useState()

  useEffect(() => {
    const articleTitles = Object.keys(covers)
    const title = getRandomItem(articleTitles)
    const cover = covers[title]

    import(`../../../guides/${title}/${cover.imageName}`)
      .then(path => setCover({
        ...cover,
        articleName: title,
        pathToImage: path.default
      }))
      .catch(error => console.error(`Ошибка в поиске пути к обложке статьи на главной: ${error}`))
  }, [])

  return (
    <>
      <div className="post">
        {cover &&
          <Link to={cover.articleName} className="post__link">
            <div className="post__image-wrapper">
              <img src={cover.pathToImage} className="post__image" alt={cover.imageAltText} />
            </div>
            <h2 className="post__title">{cover.articleTitle}</h2>
            <h3 className="post__subtitle">{cover.articleSubtitle}</h3>
          </Link>
        }
      </div>
    </>
  )
}

export default Post
