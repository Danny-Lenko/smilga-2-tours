import React from 'react'
import Tour from './Tour'

const Tours = ({ data, removeTour, fetchData}) => {
  const allTours = data.map(item => (
    <Tour item={item} key={item.id} removeTour={removeTour} />
  ))

  return(
    <>
      {
        data[0]
          ? <>
            <div className="title">
              <h2>Our Tours</h2>
              <p className="underline"></p>
            </div>
            {allTours}
          </>

          : <div className="title">
            <h2>No Tours Left</h2>
            <button 
              className="btn"
              onClick={fetchData}
            >
              refresh
            </button>
          </div>
      }

    </>
  )
}

export default Tours
