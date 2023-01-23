import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import pathToLogo from '../../images/logo.svg'
import './Header.css'

function Header() {
  useEffect(() => {
    const header = document.querySelector('.header')

    function headerSwitcher() {
      if (window.pageYOffset > 0) {
        header.classList.add('header_narrowed')
      } else {
        header.classList.remove('header_narrowed')
      }
    }

    window.addEventListener('scroll', headerSwitcher)

    return () => {
      window.removeEventListener('scroll', headerSwitcher)
    }
  })

  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <Link to="/">
          <img src={pathToLogo} className="header__logo" alt="Тёмно-синие деревья, между стволами следы лап животных" />
        </Link>
        <div className="header__site-name">
          <p className="site-title">ЭкоКоса</p>
          <p className="site-subtitle">Гайд по Куршской косе</p>
        </div>
      </div>
      <nav className="header__navigation">
        <ul className="header__navigation-list">
          <li><Link to="/about">О косе</Link></li>
          <li><Link to="/sights">Где гулять</Link></li>
          <li><Link to="/restrictions">Куда нельзя</Link></li>
          <li><Link to="/prices">Сколько стоит</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
