import React from 'react'
import { LocationMessage } from './NewCardFormMessages'

export default function LocationInput(props) {
  console.log(props)
  return (
    <div>
      <h3>Location</h3>
      <input
        onChange={props.onInputChange}
        name="location"
        type="text"
        placeholder="Where have you been"
        value={props.location}
      />
      {props.isLocationEmpty && <LocationMessage />}
    </div>
  )
}
