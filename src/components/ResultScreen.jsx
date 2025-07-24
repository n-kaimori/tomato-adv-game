export default function ResultScreen({ result }) {
  const results = {
    ジューシートマト: '🍝 冷製パスタが完成！',
    スイートトマト: '🥗 カプレーゼにピッタリ！',
    クッキングトマト: '🍲 トマトソース煮込みがおいしい！',
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>あなたの選んだ結果は…</h2>
      <p style={{ fontSize: '1.5em' }}>{results[result]}</p>
    </div>
  )
}
