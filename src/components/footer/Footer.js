import copyrightLogo from '../../images/copyright.svg'
import './footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__copyright-wrapper'>
        <p className='footer__copyright-message'>При копировании материалов указывайте первоисточник.</p>
        <img src={copyrightLogo} alt='Буква «C» внутри круга' />
      </div>
      <nav className="footer__navigation">
        <ul className="footer__navigation-list">
          <li><a href='https://thecode.media/' target='_blank'>Идея дизайна: журнал Код</a></li>
          <li><a href='http://www.park-kosa.ru/' target='_blank'>Сайт Куршской косы</a></li>
          <li><a href='https://github.com/Inventoris/ecokosa' target='_blank'>GitHub</a></li>
          <li><a href='https://github.com/Inventoris/ecokosa/blob/main/LICENSE' target='_blank'>Лицензии</a></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
