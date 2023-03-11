import { Link } from 'react-router-dom'
import { useRouteError } from 'react-router-dom/dist'
import './RouteErrorPage.css'

const RouteErrorPage = () => {
  const error = useRouteError()

  return (
    <div className="error-message">
      <h1>Упс 😢</h1>
      <p>Возникла какая-то ошибка...</p>
      <p>Компьютер говорит так: «{error.statusText || error.message}», но это моему создателю, а вы можете перейти на <Link to="/">главную</Link>!</p>
    </div>
  )
}

export default RouteErrorPage
