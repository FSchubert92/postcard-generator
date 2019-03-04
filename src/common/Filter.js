import React from 'react'
import styled from 'styled-components'

const Grid = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`

const Link = styled.div`
  display: flex;
  scroll-snap-align: start;
  white-space: nowrap;
  cursor: default;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  flex: 1 1;
  background: #eee;
  color: ${p => (p.isActive ? 'hotpink' : '#333')};
  text-transform: uppercase;
`

export default function Filter({ items, active, onClick }) {
  return (
    <Grid>
      {items.map(item => (
        <Link
          key={item}
          isActive={item === active}
          onClick={() => onClick(item)}
        >
          {item}
        </Link>
      ))}
    </Grid>
  )
}
