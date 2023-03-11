import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'
import CookieBanner from '../../components/cookie/CookieBanner'
import './Home.css'

const Home = () => {
  const isNotify = () => {
    return Boolean(localStorage.dateOfNotification)
  }

  return (
    <>
      <Header />
      <Main />
      {isNotify() ? null : <CookieBanner />}
      <Footer />
    </>
  )
}

export default Home
