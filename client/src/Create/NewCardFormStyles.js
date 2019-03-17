import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const FormGrid = styled.form`
  display: grid;
  grid-template-rows: repeat(7, auto);
  grid-gap: 50px;
  margin: 20px;
  overflow-y: scroll;
  padding: 0 5px;

  div {
    padding: 5px;
    box-shadow: ${p =>
      p.checkForEmptyFields
        ? '2px 1px 13px 2px #13a513'
        : '2px 1px 12px 0px rgba(0, 0, 0, 10%)'};
  }

  input,
  textarea {
    width: 90%;
    border: 2px solid #ddd;
    margin: 10px 0;
    padding: 10px;
  }

  input[type='file'] {
    width: 315px;
    padding: 0;
  }

  button {
    height: 44px;
    width: 44px;
    background: ${p => (p.checkForEmptyFields ? '#18B839' : '#333')};
    color: ${p => (p.checkForEmptyFields ? 'white' : '#333')};
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 50%);
    border-radius: 50%;
  }

  .input-summary {
    height: 100px;
  }
`

export const BackButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-self: center;
  height: 44px;
  width: 44px;
  color: white;
  background-color: crimson;
  border-radius: 50%;
  font-size: 30px;
  text-decoration: none;
  bottom: 9px;
  left: 27px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 50%);
  padding: 3px;
`

export const ButtonWrapper = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 10px;
  box-shadow: 0;
`

export const ErrorMessage = styled.p`
  color: crimson;
`

export const Message = styled.p`
  color: #333;
`

export const DropDownMenu = styled.select`
  width: 90%;
  margin: 10px 0;
  padding: 10px;
  font-size: 1em;
  border: 2px solid #ddd;
`
