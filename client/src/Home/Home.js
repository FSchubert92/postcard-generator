import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import CardContainer from '../Card/components/CardContainer'
import dayjs from 'dayjs'
import NoCardsToShow from './NoCardsToShow'
import { CreateButton, Confirm } from './styles'
import { getAllCards } from '../services'

export default function Home({ cards, onDelete, user, getCards }) {
  const [showConfirmMessage, setConfirmMessage] = useState(false)
  const [cardToDelete, setCardToDelete] = useState(null)
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

  useEffect(() => {
    getCards(user)
  }, [])

  function confirmDelete(card) {
    setCardToDelete(card)
    setConfirmMessage(true)
  }

  function ConfirmationMessage() {
    const card = cardToDelete
    return (
      <Confirm>
        Are you sure?
        <div>
          <button
            className={'yes'}
            onClick={() => {
              onDelete(card)
              setConfirmMessage(false)
            }}
          >
            Yes
          </button>
          <button onClick={() => setConfirmMessage(false)}>No</button>
        </div>
      </Confirm>
    )
  }
  return (
    <React.Fragment>
      <CardContainer data-cy="card-container">
        {showConfirmMessage && <ConfirmationMessage />}
        <CheckForNoCards />
        {cards
          .filter(card => card.user === user)
          .map(card => (
            <Card
              date={dayjs(card.date).format('dddd  DD MMMM YYYY ')}
              location={card.location}
              temperature={card.temperature}
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
