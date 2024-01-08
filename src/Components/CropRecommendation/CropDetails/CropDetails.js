import React from 'react'
import { useLocation } from "react-router-dom"
import "./CropDetails.css"

function CropDetails() {
  const location = useLocation()
  const cropdata = location.state?.cropdata
  console.log(JSON.stringify(cropdata))

  return (
    <div>
      {/* <img src={crop.cropI1maUrl} alt={crop.cropName} /> */}
      {/* <p>{crop.description}</p> */}
      crop details
      {cropdata && (
        <pre>{JSON.stringify(cropdata, null, 2)}</pre>
      )}
      {/* <h2>{cropdata.cropName}</h2> */}
      
    </div>

  )
}

export default CropDetails
