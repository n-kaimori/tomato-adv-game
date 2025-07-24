import '../style.css'

export default function TitleScreen({ onStart }) {
  return (
    <div className="title-screen">
      <h1>🍅 おいしさ探偵団 ～トマトマイスターへの道～</h1>
      <button onClick={onStart}>ゲームスタート</button>
    </div>
  )
}
