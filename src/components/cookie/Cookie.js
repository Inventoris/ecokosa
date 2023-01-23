import { useEffect } from "react"
import './Cookie.css'

function Cookie() {
  useEffect(() => {
    const dateOfNotification = localStorage.dateOfNotification
    const cookieNotification = document.querySelector('.cookie-notification')
    const cookieAgreeButton = document.querySelector('.cookie-notification__button')

    if (!dateOfNotification) {
      cookieNotification.classList.replace('notification_hidden', 'notification_visible')

      cookieAgreeButton.addEventListener('click', () => {
        localStorage.setItem('dateOfNotification', new Date())
        cookieNotification.classList.replace('notification_visible', 'notification_hidden')
      })
    }
  })

  return (
    <div className="cookie-notification notification_hidden">
      <p className="cookie-notification__content">Для работы сайта мы используем куки 🍪</p>
      <button className="cookie-notification__button">Ок</button>
    </div>
  )
}

export default Cookie
