import { useState, useEffect } from 'react'

export const getRandomItem = (items) => {
  return items[Math.floor(Math.random() * items.length)]
}

export const addFetchModule = (WrappedComponent) => { // HOC добавляет компонентам fetch-модуль, чтобы они могли получить контент из .md файлов
  return ({ source }) => {
    const [content, setContent] = useState()

    useEffect(() => {
      import(`../guides/${source}.md`)
        .then(path => {
          fetch(path.default)
            .then(response => response.text())
            .then(text => setContent(text))
            .catch(error => console.error(`Ошибка формирования markdown-разметки: ${error}`))
        })
        .catch(error => console.error(`Ошибка поиска файла статьи: ${error}`))
    }, [source])

    return (
      <WrappedComponent source={source} content={content} /> // Компонент получает данные для последующего рендера текста
    )
  }
}
