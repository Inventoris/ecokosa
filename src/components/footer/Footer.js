import pathToCopyrightLogo from '../../images/copyright.svg'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_inner">
        <div className="footer__copyright-wrapper">
          <p className="footer__copyright-message">При копировании материалов указывайте первоисточник.</p>
          <img src={pathToCopyrightLogo} alt="Буква «C» внутри круга: знак копирайта" />
        </div>
        <nav className="footer__navigation">
          <ul className="footer__navigation-list">
            <li><a href="http://www.park-kosa.ru/" target="_blank" rel="noreferrer">Официальный сайт Куршской косы</a></li>
            <li><a href="https://github.com/Inventoris/ecokosa" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://github.com/Inventoris/ecokosa/blob/main/LICENSE" target="_blank" rel="noreferrer">Лицензии</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
