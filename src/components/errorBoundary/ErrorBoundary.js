import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-message">
          <h1>Ой, какой-то баг 🐞</h1>
          <p>Владелец обязательно разберётся. Здесь должен был быть компонент страницы, но пока побудет кот: </p>
          <pre>^ↀᴥↀ^</pre>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
