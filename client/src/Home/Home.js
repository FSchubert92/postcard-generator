import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Card from '../Card/Card'
import CardContainer from '../Card/components/CardContainer'
import styled from 'styled-components'
import dayjs from 'dayjs'
import NoCardsToShow from './NoCardsToShow'

const CreateButton = styled(NavLink)`
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
const Confirm = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: absolute;
  background: hotpink;
  height: 100vh;
  width: 100vw;
`
export default function Home({ cards, onDelete }) {
  const [confirmation, setConfirmation] = useState(false)
  const [cardToDelete, setCardToDelete] = useState(null)

  console.log(onDelete)
  function CheckForNoCards() {
    if (cards.length === 0) {
      return (
        <NoCardsToShow>
          Sorry, there are no postcards to show TT <br />
          Why don't you start adding one?
        </NoCardsToShow>
      )
    } else {
      return null
    }
  }

  function confirmDelete(card) {
    setCardToDelete(card)
    setConfirmation(true)
  }

  function ConfirmationMessage() {
    const card = cardToDelete
    return (
      <Confirm>
        Are you sure?
        <button
          onClick={() => {
            onDelete(card)
            setConfirmation(false)
          }}
        >
          Yes
        </button>
        <button onClick={() => setConfirmation(false)}>No</button>
      </Confirm>
    )
  }
  return (
    <React.Fragment>
      <CardContainer data-cy="card-container">
        {confirmation && <ConfirmationMessage />}
        <CheckForNoCards />
        {cards.map(card => (
          <Card
            date={dayjs(card.date).format('dddd  DD MMMM YYYY ')}
            location={card.location}
            temperatur={card.temperatur}
            picture={card.picture}
            summary={card.summary}
            iAte={card.food}
            itTasted={card.taste}
            key={card._id}
            weather={card.weather}
            onDelete={() => confirmDelete(card)}
          />
        ))}
      </CardContainer>
      <CreateButton to="/create">
        <div>+</div>
      </CreateButton>
    </React.Fragment>
  )
}
