import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import pathToLogo from '../../images/logo.svg'
import pathToMenuLogo from '../../images/menu-open.svg'
import pathToCloseLogo from '../../images/menu-close.svg'
import './Header.css'

const isMobile = () => {
  return window.matchMedia('(max-width: 1024px)').matches
}

const Header = () => {
  const header = React.createRef()

  const navItems = [
    {
      id: 1,
      text: 'О косе',
      path: '/about'
    },
    {
      id: 2,
      text: 'Где гулять',
      path: '/sights'
    },
    {
      id: 3,
      text: 'Куда нельзя',
      path: '/restrictions'
    },
    {
      id: 4,
      text: 'Сколько стоит',
      path: '/prices'
    }
  ]

  const headerSwitcher = () => {
    if (window.pageYOffset > 0) {
      header.current.classList.add('header_narrowed')
    } else {
      header.current.classList.remove('header_narrowed')
    }
  }

  const menuLogoSwitcher = () => {
    header.current.classList.toggle('menu-active')
  }

  const menuCleaner = () => {
    header.current.classList.remove('menu-active')
  }

  const navList = navItems.map(item =>
    <li key={item.id}>
      <Link to={item.path} onClick={menuCleaner}>{item.text}</Link>
    </li>
  )

  useEffect(() => {
    if (isMobile()) {
      return
    }

    window.addEventListener('scroll', headerSwitcher)

    return () => {
      window.removeEventListener('scroll', headerSwitcher)
    }
  })

  return (
    <header className={isMobile() ? "header header_narrowed" : "header"} ref={header}>
      <div className="header__inner">
        <div className="header__logo-wrapper">
          <Link to="/" className="header__logo">
            <img src={pathToLogo} loading="lazy" alt="Абстрактный рисунок двух песчаных дюн" />
          </Link>
          <p className="header__tagline">ЭкоКоса / гайд по Куршской косе</p>
        </div>
        <nav className="header__navigation">
          <ul className="header__navigation-list">{navList}</ul>
        </nav>
        {isMobile() ?
          <>
            <img src={pathToMenuLogo} onTouchStart={menuLogoSwitcher} className="header__menu-open" alt="Открыть меню" />
            <img src={pathToCloseLogo} onTouchStart={menuLogoSwitcher} className="header__menu-close" alt="Закрыть меню" />
          </>
          : null
        }
      </div>
    </header>
  )
}

export default Header
