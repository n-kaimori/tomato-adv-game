import '../style.css'

export default function MapScreen({ onSelectArea, onGoToChoice }) {
  return (
    <div className="map-screen">
      <h2>どこを調査する？</h2>
      <button onClick={() => onSelectArea('畑')}>畑</button>
      <button onClick={() => onSelectArea('市場')}>市場</button>
      <button onClick={() => onSelectArea('厨房')}>厨房</button>

      {onGoToChoice && (
        <div className="choice-button">
          <button onClick={onGoToChoice}>🍅 トマトを選ぶ</button>
        </div>
      )}
    </div>
  )
}
