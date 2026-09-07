// Eight tapered needles radiating from a solid core: four long on the cardinals,
// four short on the diagonals. The two sets breathe out of phase, which reads as
// a slow twinkle rather than a pulse.
const NEEDLES = [0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
  const long = i % 2 === 0;
  const tip = long ? 1.9 : 6.6;
  const halfWidth = long ? 1.05 : 0.85;
  const base = 11.2;
  return {
    deg,
    points: `12,${tip} ${12 - halfWidth},${base} ${12 + halfWidth},${base}`,
    delay: long ? 0 : -2.4,
  };
});

export function Spark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {NEEDLES.map((needle) => (
        <g key={needle.deg} transform={`rotate(${needle.deg} 12 12)`}>
          <polygon
            className="spark-ray"
            style={{ animationDelay: `${needle.delay}s` }}
            points={needle.points}
          />
        </g>
      ))}
      <circle className="spark-core" cx="12" cy="12" r="1.15" />
    </svg>
  );
}
