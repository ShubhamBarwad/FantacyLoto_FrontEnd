import React from 'react'

function DataBrick(props) {
  return (
    <div className='card data-brick flex-col justify-content-center'>
        <p className="data-number">{props.DataNumber}</p>
        <p className="data-title">{props.DataTitle}</p>
    </div>
  )
}

export default DataBrick