import { load } from '@2gis/mapgl'
import React, { useEffect } from 'react'
const MapWrapper = React.memo(
  () => {
    return (
      <div
        style={{
          width: '400px',
          height: '250px ',
          filter: 'drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.15))',
          borderRadius: '20px'
        }}
        id="map-container"
      ></div>
    )
  },
  () => true
)

export const Map = () => {
  useEffect(() => {
    console.log('render')
    let map
    load().then(mapglAPI => {
      map = new mapglAPI.Map('map-container', {
        // cordinates of Bishkek
        center: [74.582748, 42.882004],
        zoom: 13,
        key: '614302eb-06b3-45da-9ade-e49b08bbe1c0'
      })
    })

    // Destroy the map on unmount
    return () => map && map.destroy()
  }, [])

  return (
    <div>
      <MapWrapper />
    </div>
  )
}
