import PropTypes from 'prop-types'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import CookieBannerControl from './components/cookie/СookieBannerControl'
import ErrorBoundary from './components/errorBoundary/ErrorBoundary'

const App = ({ screen }) => {
  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        {screen}
      </ErrorBoundary>
      <ErrorBoundary>
        <CookieBannerControl />
      </ErrorBoundary>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </>
  )
}

App.propTypes = {
  screen: PropTypes.element.isRequired
}

export default App
