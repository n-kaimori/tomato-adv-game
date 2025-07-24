import '../style.css'

export default function ResultScreen({ result, onRestart }) {
  const results = {
    ジューシートマト: '🍝 冷製パスタが完成！',
    スイートトマト: '🥗 カプレーゼにピッタリ！',
    クッキングトマト: '🍲 トマトソース煮込みがおいしい！',
  }

  return (
    <div className="result-screen">
      <h2>あなたの選んだ結果は…</h2>
      <p className="result-message">{results[result]}</p>

      <button onClick={onRestart} className="restart-button">
        🔁 タイトルに戻る
      </button>
    </div>
  )
}
