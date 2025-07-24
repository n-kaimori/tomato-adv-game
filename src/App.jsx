import { useState } from 'react'
import TitleScreen from './components/TitleScreen.jsx'
import MapScreen from './components/MapScreen.jsx'
import AreaScreen from './components/AreaScreen.jsx'

export default function App() {
  const [screen, setScreen] = useState('title')
  const [currentArea, setCurrentArea] = useState(null)
  const [flags, setFlags] = useState({ F1: false, F2: false, F3: false })

  const handleSetFlag = (key) => {
    setFlags((prev) => ({ ...prev, [key]: true }))
  }

  return (
    <>
      {screen === 'title' && <TitleScreen onStart={() => setScreen('map')} />}
      {screen === 'map' && (
        <MapScreen
          onSelectArea={(area) => {
            setCurrentArea(area)
            setScreen('area')
          }}
        />
      )}
      {screen === 'area' && (
        <AreaScreen
          area={currentArea}
          onBack={() => setScreen('map')}
          onSetFlag={handleSetFlag}
          flags={flags}
        />
      )}
    </>
  )
}
