import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  background: ${props => props.theme.primary};
`
class App extends React.Component {
  render() {
    return <Main>Hello World!</Main>
  }
}

export default App
