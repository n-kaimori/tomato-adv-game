import '../style.css'

export default function TitleScreen({ onStart }) {
  return (
    <div className="titleScreenWrap">
      <div className="titleScreenInner">
        <h1 className="titleScreenInner--imgWrap"><img src="/title.png" alt="おいしさ探偵団 ～トマトマイスターへの道～" /></h1>
        <button className="titleScreenInner--buttonWrap" onClick={onStart}>ゲームスタート</button>
      </div>
    </div>
  )
}
