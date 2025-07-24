export default function MapScreen({ onSelectArea }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>どこを調査する？</h2>
      <button onClick={() => onSelectArea('畑')}>畑</button>
      <button onClick={() => onSelectArea('市場')}>市場</button>
      <button onClick={() => onSelectArea('厨房')}>厨房</button>
    </div>
  )
}
