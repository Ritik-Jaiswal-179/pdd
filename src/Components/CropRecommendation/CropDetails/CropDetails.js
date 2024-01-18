import React from 'react'
import { useLocation } from "react-router-dom"
import "./CropDetails.css"

function CropDetails() {
  const location = useLocation()
  // console.log(location.state?.cropdata)
  const cropdata = location.state?.cropdata
  console.log(cropdata)

  return (
    <div>
      <img src={cropdata.cropImgUrl} alt="cropdata.cropName" />
      crop details
      
      
    </div>

  )
}

export default CropDetails
