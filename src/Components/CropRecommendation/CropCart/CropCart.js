import React, { useState } from 'react'
import "./CropCart.css"
import { Link } from 'react-router-dom';

function CropCart({ crops }) {
    // console.log(crops)
    const [selectedCrop, setSelectedCrop] = useState(null)

    const handleCropClick = (crop) => {
        setSelectedCrop(crop)
    }
    // let {crop} = props
    return (
        <div className='container cropcart'>
            {/* <Link to={{ pathname: "/cropdetail", state: { cropdata: selectedCrop } }}>

                <div className="card" onClick={()=>handleCropClick(crop)}>
                    <img src={crop.cropImgUrl} className="card-img-top" alt={crop.cropName} />
                    <div className="card-body">
                        <p className="card-text">{crop.cropName}</p>
                    </div>
                </div>
            </Link> */}

            <Link to={{ pathname: "/cropdetail", state: { cropdata: selectedCrop } }}>
                {

                    crops.map(crop => {
                        // console.log(crop)
                        return (

                            <div key={crop.id} className="card" onClick={() => handleCropClick(crop)}>
                                <img src={crop.cropImgUrl} className="card-img-top" alt={crop.cropName} />
                                <div className="card-body">
                                    <p className="card-text">{crop.cropName}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </Link>
        </div>
    )
}

export default CropCart
