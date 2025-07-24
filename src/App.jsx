import { useState } from 'react'
import TitleScreen from './components/TitleScreen.jsx'
import MapScreen from './components/MapScreen.jsx'

export default function App() {
  const [screen, setScreen] = useState('title')

  return (
    <>
      {screen === 'title' && <TitleScreen onStart={() => setScreen('map')} />}
      {screen === 'map' && <MapScreen />}
    </>
  )
}
