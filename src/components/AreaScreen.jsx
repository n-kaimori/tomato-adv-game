import { useState } from 'react'

const scenarios = {
  畑: {
    みる: 'トマト作りは朝の手入れが命なんだわ（※フラグなし）',
    はなす: { text: 'この時期のトマトは朝霧を浴びると甘い。', flag: 'F1' },
    しらべる: '“朝摘みは糖度が安定”…ふむふむ…（※フラグなし）',
  },
  市場: {
    みる: '糖度計で測ればわかるんだけどね。',
    はなす: 'ハウス栽培は天候に左右されないの。',
    しらべる: { text: '収穫タイミングと保存温度の記録…？', flag: 'F2' },
  },
  厨房: {
    みる: '調理用トマトは皮が厚いほうが火に強いのよ',
    はなす: { text: '加熱すると旨味がギュッと閉じ込められる。', flag: 'F3' },
    しらべる: '“焼き用トマト”…なるほど',
  },
}

export default function AreaScreen({ area, onBack, onSetFlag, flags }) {
  const [message, setMessage] = useState('')

  const handleCommand = (cmd) => {
    const action = scenarios[area][cmd]
    if (typeof action === 'string') {
      setMessage(action)
    } else {
      setMessage(action.text)
      if (action.flag && !flags[action.flag]) {
        onSetFlag(action.flag)
      }
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{area}を調査中</h2>
      <div>
        <button onClick={() => handleCommand('みる')}>みる</button>
        <button onClick={() => handleCommand('はなす')}>はなす</button>
        <button onClick={() => handleCommand('しらべる')}>しらべる</button>
      </div>
      <p style={{ marginTop: '1em' }}>{message}</p>
      <button onClick={onBack}>← マップへ戻る</button>
    </div>
  )
}
