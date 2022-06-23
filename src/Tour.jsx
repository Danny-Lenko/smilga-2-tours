import React, { useState } from 'react'

const Tour = ({item, removeTour}) => {
  const {id, image, info, name, price} = item
  const [fullInfo, setFullInfo] = useState(false)

  function showInfo(inputData) {
    return inputData.length > 200
      ? inputData.slice(0, 200) + '...'
      : inputData
  }

  function showAndHideInfo() {
    setFullInfo(prevState => !prevState)
  }
  
  return(
    <article className="single-tour">
      <img src={image} alt=""/>

      <footer>

        <section className="tour-info">
          <h4>{name}</h4>
          <p className="tour-price">${price}</p>
        </section>

          <p>
            {fullInfo ? info : showInfo(info)}
            <span
              className='info-btn'
              onClick={showAndHideInfo}
            >
              {fullInfo ? 'Show Less' : 'Read More'}
            </span>
          </p>

        <button 
          className="delete-btn"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>

      </footer>
    </article>
  )
}

export default Tour
