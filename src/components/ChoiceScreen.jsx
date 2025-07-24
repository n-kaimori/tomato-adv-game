export default function ChoiceScreen({ onSelect }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>選ぶならどのトマト？</h2>
      <button onClick={() => onSelect('ジューシートマト')}>ジューシートマト</button>
      <button onClick={() => onSelect('スイートトマト')}>スイートトマト</button>
      <button onClick={() => onSelect('クッキングトマト')}>クッキングトマト</button>
    </div>
  )
}
