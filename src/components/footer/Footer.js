import { useMemo } from 'react'
import './Footer.css'

const Footer = () => {
  const contacts = useMemo(
    () => {
      const contactsItems = [
        {
          id: 1,
          path: 'http://www.park-kosa.ru/',
          text: 'Официальный сайт Куршской косы'
        },
        {
          id: 2,
          path: 'https://github.com/Inventoris/ecokosa',
          text: 'GitHub'
        },
        {
          id: 3,
          path: 'https://github.com/Inventoris/ecokosa/blob/main/LICENSE',
          text: 'Лицензии'
        }
      ]

      return contactsItems.map(contact =>
        <li key={contact.id}>
          <a href={contact.path} target="_blank" rel="noreferrer">{contact.text}</a>
        </li>
      )
    },
    []
  )

  return (
    <footer className="footer">
      <div className="footer_inner">
        <div className="footer__copyright-wrapper">
          <p className="footer__copyright-message">При копировании материалов указывайте первоисточник.</p>
          <svg className="footer__copyright-logo" height="40" width="40">
            <path d="M16.583 25.833h6.834q.291 0 .479-.208.187-.208.187-.542v-2.416h-1.416v1.75h-5.334v-8.834h5.334v1.75h1.416v-2.416q0-.334-.187-.542-.188-.208-.479-.208h-6.834q-.333 0-.5.229-.166.229-.166.521v10.166q0 .334.166.542.167.208.5.208ZM20 35q-3.083 0-5.813-1.188-2.729-1.187-4.77-3.229-2.042-2.041-3.229-4.75Q5 23.125 5 20t1.188-5.854q1.187-2.729 3.229-4.75 2.041-2.021 4.75-3.208Q16.875 5 20 5t5.854 1.188q2.729 1.187 4.75 3.208t3.208 4.75Q35 16.875 35 20q0 3.083-1.188 5.812-1.187 2.73-3.208 4.771-2.021 2.042-4.75 3.229Q23.125 35 20 35Zm0-1.417q5.667 0 9.625-3.958T33.583 20q0-5.667-3.958-9.625T20 6.417q-5.667 0-9.625 3.958T6.417 20q0 5.667 3.958 9.625T20 33.583ZM20 20Z"/>
          </svg>
        </div>
        <nav className="footer__contacts">
          <ul className="footer__contacts-list">{contacts}</ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
