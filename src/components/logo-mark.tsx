export function LogoMark({ width = 26, height = 34 }: { width?: number; height?: number }) {
  return (
    <svg
      className="logo-mark"
      width={width}
      height={height}
      viewBox="0 0 28 40"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M14 2C6 4 2 11 2 15c0 7 5.5 12 12 12.6V2Z" fill="var(--sage)" />
      <path d="M14 2c8 2 12 9 12 13 0 7-5.5 12-12 12.6V2Z" fill="var(--forest)" />
      <line x1="14" y1="2" x2="14" y2="27.6" stroke="var(--ivory)" strokeWidth="1.4" />
      <line x1="14" y1="27.6" x2="14" y2="37" stroke="var(--ivory)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
