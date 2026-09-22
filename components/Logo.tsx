export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        {/* Outer Hexagon Shell (Zero-Radius Technical Grid) */}
        <polygon points="50,2 93,26 93,74 50,98 7,74 7,26" fill="var(--gmk-orange)" />
        
        {/* Inner Precision Border */}
        <polygon
          points="50,10 87,31 87,69 50,90 13,69 13,31"
          fill="none"
          stroke="#ffffff"
          className="opacity-30"
          strokeWidth="2"
        />

        {/* Corporate Typography */}
        <text
          x="50"
          y="60"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="var(--font-fira-sans), Arial, sans-serif"
          fontWeight="800"
          fontSize="30"
          letterSpacing="-1.5"
        >
          GMK
        </text>

        {/* Sharp Industrial Accent Bar (Zero-Radius) */}
        <rect x="22" y="70" width="56" height="4" fill="var(--gmk-ink)" />
      </svg>
    </div>
  );
}