import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data.js'
function App() {
  const entryElements = data.map((el, index) => {
    return (
      <Entry
        // key={el.id}
        // img={el.img}
        // title={el.title}
        // country={el.country}
        // googleMapsLink={el.googleMapsLink}
        // dates={el.dates}
        // text={el.text}

        // el={el}

        {...el}
      />
    )
  })
  return (
    <>
    <Header />
    <main className='container'>
      {entryElements}
    </main>
    {/* <Entry 
      
      img={{ 
              src: img.src,
              alt: img.alt
          }}
          title={title}
          country={country}
          googleMapsLink={googleMapsLink}
          dates={dates}
          text={text}
    /> */}
    </>
  )
}

export default App
