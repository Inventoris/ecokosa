import { useCallback } from 'react'
import './CookieBanner.css'

const CookieBanner = ({ dispatch }) => {
  const onAccept = useCallback(
    () => {
      localStorage.setItem('notify', new Date())
      dispatch({type: 'accept'})
    },
    [dispatch]
  )

  const onDetail = useCallback(
    (event) => {
      event.target.textContent = event.target.textContent === '?' ? '¿' : '?'
      dispatch({type: 'detail'})
    },
    [dispatch]
  )

  return (
    <div className="cookie-notification">
      <p className="cookie-notification__content">Для работы сайта мы используем куки 🍪</p>
      <button className="cookie-notification__button" onClick={onAccept}>Ок</button>
      <button className="detail-button" onClick={onDetail}>?</button>
    </div>
  )
}

export default CookieBanner
