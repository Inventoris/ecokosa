import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'
import CookieBanner from '../../components/cookie/CookieBanner'
import ErrorBoundary from '../../components/errorBoundary/ErrorBoundary'
import './Home.css'

const Home = () => {
  const isNotify = () => {
    return Boolean(localStorage.dateOfNotification)
  }

  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
      <ErrorBoundary>
        {isNotify() ? null : <CookieBanner />}
        <Footer />
      </ErrorBoundary>
    </>
  )
}

export default Home
