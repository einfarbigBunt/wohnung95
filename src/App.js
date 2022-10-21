import React from 'react'
import './App.css'
// import { Helmet } from 'react-helmet'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src =
      'https://wohnung95.myspreadshop.de/shopfiles/shopclient/shopclient.nocache.js'
    script.async = true

    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <section className='App'>
        <div id='myShop'>
          <a href='https://wohnung95.myspreadshop.de'>wohnung95</a>
        </div>
      </section>
    </>
  )
}

export default App
