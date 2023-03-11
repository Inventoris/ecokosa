import { useState } from 'react'
import './CookieBanner.css'

const CookieBanner = () => {
  const [isVisible, setVisible] = useState(true)

  const onAccept = () => {
    localStorage.setItem('dateOfNotification', new Date())
    setVisible(false)
  }

  return (
    <>
      {isVisible &&
        <div className="cookie-notification">
          <p className="cookie-notification__content">Для работы сайта мы используем куки 🍪</p>
          <button className="cookie-notification__button" onClick={onAccept}>Ок</button>
        </div>
      }
    </>
  )
}

export default CookieBanner
