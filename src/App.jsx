import { useState } from 'react'
import TitleScreen from './components/TitleScreen.jsx'
import MapScreen from './components/MapScreen.jsx'
import AreaScreen from './components/AreaScreen.jsx'
import ChoiceScreen from './components/ChoiceScreen.jsx'
import ResultScreen from './components/ResultScreen.jsx'

export default function App() {
  const [screen, setScreen] = useState('title')
  const [currentArea, setCurrentArea] = useState(null)
  const [flags, setFlags] = useState({ F1: false, F2: false, F3: false })
  const [result, setResult] = useState(null)

  const allFlagsCollected = Object.values(flags).every(Boolean)

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
          onGoToChoice={allFlagsCollected ? () => setScreen('choice') : null}
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
      {screen === 'choice' && (
        <ChoiceScreen
          onSelect={(selected) => {
            setResult(selected)
            setScreen('result')
          }}
        />
      )}
      {screen === 'result' && <ResultScreen result={result} />}
    </>
  )
}
