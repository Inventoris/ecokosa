import React, { useReducer, useMemo } from 'react'
import CookieBanner from './CookieBanner'

const reducer = (state, action) => {
  switch (action.type) {
    case 'accept':
      return {
        isAccepted: true,
        isDetailVisible: false,
        explanation: null
      }
    case 'detail':
      return {
        isAccepted: state.isAccepted,
        isDetailVisible: !state.isDetailVisible,
        explanation: 'Куки — это небольшие кусочки данных, которые хранятся на вашем компьютере. Они безопасны и нужны только для удобства интернета!'
      }
    default:
      throw new Error('Нет совпадений типа события в управлении куки-баннером')
  }
}

const initialState = {
  isAccepted: false,
  isDetailVisible: false,
  explanation: null
}

const CookieBannerControl = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const isNotify = useMemo(
    () => {
      return Boolean(localStorage.notify)
    },
    []
  )

  return (
    <>
      {state.isDetailVisible ?
        <div className="about-cookie cookie-notification">
          <p className="about-cookie__content">{state.explanation}</p>
        </div>
        : null
      }
      {isNotify || state.isAccepted ? null : <CookieBanner dispatch={dispatch} />}
    </>
  )
}

export default CookieBannerControl