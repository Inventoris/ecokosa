import PropTypes from 'prop-types'
import Facts from '../../components/facts/Facts'
import './Home.css'

const Home = ({ post }) => {
  return (
    <main className="main">
      <section className="main__intro">
        <h2 className="main__intro-marquee">Ветер Балтики гуляет на просторе, Ветки сосен – как натянутые струны, Гонит волны растревоженное море, Тихо дремлют зачарованные дюны. Куршская коса, Николай Балуев, 2012 год. Ветер Балтики гуляет на просторе, Ветки сосен – как натянутые струны, Гонит волны растревоженное море, Тихо дремлют зачарованные дюны. Куршская коса, Николай Балуев, 2012 год. Ветер Балтики гуляет на просторе, Ветки сосен – как натянутые струны, Гонит волны растревоженное море, Тихо дремлют зачарованные дюны. Куршская коса, Николай Балуев, 2012 год. Ветер Балтики гуляет на просторе, Ветки сосен – как натянутые струны, Гонит волны растревоженное море, Тихо дремлют зачарованные дюны. Куршская коса, Николай Балуев, 2012 год.</h2>
        <div className="main__intro-knowledge">
          {post}
          <Facts />
        </div>
      </section>
      <section className="main__map">
        <h2>Карта с достопримечательностями Куршской косы</h2>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A249ee6e414b40df0f4d3c52af49cf49c222b350f2179c0b554c458cd56ac370f&amp;source=constructor" width="1000" height="500" frameBorder="0" title="Карта достопримечательностей"></iframe>
      </section>
      <section className="main__mission">
        <h2 className="main__mission-header">Миссия</h2>
        <p className="main__mission-message">ЭкоКоса — это некоммерческий open-source проект, призванный помочь туристам правильно и интересно посетить национальный парк «Куршская коса». Где гулять, сколько стоит посещение и другую информацию вы можете узнать в статьях навигации. Приятного путешествия!</p>
      </section>
    </main>
  )
}

Home.propTypes = {
  post: PropTypes.element.isRequired
}

export default Home
