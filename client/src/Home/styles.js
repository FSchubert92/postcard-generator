import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const CreateButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-self: center;
  height: 44px;
  width: 44px;
  padding: 3px;
  position: fixed;
  bottom: 9px;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: white;
  background-color: #18b839;
  text-decoration: none;
  font-size: 30px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 50%);
  border-radius: 50%;
`
export const Confirm = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 28px;
  font-weight: bold;
  color: white;
  align-items: center;
  justify-content: center;
  z-index: 3;
  position: absolute;
  background: #000000b0;
  height: 100vh;
  width: 100vw;
  button {
    margin: 10px;
    font-size: 20px;
    border: none;
    &.yes {
      background: red;
    }
  }
`
