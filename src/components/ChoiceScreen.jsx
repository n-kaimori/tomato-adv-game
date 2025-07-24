import '../style.css'

export default function ChoiceScreen({ onSelect }) {
  return (
    <div className="choice-screen">
      <h2>選ぶならどのトマト？</h2>
      <button onClick={() => onSelect('ジューシートマト')}>ジューシートマト</button>
      <button onClick={() => onSelect('スイートトマト')}>スイートトマト</button>
      <button onClick={() => onSelect('クッキングトマト')}>クッキングトマト</button>
    </div>
  )
}
