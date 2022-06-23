import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [apiData, setApiData] = useState([])
  const [loadingStatus, setLoadingStatus] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  function fetchData() {
    setLoadingStatus(true)
    fetch(url)
    .then(res => res.json())
    .then(data => setApiData(data))
    .then(setTimeout(() => setLoadingStatus(false), 1000))
    .catch(err => alert(`RELOAD PAGE, ${err}`))
  }

  function removeTour(id) {
    setApiData(prevState => prevState.filter(tour => tour.id !== id))
  }

  return(
    <main>
      {
        loadingStatus
          ? <Loading />
          : <Tours 
              data={apiData} 
              removeTour={removeTour} 
              fetchData={fetchData}
            />
      }
    </main>
  )
}

export default App
