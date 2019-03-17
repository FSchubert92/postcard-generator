import React from 'react'
import DateMessage from './NewCardFormMessages'

export default function LocationInput(onInputChange) {
  return (
    <div>
      <h3>Location</h3>
      <input
        onChange={onLocationInputChange}
        name="location"
        type="text"
        placeholder="Where have you been"
        value={imageLocation}
      />
      {isLocationEmpty && <LocationMessage />}
    </div>
  )
}
