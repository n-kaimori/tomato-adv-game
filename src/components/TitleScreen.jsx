export default function TitleScreen({ onStart }) {
  return (
    <div style={{ textAlign: 'center', padding: '2em' }}>
      <h1>🍅 おいしさ探偵団 ～トマトマイスターへの道～</h1>
      <button onClick={onStart}>ゲームスタート</button>
    </div>
  )
}
