import React, { useState } from 'react'
import EXIF from 'exif-js'
import { getLocation } from '../services'

function toDecimal(number) {
  return (
    number[0].numerator +
    number[1].numerator / (60 * number[1].denominator) +
    number[2].numerator / (3600 * number[2].denominator)
  )
}

export function getPictureLocation(picture) {
  let longitude = null
  let latitude = null
  EXIF.getData(picture, function() {
    longitude = EXIF.getTag(this, 'GPSLongitude')
    latitude = EXIF.getTag(this, 'GPSLatitude')
    longitude = toDecimal(longitude)
    console.log((latitude = toDecimal(latitude)))
  })

  //   getLocation(latitude, longitude).then(res => {
  //     location = res.data.address.address29
  //   })
  //   console.log(location)
}
