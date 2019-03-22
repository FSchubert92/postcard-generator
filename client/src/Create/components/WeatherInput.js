import React from 'react'
import { WeatherMessage } from './ErrorAndSuccessMessages'
import { DropDownMenu } from './FormStyles'

export default function WeatherInput(props) {
  console.log(props)
  return (
    <div>
      <h3>Weather</h3>
      <input
        onChange={props.onInputChange}
        name="temperatur"
        type="text"
        placeholder="Temperatur in C°"
        value={props.temperatur}
        required
      />
      <label>
        Choose the weather condition
        <DropDownMenu
          name="weather"
          size="1"
          value={props.weather}
          onChange={props.onInputChange}
          required
        >
          <option>Clear</option>
          <option>Clouds</option>
          <option> Snow</option>
          <option> Rain</option>
          <option> Drizzle</option>
          <option> Thunderstorm</option>
        </DropDownMenu>
        {props.isWeatherUndefined && <WeatherMessage />}
      </label>
    </div>
  )
}
