// ロゴの立方体（Facebookページ・make_fb_cubic.py の cube() と同じ形と色。10/23 そろえた）
// 上＝生成り、左＝グレー、右＝朱。斜め上から見た等角図
export default function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden role="img">
      <g stroke="#1e2a30" strokeWidth="1.3" strokeLinejoin="round">
        <polygon points="12,2.5 20.2,7.25 12,12 3.8,7.25" fill="#f2ece2" />
        <polygon points="3.8,7.25 12,12 12,21.5 3.8,16.75" fill="#e4ded3" />
        <polygon points="12,12 20.2,7.25 20.2,16.75 12,21.5" fill="#a0402e" />
      </g>
    </svg>
  );
}
