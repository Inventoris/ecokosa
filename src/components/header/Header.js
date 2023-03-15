import React, { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import pathToLogo from '../../icons/logo.svg'
import './Header.css'

const Header = () => {
  const isMobile = useMemo(
    () => {
      return window.matchMedia('(max-width: 1024px)').matches
    },
    []
  )

  const header = React.createRef()

  const headerSwitcher = () => {
    if (!header.current) {
      return
    }

    if (window.pageYOffset > 0) {
      header.current.classList.add('header_narrowed')
    } else {
      header.current.classList.remove('header_narrowed')
    }
  }

  const menuLogoSwitcher = () => {
    header.current.classList.toggle('menu-active')
  }

  const navList = useMemo(
    () => {
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

      return navItems.map(item =>
        <li key={item.id}>
          <Link to={item.path}>{item.text}</Link>
        </li>
      )
    },
    []
  )

  useEffect(() => {
    if (isMobile) {
      return
    }

    window.addEventListener('scroll', headerSwitcher)

    return () => {
      window.removeEventListener('scroll', headerSwitcher)
    }
  })

  return (
    <header className={isMobile ? "header header_narrowed" : "header"} ref={header}>
      <div className="header__inner">
        <div className="header__logo-wrapper">
          <Link to="/" className="header__logo">
            <img src={pathToLogo} loading="lazy" alt="Абстрактный рисунок двух песчаных дюн" />
          </Link>
          <p className="header__tagline">ЭкоКоса / гайд по Куршской косе</p>
        </div>
        <nav className="header__navigation">
          <ul className="header__navigation-list" onClick={isMobile ? menuLogoSwitcher : null}>{navList}</ul>
        </nav>
        {isMobile ?
          <>
            <svg onTouchStart={menuLogoSwitcher} className="header__menu-open" height="48" width="48">
              <path d="M7 34.55V33h34v1.55Zm0-9.8v-1.5h34v1.5ZM7 15v-1.55h34V15Z" />
            </svg>
            <svg onTouchStart={menuLogoSwitcher} className="header__menu-close" height="48" width="48">
              <path d="m12.65 36.45-1.1-1.1L22.9 24 11.55 12.65l1.1-1.1L24 22.9l11.35-11.35 1.1 1.1L25.1 24l11.35 11.35-1.1 1.1L24 25.1Z" />
            </svg>
          </>
          : null
        }
      </div>
    </header>
  )
}

export default Header
