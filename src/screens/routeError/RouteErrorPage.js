import { Link, useRouteError } from 'react-router-dom'

const RouteErrorPage = () => {
  const error = useRouteError()

  return (
    <div className="error-message">
      <h1>Упс 😢</h1>
      <p>Похоже, страничка не найдена.</p>
      <code>{error.statusText || error.message}</code>
      <p>Вы можете попробовать вернуться на <Link to="/">главную</Link>!</p>
    </div>
  )
}

export default RouteErrorPage
