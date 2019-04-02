import React from 'react'
import { WeatherMessage } from './ErrorAndSuccessMessages'
import { DropDownMenu } from '../styles'

export default function WeatherInput(props) {
  return (
    <div>
      <h3>Weather</h3>
      <input
        onChange={props.onInputChange}
        name="temperature"
        type="text"
        placeholder="temperature in C°"
        value={props.temperature}
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
          <option value="">Please choose the weather</option>
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
