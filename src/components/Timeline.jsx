import React from 'react'

//can either just pass props OR pass in the specific prop name with curlies around it
const Timeline = ({ chirp }) => {
    return (
        <>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{chirp.userName}</h5>
            <p className="card-text">{chirp.msg}</p>
          </div>
        </div>
      </>
    )
}

export default Timeline
