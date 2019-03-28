import React from 'react'
import { LocationMessage } from './ErrorAndSuccessMessages'

export default function LocationInput(props) {
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
