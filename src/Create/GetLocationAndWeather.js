import React, { useState } from 'react'
import EXIF from 'exif-js'
import { getLocation, getWeather } from '../services'

export default function GetLocationAndWeather(picture) {
  // const [location, setLocation] = useState('')
  // const [weatherData, setWeatherData] = useState('')
  let weather = {}
  let location = {}
  EXIF.getData(picture, async function() {
    let longitude = null
    let latitude = null

    longitude = EXIF.getTag(this, 'GPSLongitude')
    latitude = EXIF.getTag(this, 'GPSLatitude')

    try {
      longitude = toDecimal(longitude)
      latitude = toDecimal(latitude)

      await getWeather(latitude, longitude).then(
        res =>
          (weather = {
            temperatur: Math.round(res.data.main.temp) + ' C°',
            weather: res.data.weather[0].main,
          })
      )
      console.log(weather)
      await getLocation(latitude, longitude).then(
        res =>
          (location = {
            location:
              res.data.address.city ||
              res.data.address.village ||
              res.data.address.country,
          })
      )
      console.log(location)
    } catch (error) {
      return { autoImage: false }
    }
    // return {
    //   temperatur: weatherData.temperatur,
    //   weather: weatherData.weather,
    //   location,
    // }
    return location
  })

  function toDecimal(number) {
    return (
      number[0].numerator +
      number[1].numerator / (60 * number[1].denominator) +
      number[2].numerator / (3600 * number[2].denominator)
    )
  }
  console.log(location)
}
