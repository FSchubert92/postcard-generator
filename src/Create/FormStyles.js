import React, { useState } from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const FormGrid = styled.form`
  display: grid;
  grid-template-rows: repeat(7, auto);
  margin: 20px;
  grid-gap: 50px;
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
    border: 2px solid #ddd;
    padding: 10px;
    margin: 10px 0;
    width: 90%;
  }

  input[type='file'] {
    padding: 0;
    width: 315px;
  }

  button {
    background: ${p => (p.checkForEmptyFields ? '#18B839' : '#333')};
    color: ${p => (p.checkForEmptyFields ? 'white' : '#333')};
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 50%);
    border-radius: 50%;
    height: 44px;
    width: 44px;
  }

  .input-summary {
    height: 100px;
  }
`

export const BackButton = styled(NavLink)`
  background-color: crimson;
  color: white;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  text-decoration: none;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-self: center;
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
  border: 2px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  width: 90%;
  font-size: 1em;
`
