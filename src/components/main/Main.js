import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Main.css'

function Main() {
  // const facts = [
  //   "1",
  //   "2",
  //   "3",
  //   "4",
  //   "5",
  //   "6",
  //   "7",
  //   "8",
  //   "9",
  //   "10"
  // ]

  // useEffect(() => {
  //   const fact = document.querySelector(".fact")
  //   const refreshIcon = document.querySelector(".refresh-icon")

  //   refreshIcon.addEventListener("click", () => {
  //     fact.textContent = `${facts[Math.floor(Math.random() * facts.length)]}`
  //   })
  // })

  return (
    <main className="main">
      <section className="main__intro">
        <h2 className="main__intro-marquee">Ветер Балтики гуляет на просторе, Ветки сосен – как натянутые струны, Гонит волны растревоженное море, Тихо дремлют зачарованные дюны. Куршская коса, Николай Балуев, 2012 год. Ветер Балтики гуляет на просторе, Ветки сосен – как натянутые струны, Гонит волны растревоженное море, Тихо дремлют зачарованные дюны. Куршская коса, Николай Балуев, 2012 год. Ветер Балтики гуляет на просторе, Ветки сосен – как натянутые струны, Гонит волны растревоженное море, Тихо дремлют зачарованные дюны. Куршская коса, Николай Балуев, 2012 год. Ветер Балтики гуляет на просторе, Ветки сосен – как натянутые струны, Гонит волны растревоженное море, Тихо дремлют зачарованные дюны. Куршская коса, Николай Балуев, 2012 год.</h2>
        <div className="main__intro-knowledge">
          <Link to="about" className="main__random-article">
            <img />
            <h2></h2>
          </Link>
          <div className="main__facts">
            <h2 className="main__facts-header">Интересные факты</h2>
            <p className="main__fact-content">Куршская коса очень тонкая</p>
          </div>
        </div>
      </section>
      <section className="main__mission">
        <h2 className="main__mission-header">Миссия</h2>
        <p className="main__mission-message">ЭкоКоса — это некоммерческий open-source проект с четырьмя гайдами, призванный помочь туристам правильно и интересно посетить Куршскую косу.</p>
      </section>
    </main>
  )
}

export default Main
