import React from 'react'
import Filter from './Filter'
import styled from 'styled-components'
import Title from './Title'

const StyledHeader = styled.header`
  overflow: hidden;
`

export default function Header({ cards, activeTag, setActiveTag }) {
  const tags = [
    'all',
    ...new Set(cards.reduce((prev, curr) => [...prev, ...curr.tags], [])),
  ]

  return (
    <StyledHeader>
      <Title data-cy="header-title">{activeTag}</Title>
      <Filter items={tags} active={activeTag} onClick={setActiveTag} />
    </StyledHeader>
  )
}
