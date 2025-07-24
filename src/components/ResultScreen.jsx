export default function ResultScreen({ result, onRestart }) {
  const results = {
    ジューシートマト: '🍝 冷製パスタが完成！',
    スイートトマト: '🥗 カプレーゼにピッタリ！',
    クッキングトマト: '🍲 トマトソース煮込みがおいしい！',
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>あなたの選んだ結果は…</h2>
      <p style={{ fontSize: '1.5em' }}>{results[result]}</p>

      <button
        onClick={onRestart}
        style={{
          marginTop: '2em',
          padding: '12px 24px',
          borderRadius: '8px',
          backgroundColor: '#ff7f7f',
          border: 'none',
          color: 'white',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        🔁 タイトルに戻る
      </button>
    </div>
  )
}
