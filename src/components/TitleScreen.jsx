import '../style.css'

export default function TitleScreen({ onStart }) {
  return (
    <div className="titleScreenWrap">
      <h1 className="titleScreenWrap--imgWrap"><img src="/title.png" alt="おいしさ探偵団 ～トマトマイスターへの道～" /></h1>
      <button className="titleScreenWrap--buttonWrap" onClick={onStart}>ゲームスタート</button>
    </div>
  )
}
