import styled from 'styled-components'

const MainContainer = styled.div`
  height: 90vh;
  padding-left: ${props => props.sidebar ? '260px' : '0'};
  transition: 350ms;
`

export default MainContainer