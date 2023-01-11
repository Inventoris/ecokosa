import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import './header.css'

function Header() {
  useEffect(() => {
    const header = document.querySelector('.header')

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 0) {
        header.classList.add('header_narrowed')
      } else {
        header.classList.remove('header_narrowed')
      }
    })
  })

  return (
    <header className='header'>
      <div className='header__logo-wrapper'>
        <img src={logo} className='header__logo' alt='Тёмно-синие деревья, между стволами следы лап животных' />
        <div className='header__site-name'>
          <p>ЭкоКоса</p>
          <p>Гайд по Куршской косе</p>
        </div>
      </div>
      <nav className="header__navigation">
        <ul className="header__navigation__list">
          <li><Link to='/about'>О косе</Link></li>
          <li><Link to='/sights'>Где гулять</Link></li>
          <li><Link to='/forbidden-places'>Куда нельзя</Link></li>
          <li><Link to='/prices'>Сколько стоит</Link></li>
        </ul>
    </nav>
    </header>
   )
}

export default Header
