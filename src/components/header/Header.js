import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import pathToLogo from '../../images/logo.svg'
import pathToMenuLogo from '../../images/menu-open.svg'
import pathToCloseLogo from '../../images/menu-close.svg'
import './Header.css'

function Header() {
  useEffect(() => {
    const body = document.querySelector('#root')
    const header = document.querySelector('.header')
    const navItems = document.querySelectorAll('.header__navigation-list li')
    const menuOpenLogo = document.querySelector('.header__menu-open')
    const menuCloseLogo = document.querySelector('.header__menu-close')

    function headerSwitcher() {
      if (window.pageYOffset > 0) {
        header.classList.add('header_narrowed')
      } else {
        header.classList.remove('header_narrowed')
      }
    }

    function menuLogoSwitcher() {
      body.classList.toggle('menu-active')
    }

    function menuCleaner() {
      body.classList.remove('menu-active')
    }

    window.addEventListener('scroll', headerSwitcher)
    navItems.forEach(item => item.addEventListener('click', menuCleaner))
    menuOpenLogo.addEventListener('click', menuLogoSwitcher)
    menuCloseLogo.addEventListener('click', menuLogoSwitcher)

    return () => {
      window.removeEventListener('scroll', headerSwitcher)
      menuOpenLogo.removeEventListener('click', menuLogoSwitcher)
      menuCloseLogo.removeEventListener('click', menuLogoSwitcher)
      navItems.forEach(item => item.removeEventListener('click', menuCleaner))
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
      <img src={pathToMenuLogo} className="header__menu-open" alt="Открыть меню" />
      <img src={pathToCloseLogo} className="header__menu-close" alt="Закрыть меню" />
    </header>
  )
}

export default Header
